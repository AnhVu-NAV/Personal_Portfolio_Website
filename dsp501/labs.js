(() => {
  "use strict";

  const catalog = [
    { id: "lay-mau", name: "Lấy mẫu và chồng tần", keywords: "aliasing Nyquist tần số Hz vòng trên mẫu" },
    { id: "tich-chap", name: "Tích chập rời rạc", keywords: "convolution LTI đáp ứng xung FIR trượt nhân cộng" },
    { id: "dft", name: "Phổ DFT và cửa sổ", keywords: "FFT cửa sổ Hann spectral leakage rò phổ phổ Fourier" }
  ];
  const vi = (value, digits = 2) => value.toLocaleString("vi-VN", { maximumFractionDigits: digits });
  const line = (x1, y1, x2, y2, cls = "lab-axis") =>
    `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const text = (x, y, content, anchor = "middle") =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}">${content}</text>`;
  const polyline = (values, x, y, cls) =>
    `<polyline class="${cls}" points="${values.map((value, i) => `${x(i).toFixed(2)},${y(value).toFixed(2)}`).join(" ")}"/>`;
  const range = (id, title, min, max, step, value) =>
    `<label for="${id}"><span>${title} <strong id="${id}-value"></strong></span>
      <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"></label>`;
  const chart = label => `<svg class="lab-chart" role="img" aria-label="${label}"></svg>`;
  const feedback = '<p class="lab-result" aria-live="polite"></p>';

  function setup(root, render) {
    const svg = root.querySelector(".lab-chart");
    const redraw = () => {
      const width = svg.clientWidth;
      if (!width) return;
      svg.setAttribute("viewBox", `0 0 ${width} 220`);
      render(svg, width);
    };
    root.addEventListener("input", redraw);
    const observer = new ResizeObserver(redraw);
    observer.observe(svg);
    redraw();
    return () => {
      root.removeEventListener("input", redraw);
      observer.disconnect();
    };
  }

  function sampling(root) {
    root.innerHTML = `<h2>Hai sóng, cùng một dãy mẫu</h2>
      <p>Chọn tần số của sóng cos và tốc độ lấy mẫu. Khi có chồng tần, đường nét đứt đi qua đúng những chấm của sóng gốc.</p>
      <div class="lab-controls">${range("tone", "Sóng gốc", 1, 12, 1, 7)}${range("rate", "Tốc độ lấy mẫu", 4, 32, 1, 8)}</div>
      <div class="lab-key"><span>Sóng gốc</span><span class="dashed" id="alias-key">Sóng trùng mẫu</span><span class="dot">Điểm lấy mẫu</span></div>
      ${chart("Sóng cos theo thời gian và các điểm lấy mẫu")}${feedback}`;
    const frequencyField = root.querySelector("#tone");
    const rateField = root.querySelector("#rate");
    const result = root.querySelector(".lab-result");
    const wave = (frequency, time) => Math.cos(2 * Math.PI * frequency * time);
    return setup(root, (svg, width) => {
      const frequency = Number(frequencyField.value);
      const rate = Number(rateField.value);
      const alias = Math.abs(frequency - rate * Math.round(frequency / rate));
      const hasAlias = alias !== frequency;
      root.querySelector("#tone-value").textContent = `${frequency} Hz`;
      root.querySelector("#rate-value").textContent = `${rate} mẫu/giây`;
      root.querySelector("#alias-key").hidden = !hasAlias;
      const x = t => 29 + t * (width - 43);
      const y = v => 92 - 65 * v;
      const ticks = width < 400 ? [0, .5, 1] : [0, .25, .5, .75, 1];
      const grid = [-1, 0, 1].map(v => line(x(0), y(v), x(1), y(v)) + text(x(0) - 7, y(v) + 4, v, "end")).join("") +
        ticks.map(t => line(x(t), 18, x(t), 171) + text(x(t), 190, vi(t))).join("");
      const curve = (f, cls) => polyline(Array.from({length: 481}, (_, i) => wave(f, i / 480)), i => x(i / 480), y, cls);
      const marks = Array.from({length: rate + 1}, (_, i) => `<circle class="lab-mark" cx="${x(i / rate)}" cy="${y(wave(frequency, i / rate))}" r="3"/>`).join("");
      svg.innerHTML = grid + curve(frequency, "lab-original") + (hasAlias ? curve(alias, "lab-alias") : "") + marks + text(width / 2, 212, "Thời gian (giây)");
      svg.setAttribute("aria-label", hasAlias ? `Sóng ${frequency} Hz và ${alias} Hz đi qua cùng các điểm lấy mẫu` : `Sóng ${frequency} Hz được lấy ở ${rate} mẫu mỗi giây`);
      result.textContent = hasAlias
        ? `${frequency} Hz và ${alias} Hz tạo cùng dãy cos khi lấy ${rate} mẫu/giây. Mốc Nyquist là ${vi(rate / 2)} Hz.`
        : frequency === rate / 2
          ? `Sóng nằm đúng mốc Nyquist (${vi(rate / 2)} Hz). Hình dùng pha 0. Nếu đổi sang pha π/2, mọi mẫu sẽ bằng 0.`
          : `${frequency} Hz nằm dưới mốc Nyquist ${vi(rate / 2)} Hz. Mỗi bước lấy mẫu tiến ${vi(frequency / rate, 3)} vòng.`;
    });
  }

  function convolution(root) {
    root.innerHTML = `<h2>Trượt, nhân và cộng</h2><p>Với mỗi n, nhân từng x[k] với h[n−k], rồi cộng. Đổi n để xem vị trí hai dãy chồng lên nhau.</p>
      <div class="lab-controls"><label for="conv-kernel">Đáp ứng xung h
        <select id="conv-kernel"><option value="smooth">Trung bình hai điểm [0,5; 0,5]</option><option value="diff">Hiệu hai điểm [1; −1]</option><option value="echo">Tiếng vọng [1; 0; 0,5]</option></select></label>
        ${range("conv-index", "Chỉ số đầu ra", 0, 4, 1, 1)}</div>
      <div class="lab-steps"></div>${chart("Dãy tích chập y[n], có đánh dấu mẫu đang chọn")}${feedback}`;
    const x = [1, 2, 1, 0];
    const kernels = { smooth: [.5, .5], diff: [1, -1], echo: [1, 0, .5] };
    const filter = root.querySelector("#conv-kernel");
    const indexField = root.querySelector("#conv-index");
    const steps = root.querySelector(".lab-steps");
    const result = root.querySelector(".lab-result");
    return setup(root, (svg, width) => {
      const h = kernels[filter.value];
      indexField.max = x.length + h.length - 2;
      const n = Number(indexField.value);
      root.querySelector("#conv-index-value").textContent = `n = ${n}`;
      const y = Array.from({length: Number(indexField.max) + 1}, (_, i) =>
        x.reduce((sum, value, k) => sum + value * (h[i - k] ?? 0), 0));
      const xPos = i => 42 + i * (width - 74) / (y.length - 1);
      const yPos = value => 112 - 46 * value;
      svg.innerHTML = line(24, yPos(0), width - 13, yPos(0)) +
        y.map((value, i) => {
          const cls = n === i ? "lab-highlight" : "lab-mark";
          const px = xPos(i);
          const py = yPos(value);
          return line(px, yPos(0), px, py, cls) +
            `<circle class="${cls}" cx="${px}" cy="${py}" r="4"/>` +
            text(px, py + (value < 0 ? 15 : -9), vi(value)) + text(px, 192, i);
        }).join("") + text(width / 2, 212, "Chỉ số n");
      steps.innerHTML = x.map((value, k) => {
        const coefficient = h[n - k] ?? 0;
        return `<div class="lab-step"><span>k = ${k}</span><strong>${vi(value)} × (${vi(coefficient)})</strong></div>`;
      }).join("");
      svg.setAttribute("aria-label", `Dãy đầu ra: ${y.map(value => vi(value)).join("; ")}`);
      result.textContent = `y[${n}] = ${x.map((value, k) => vi(value * (h[n - k] ?? 0))).join(" + ")} = ${vi(y[n])}.`;
    });
  }

  function dft(root) {
    root.innerHTML = `<h2>Khi tần số nằm giữa hai bin</h2><p>Quan sát phổ một phía của sóng cos lấy 64 mẫu. Chọn 3 vòng rồi đổi thành 3,5 vòng trong khung để thấy năng lượng trải sang các bin lân cận.</p>
      <div class="lab-controls">${range("dft-tone", "Số vòng trong khung", 1, 12, .25, 3.5)}
        <label for="dft-window">Cửa sổ<select id="dft-window"><option value="rect">Chữ nhật</option><option value="hann">Hann</option></select></label></div>
      ${chart("Biên độ DFT một phía theo chỉ số bin")}${feedback}`;
    const N = 64;
    const frequency = root.querySelector("#dft-tone");
    const windowField = root.querySelector("#dft-window");
    const result = root.querySelector(".lab-result");
    return setup(root, (svg, width) => {
      const cycles = Number(frequency.value);
      const hann = windowField.value === "hann";
      root.querySelector("#dft-tone-value").textContent = vi(cycles);
      const weights = Array.from({length: N}, (_, n) => hann ? .5 - .5 * Math.cos(2 * Math.PI * n / N) : 1);
      const weightSum = weights.reduce((sum, weight) => sum + weight, 0);
      const samples = weights.map((weight, n) => weight * Math.cos(2 * Math.PI * cycles * n / N));
      const amplitudes = Array.from({length: N / 2 + 1}, (_, k) => {
        let real = 0;
        let imag = 0;
        for (let n = 0; n < N; n++) {
          const angle = 2 * Math.PI * k * n / N;
          real += samples[n] * Math.cos(angle);
          imag -= samples[n] * Math.sin(angle);
        }
        return (k === 0 || k === N / 2 ? 1 : 2) * Math.hypot(real, imag) / weightSum;
      });
      const peak = amplitudes.indexOf(Math.max(...amplitudes));
      const span = width - 47;
      const x = k => 31 + span * k / (N / 2);
      const y = value => 170 - 143 * value;
      const bars = amplitudes.map((value, k) => {
        const barWidth = Math.max(2, span / 52);
        const height = 170 - y(value);
        return `<rect class="${k === peak ? "lab-highlight" : "lab-mark"}" x="${x(k) - barWidth / 2}" y="${y(value)}" width="${barWidth}" height="${height}"/>`;
      }).join("");
      const grid = [0, .5, 1].map(value => line(x(0), y(value), x(32), y(value)) + text(24, y(value) + 4, vi(value), "end")).join("");
      svg.innerHTML = grid + bars + [0, 8, 16, 24, 32].map(k => text(x(k), 190, k)).join("") + text(width / 2, 212, "Chỉ số bin k");
      svg.setAttribute("aria-label", `Phổ DFT của sóng ${vi(cycles)} vòng mỗi khung. Đỉnh tại bin ${peak}.`);
      result.textContent = `Đỉnh tại bin ${peak}, biên độ ${vi(amplitudes[peak], 3)}. ` +
        (hann ? "Cửa sổ Hann giảm rò xa đỉnh và làm búp chính rộng hơn." : Number.isInteger(cycles) ?
          "Sóng nằm đúng tâm một bin với cửa sổ chữ nhật." : "Sóng nằm giữa các bin, nên năng lượng trải ra nhiều bin.");
    });
  }

  const experiments = { "lay-mau": sampling, "tich-chap": convolution, dft };
  window.DSP_LABS = { catalog, mount: (id, root) => experiments[id](root) };
})();
