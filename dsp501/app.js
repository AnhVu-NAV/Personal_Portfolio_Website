(() => {
  "use strict";

  const chapters = window.DSP_CHAPTERS.sort((a, b) => a.id - b.id);
  const core = chapters.filter(chapter => chapter.id <= 13);
  const tracks = ["Nền tảng", "Phổ và thuật toán", "Bộ lọc và ứng dụng", "Phụ lục"];
  const titles = {
    "tong-quan": "Tổng quan",
    "theo-slide": "Theo slide môn học",
    "cong-thuc": "Tra công thức",
    "mo-phong": "Mô phỏng",
    "tai-lieu": "Tài liệu và quy ước"
  };
  const pad = number => String(number).padStart(2, "0");
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const normalize = value => String(value ?? "").toLowerCase().normalize("NFD")
    .replace(/\p{Diacritic}/gu, "").replace(/đ/g, "d").replace(/[-_‐‑–—]/g, " ").replace(/\s+/g, " ").trim();
  const keywordsFor = (chapter, index) => window.DSP_ENGLISH_KEYWORDS?.[chapter.id]?.[index] ?? "";
  const keywordLine = value => value ? `<p class="keyword-line" lang="en">${escape(value)}</p>` : "";
  const href = (chapter, topic) => `#chuong-${chapter.id}${topic === undefined ? "" : "/muc-" + topic}`;
  const find = selector => document.querySelector(selector);
  const main = find("#main");
  const dialog = find("#search-dialog");
  const searchInput = find("#search-input");
  const navigation = find("#navigation");
  const sidebar = find("#sidebar");
  const menu = find(".menu-button");
  const overlay = find(".menu-overlay");
  const searchResults = find("#search-results");

  // Số bộ slide giữ theo tên tệp; số trang đếm từ bìa PDF.
  const slideDecks = [
    { number: 1, title: "Nhập môn DSP", file: "1_Introduction.pdf", chapterId: 1, topics: [
      ["2–10", "DSP, hệ thống và phân loại tín hiệu", 0],
      ["11–12", "Sóng cos, vòng/mẫu và radian/mẫu", 4],
      ["13–15", "ADC, DAC và lấy mẫu đều", 3],
      ["16–18", "Chồng tần, định lý lấy mẫu và nội suy", 6],
      ["19–20", "Lượng tử hóa và mã hóa mẫu", 8]
    ] },
    { number: 2, title: "Tín hiệu và hệ thống rời rạc", file: "2_Discrete-Time Signals and Systems.pdf", chapterId: 2, topics: [
      ["2–8", "Dãy cơ bản, phân loại và biến đổi chỉ số", 0],
      ["9–14", "Tính chất của hệ và cách ghép hệ", 2],
      ["15–20", "Phân rã thành xung và tổng tích chập", 3],
      ["21–24", "Nhân quả, ổn định, FIR và IIR", 5],
      ["25–28", "Thực hiện hệ rời rạc", 6],
      ["29–31", "Tương quan chéo và tự tương quan", 9]
    ] },
    { number: 4, title: "Biến đổi Z", file: "4_The Z Transform and its application to the analysis of LTI Systems.pdf", chapterId: 3, topics: [
      ["3–7", "Biến đổi Z thuận và miền hội tụ", 0],
      ["8–9", "Biến đổi Z ngược và các tính chất", 4],
      ["10–17", "Cực, điểm không và dạng đáp ứng theo thời gian", 3],
      ["18", "Các cách tính biến đổi Z ngược", 4],
      ["19–22", "Phân tích hệ LTI bằng biến đổi Z", 5]
    ] },
    { number: 5, title: "Phân tích tần số", file: "5_Frequency Analysis of Signals.pdf", chapterId: 4, topics: [
      ["3–9", "Chuỗi Fourier liên tục và phổ công suất", 0],
      ["10–13", "Biến đổi Fourier liên tục và phổ năng lượng", 1],
      ["14–17", "Chuỗi Fourier của dãy tuần hoàn", 2],
      ["18–23", "DTFT của dãy không tuần hoàn", 3],
      ["24–27", "Quan hệ với biến đổi Z và băng thông", 9],
      ["28–35", "Các tính chất biến đổi Fourier", 6]
    ] },
    { number: 6, title: "Biến đổi Fourier rời rạc (DFT)", file: "6_Discrete Fourier Transform.pdf", chapterId: 7, topics: [
      ["3–8", "Lấy mẫu DTFT, DFT và IDFT", 0],
      ["9–10", "Tính chất DFT và dịch vòng", 3],
      ["11–12", "Lọc theo khối bằng overlap-save và overlap-add", 5],
      ["13–18", "Dùng DFT để phân tích phổ", 6]
    ] },
    { number: 7, title: "Thuật toán FFT", file: "7_Efficient Computation of DFT_Fast Fourier Transform.pdf", chapterId: 8, topics: [
      ["3–5", "Chia để trị và giảm số phép tính DFT", 0],
      ["6–13", "FFT radix-2 và sơ đồ cánh bướm", 1],
      ["14", "Thứ tự dữ liệu khi cài đặt FFT", 3],
      ["15", "Ứng dụng FFT cho dãy thực", 4]
    ] },
    { number: 8, title: "Thiết kế bộ lọc FIR", file: "8_Design of Digital Filters FIR.pdf", chapterId: 10, topics: [
      ["2–4", "Chọn bộ lọc và đọc đặc tả dải thông, dải chắn", 0],
      ["5", "Đối xứng, phản đối xứng và pha tuyến tính", 1],
      ["6–15", "Thiết kế FIR pha tuyến tính bằng cửa sổ", 2]
    ] },
    { number: 9, title: "Thiết kế bộ lọc IIR", file: "9_Design of Digital Filters IIR.pdf", chapterId: 10, topics: [
      ["2–8", "Từ lọc tương tự sang IIR: sai phân lùi và bất biến xung", 5],
      ["9", "Biến đổi song tuyến tính", 6],
      ["10–16", "Các họ bộ lọc tương tự trong slide", 7]
    ] }
  ];

  const icons = {
    "tong-quan": '<path d="M3 10l9-7 9 7v10h-6v-6H9v6H3z"/>',
    "theo-slide": '<path d="M3 4h18v13H3zM8 21l4-4 4 4M7 9h10M7 12h6"/>',
    "cong-thuc": '<path d="M7 4h11M7 20h11M7 4l7 8-7 8"/>',
    "mo-phong": '<path d="M3 13h4l3-7 4 12 3-5h4"/>',
    "tai-lieu": '<path d="M4 4h7v15H4zM13 4h7v15h-7z"/>'
  };

  const allTopics = chapters.flatMap(chapter => chapter.topics.map((topic, index) => ({
    chapter, topic, index, keywords: keywordsFor(chapter, index)
  })));
  const formulas = allTopics.filter(({topic}) => topic.formula);
  const readProgress = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("dsp501-completed-v1") || "[]");
      return new Set(Array.isArray(stored) ? stored.filter(id => core.some(chapter => chapter.id === id)) : []);
    } catch {
      return new Set();
    }
  };
  const completed = readProgress();
  let route = "";
  let disposeLab = () => {};

  function setMenu(open) {
    sidebar.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    overlay.hidden = !open;
  }

  function renderNavigation() {
    const savedScroll = navigation.scrollTop;
    const links = Object.entries(titles).map(([key, title]) => {
      const selected = route === key ? ' aria-current="page"' : "";
      return `<a class="nav-link" href="#${key}"${selected}><span class="nav-index"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[key]}</svg></span>${title}</a>`;
    }).join("");
    const groups = tracks.map(group => {
      const items = chapters.filter(chapter => chapter.group === group).map(chapter => {
        const selected = route === "chuong-" + chapter.id ? ' aria-current="page"' : "";
        return `<a class="nav-link" href="${href(chapter)}"${selected}><span class="nav-index">${pad(chapter.id)}</span><span>${escape(chapter.title)}</span>${completed.has(chapter.id) ? '<span class="nav-check" aria-label="Đã học">✓</span>' : ""}</a>`;
      }).join("");
      return `<div class="nav-group"><p class="nav-heading">${escape(group)}</p>${items}</div>`;
    }).join("");
    navigation.innerHTML = `<div class="nav-group"><p class="nav-heading">Không gian học</p>${links}</div>${groups}`;
    navigation.scrollTop = savedScroll;
    find("#progress").value = completed.size;
    find("#progress-count").textContent = `${completed.size}/${core.length}`;
  }

  function signalIllustration() {
    const value = t => Math.cos(2 * Math.PI * (2.9 * t - .09)) * (.54 + .42 * Math.sin(Math.PI * t));
    const x = t => 20 + 360 * t;
    const y = t => 104 - 69 * value(t);
    const grid = [...Array(9)].map((_, index) => {
      const column = x(index / 8);
      return `<line x1="${column}" x2="${column}" y1="23" y2="181"/>`;
    }).join("") + [25, 64, 104, 144, 181].map(row => `<line x1="20" x2="380" y1="${row}" y2="${row}"/>`).join("");
    const wave = Array.from({ length: 181 }, (_, index) => {
      const t = index / 180;
      return `${x(t).toFixed(1)},${y(t).toFixed(1)}`;
    }).join(" ");
    const samples = Array.from({ length: 23 }, (_, index) => {
      const t = index / 22;
      return `<line x1="${x(t)}" x2="${x(t)}" y1="104" y2="${y(t)}"/><circle cx="${x(t)}" cy="${y(t)}" r="3.1"/>`;
    }).join("");
    return `<figure class="hero-figure">
      <svg viewBox="0 0 400 204" role="img" aria-label="Sóng liên tục và các chấm biểu diễn mẫu rời rạc">
        <g class="hero-grid">${grid}</g><polyline class="hero-wave" points="${wave}"/><g class="hero-samples">${samples}</g>
      </svg>
      <figcaption><span>x(t) · LIÊN TỤC</span><span>x[n] · RỜI RẠC</span></figcaption>
    </figure>`;
  }

  function home() {
    const next = core.find(chapter => !completed.has(chapter.id));
    const groups = tracks.slice(0, 3).map((group, index) => {
      const links = core.filter(chapter => chapter.group === group).map(chapter => `
        <a class="track-link" href="${href(chapter)}"><span>${pad(chapter.id)}</span><span>${escape(chapter.title)}</span>
        <span aria-hidden="true">${completed.has(chapter.id) ? "✓" : "↗"}</span></a>`).join("");
      return `<article class="track"><div class="track-top"><span class="track-number">${pad(index + 1)}</span><h3>${group}</h3></div>${links}</article>`;
    }).join("");
    return `<section class="hero">
      <div><div class="hero-kicker">Giáo trình DSP · Tiếng Việt</div>
      <h1>Hiểu tín hiệu.<br><span>Làm chủ công thức.</span></h1>
      <p>Học xử lý tín hiệu số từ lấy mẫu đến bộ lọc thích nghi, theo giáo trình của Proakis và Manolakis.</p>
      <div class="actions"><a class="button primary" href="${next ? href(next) : "#cong-thuc"}">${!next ? "Ôn công thức" : completed.size ? "Tiếp tục học" : "Bắt đầu chương 1"} <span aria-hidden="true">→</span></a>
      <a class="button secondary" href="#mo-phong/lay-mau">Mở mô phỏng</a></div></div>
      ${signalIllustration()}
    </section>
    <div class="facts"><div class="fact"><strong>${core.length}</strong><span>chương giáo trình</span></div>
      <div class="fact"><strong>${formulas.length}</strong><span>mục công thức</span></div>
      <div class="fact"><strong>${window.DSP_LABS.catalog.length}</strong><span>mô phỏng tương tác</span></div>
    </div>
    <section aria-labelledby="roadmap"><div class="section-title"><div><div class="eyebrow">Lộ trình học</div><h2 id="roadmap">Từ nền tảng đến ứng dụng</h2></div><a class="text-link" href="#theo-slide">Theo slide môn học <span aria-hidden="true">↗</span></a></div>
      <div class="track-grid">${groups}</div>
    </section>
    <div class="resource-row"><p>Sinh số ngẫu nhiên, bảng hệ số FIR và tài liệu tham khảo.</p><a class="text-link" href="#tai-lieu">Xem tài liệu <span aria-hidden="true">↗</span></a></div>`;
  }

  function pageHead(kicker, title, description) {
    return `<div class="page-head"><div class="eyebrow">${escape(kicker)}</div><h1>${escape(title)}</h1><p>${escape(description)}</p></div>`;
  }

  function chapterView(chapter) {
    const topics = chapter.topics.map((topic, index) => `<article id="muc-${index}" class="topic">
      <h3>${escape(topic.title)}</h3>${keywordLine(keywordsFor(chapter, index))}<p>${escape(topic.body)}</p>
      ${topic.formula ? `<code class="formula">${escape(topic.formula)}</code>` : ""}
      ${topic.note ? `<p class="note">${escape(topic.note)}</p>` : ""}
    </article>`).join("");
    const quickLinks = chapter.topics.map((topic, index) => `<a href="${href(chapter, index)}">${escape(topic.title)}</a>`).join("");
    const quizzes = chapter.quiz.map((question, index) => `<article class="quiz" data-quiz="${index}">
      <h3>${index + 1}. ${escape(question.q)}</h3>
      <div class="quiz-options" role="group" aria-label="Đáp án câu ${index + 1}">${question.options.map((option, optionIndex) =>
        `<button type="button" class="quiz-option" data-answer="${optionIndex}" aria-pressed="false">${escape(option)}</button>`).join("")}</div>
      <p class="quiz-feedback" aria-live="polite" hidden></p>
    </article>`).join("");
    const previous = chapters.find(item => item.id === chapter.id - 1);
    const next = chapters.find(item => item.id === chapter.id + 1);
    const deckLinks = slideDecks.filter(deck => deck.chapterId === chapter.id).map(deck =>
      `<a class="text-link" href="#theo-slide/bo-${deck.number}">Slide ${deck.number} · ${escape(deck.title)}</a>`
    ).join("");
    const topicLinks = [1, 2, 6, 7, 8].includes(chapter.id) ? {
      1: ["lay-mau", "Thử mô phỏng lấy mẫu"],
      2: ["tich-chap", "Thử mô phỏng tích chập"],
      6: ["lay-mau", "Thử mô phỏng lấy mẫu"],
      7: ["dft", "Thử mô phỏng phổ DFT"],
      8: ["dft", "Quan sát kết quả DFT"]
    }[chapter.id] : null;
    return `<div class="page-head">
      <div class="eyebrow">${chapter.id <= 13 ? "Chương " + pad(chapter.id) : "Phụ lục"} · ${escape(chapter.group)}</div>
      <h1>${escape(chapter.title)}</h1><p>${escape(chapter.intro)}</p>
      <div class="chapter-meta"><span>${escape(chapter.en)}</span><span>Giáo trình, trang ${escape(chapter.pages)}</span>${deckLinks}</div>
      ${topicLinks ? `<div class="actions"><a class="button secondary" href="#mo-phong/${topicLinks[0]}">${topicLinks[1]} <span aria-hidden="true">↗</span></a></div>` : ""}
    </div>
    <div class="chapter-layout"><div>
      <section class="lesson-section"><h2>Kiến thức và công thức</h2>${topics}</section>
      <section class="lesson-section" id="vi-du"><h2>Ví dụ giải từng bước</h2><div class="example"><h3>${escape(chapter.example.title)}</h3>
        <ol>${chapter.example.steps.map(step => `<li>${escape(step)}</li>`).join("")}</ol></div></section>
      <section class="lesson-section pitfalls" id="loi"><h2>Chỗ dễ nhầm</h2><ul>${chapter.pitfalls.map(pitfall => `<li>${escape(pitfall)}</li>`).join("")}</ul></section>
      <section class="lesson-section" id="kiem-tra"><h2>Tự kiểm tra</h2>${quizzes}</section>
      <div class="chapter-actions">
        <a class="button secondary" href="${previous ? href(previous) : "#tong-quan"}"><span aria-hidden="true">←</span> ${previous ? "Mục trước" : "Tổng quan"}</a>
        ${chapter.id <= 13 ? `<button type="button" id="mark-complete" class="button secondary" aria-pressed="${completed.has(chapter.id)}">${completed.has(chapter.id) ? "✓ Đã học" : "Đánh dấu đã học"}</button>` : ""}
        <a class="button primary" href="${next ? href(next) : "#tai-lieu"}">${next ? "Mục tiếp theo" : "Tài liệu"} <span aria-hidden="true">→</span></a>
      </div>
    </div><aside class="lesson-index" aria-label="Trong chương"><p class="eyebrow">Trong chương</p>
      ${quickLinks}<a href="#chuong-${chapter.id}/vi-du">Ví dụ giải từng bước</a><a href="#chuong-${chapter.id}/kiem-tra">Tự kiểm tra</a>
    </aside></div>`;
  }

  function attachChapter(chapter) {
    main.querySelectorAll(".quiz-option").forEach(button => button.addEventListener("click", () => {
      const item = button.closest(".quiz");
      const question = chapter.quiz[Number(item.dataset.quiz)];
      const correct = Number(button.dataset.answer) === question.answer;
      item.querySelectorAll(".quiz-option").forEach(option => {
        option.setAttribute("aria-pressed", String(option === button));
        delete option.dataset.state;
      });
      button.dataset.state = correct ? "correct" : "wrong";
      const feedback = item.querySelector(".quiz-feedback");
      feedback.dataset.state = button.dataset.state;
      feedback.textContent = (correct ? "Đúng. " : "Chưa đúng. ") + question.why;
      feedback.hidden = false;
    }));
    find("#mark-complete")?.addEventListener("click", event => {
      if (completed.has(chapter.id)) completed.delete(chapter.id);
      else completed.add(chapter.id);
      try { localStorage.setItem("dsp501-completed-v1", JSON.stringify([...completed])); } catch {}
      const done = completed.has(chapter.id);
      event.currentTarget.textContent = done ? "✓ Đã học" : "Đánh dấu đã học";
      event.currentTarget.setAttribute("aria-pressed", String(done));
      renderNavigation();
    });
  }

  function formulaBank() {
    const options = chapters.map(chapter => `<option value="${chapter.id}">${pad(chapter.id)} · ${escape(chapter.title)}</option>`).join("");
    return pageHead("Tra nhanh", "Sổ công thức", "Lọc theo chương hoặc tìm bằng tiếng Việt hay tiếng Anh. Mỗi công thức dẫn về phần giải thích và điều kiện áp dụng.") +
      `<div class="filter-bar"><label>Từ khóa<input type="search" id="formula-query" placeholder="VD: tích chập, convolution, LPC…"></label>
      <label>Chương<select id="formula-chapter"><option value="">Tất cả</option>${options}</select></label></div>
      <p class="eyebrow" id="formula-count" aria-live="polite"></p><div class="formula-grid" id="formula-results"></div>`;
  }

  function attachFormulaBank() {
    const field = find("#formula-query");
    const chapterField = find("#formula-chapter");
    const renderCards = () => {
      const tokens = normalize(field.value).trim().split(/\s+/).filter(Boolean);
      const found = formulas.filter(({ chapter, topic, keywords }) => {
        const content = normalize([chapter.title, chapter.en, topic.title, keywords, topic.body, topic.formula, topic.note].join(" "));
        return (!chapterField.value || chapter.id === Number(chapterField.value)) && tokens.every(token => content.includes(token));
      });
      find("#formula-count").textContent = `${found.length} mục công thức`;
      find("#formula-results").innerHTML = found.length ? found.map(({ chapter, topic, index, keywords }) => `<article class="formula-card">
        <div class="eyebrow">${pad(chapter.id)} · ${escape(chapter.title)}</div><h2>${escape(topic.title)}</h2>
        ${keywordLine(keywords)}<code class="formula">${escape(topic.formula)}</code><a class="text-link" href="${href(chapter, index)}">Mở phần giải thích <span aria-hidden="true">↗</span></a></article>`).join("") :
        '<p>Không có công thức khớp. Thử từ khóa ngắn hơn hoặc chọn tất cả chương.</p>';
    };
    field.addEventListener("input", renderCards);
    chapterField.addEventListener("change", renderCards);
    renderCards();
  }

  function labView(currentLab) {
    return pageHead("Thực hành", "Phòng mô phỏng", "Thay đổi tham số và quan sát kết quả. Ba thí nghiệm nối công thức với cách tín hiệu thực sự thay đổi.") +
      `<nav class="tabs" aria-label="Thí nghiệm">${window.DSP_LABS.catalog.map(lab =>
        `<a class="tab" href="#mo-phong/${lab.id}"${lab.id === currentLab.id ? ' aria-current="page"' : ""}>${lab.name}</a>`).join("")}</nav><section id="lab-panel" class="lab-panel"></section>`;
  }

  function sources() {
    return pageHead("Nguồn và phạm vi", "Tài liệu và quy ước", "Sổ tay tóm lược kiến thức theo đúng thứ tự của bản giáo trình trong thư mục DSP501. Số trang ghi trong mỗi chương là số trang in trên sách.") + `
      <section class="source-panel"><h2>Giáo trình chính</h2>
      <p><cite>Digital Signal Processing: Principles, Algorithms, and Applications</cite> · John G. Proakis và Dimitris G. Manolakis, ấn bản 4.</p>
      <p>Tra chương 1–13 theo mục lục. Phụ lục sinh số ngẫu nhiên bắt đầu ở trang 981 và bảng hệ số FIR ở trang 987. Danh mục tài liệu tham khảo của sách bắt đầu ở trang 993; chỉ mục thuật ngữ bắt đầu ở trang 1007.</p>
      <p>Nội dung trên web là phần diễn giải, công thức và ví dụ tự soạn. Dùng sách gốc để tra chứng minh dài, bảng hệ số và bộ bài tập đầy đủ.</p></section>
      <section class="source-panel"><h2>Phụ lục</h2><ul>${chapters.filter(chapter => chapter.id > 13).map(chapter => `<li><a class="text-link" href="${href(chapter)}">${escape(chapter.title)}</a> · trang ${escape(chapter.pages)}</li>`).join("")}</ul></section>
      <section class="source-panel"><h2>Quy ước đọc công thức</h2><ul>
      <li>x(t) dùng thời gian liên tục; x[n] hoặc x(n) dùng chỉ số mẫu nguyên.</li>
      <li>F dùng Hz, f dùng vòng/mẫu, Ω dùng radian/giây và ω dùng radian/mẫu.</li>
      <li>j² = −1. Dấu * có thể chỉ liên hợp hoặc tích chập tùy biểu thức; công thức trong mỗi chương ghi rõ ngữ cảnh.</li>
      <li>Tùy sách hoặc thư viện, hệ số 1/N của DFT và chuẩn hóa sinc có thể đặt khác nhau. Mỗi phần giữ một cặp định nghĩa nhất quán.</li></ul></section>`;
  }

  function slidesView() {
    const links = slideDecks.map(deck => `<a class="tab" href="#theo-slide/bo-${deck.number}">Slide ${deck.number}</a>`).join("");
    const decks = slideDecks.map(deck => {
      const chapter = chapters.find(item => item.id === deck.chapterId);
      const topics = deck.topics.map(([pages, topic, index]) => `<li>
        <span class="slide-pages">Trang ${escape(pages)}</span>
        <a class="text-link" href="${href(chapter, index)}">${escape(topic)} <span aria-hidden="true">↗</span></a>
      </li>`).join("");
      return `<section class="source-panel slide-deck" id="bo-${deck.number}">
        <div class="eyebrow">Slide ${deck.number} · Chương ${chapter.id} của sách</div>
        <h2>${escape(deck.title)}</h2>
        <p class="slide-filename">${escape(deck.file)}</p>
        <ul class="slide-topics">${topics}</ul>
        <details class="slide-figures" data-deck="${deck.number}" data-source="${escape(deck.file)}">
          <summary>Hình, đồ thị và sơ đồ trong slide</summary>
          <div class="slide-figure-content"></div>
        </details>
      </section>`;
    }).join("");
    return pageHead("DSP501 · Bài giảng", "Theo slide môn học",
      "Chọn số ở đầu tên tệp trong thư mục DGT501. Số trang tính từ bìa PDF. Bấm vào chủ đề để đọc bài tương ứng, hoặc mở bộ hình dưới từng slide để xem đồ thị gốc.") +
      `<nav class="tabs" aria-label="Chọn bộ slide">${links}</nav>${decks}`;
  }

  const searchIndex = chapters.flatMap(chapter => [
    { title: chapter.title, sub: `Chương ${pad(chapter.id)}`, keywords: chapter.en, target: href(chapter), body: chapter.intro },
    ...chapter.topics.map((topic, index) => ({
      title: topic.title, sub: `Mục ${pad(chapter.id)} · ${chapter.title}`, target: href(chapter, index),
      keywords: keywordsFor(chapter, index),
      body: [topic.body, topic.formula, topic.note].join(" ")
    }))
  ]).concat(window.DSP_LABS.catalog.map(lab => ({ title: lab.name, sub: "Phòng mô phỏng", body: lab.keywords, target: "#mo-phong/" + lab.id })),
    slideDecks.map(deck => ({
      title: `Slide ${deck.number} · ${deck.title}`, sub: "Theo slide môn học",
      keywords: deck.file.replace(/^\d+_/, "").replace(/\.pdf$/i, "").replace(/_/g, " "),
      body: deck.file, target: "#theo-slide/bo-" + deck.number
    })))
    .map(item => ({
      ...item, titleKey: normalize(item.title),
      keywordKeys: (item.keywords ?? "").split(",").map(normalize),
      terms: normalize([item.title, item.sub, item.keywords, item.body].join(" "))
    }));

  function renderSearch() {
    const query = normalize(searchInput.value).trim();
    if (!query) {
      searchResults.innerHTML = "<p>Tìm bằng tiếng Việt hoặc tiếng Anh. Ví dụ <strong>mẫu trên chu kỳ</strong>, <strong>aliasing</strong>, <strong>region of convergence</strong>.</p>";
      return;
    }
    const tokens = query.split(/\s+/).filter(Boolean);
    const ranked = searchIndex.filter(item => tokens.every(token => item.terms.includes(token)))
      .sort((a, b) => score(b) - score(a)).slice(0, 12);
    function score(item) {
      const exactKeyword = item.keywordKeys.includes(query);
      const partialKeyword = item.keywordKeys.some(keyword => keyword.includes(query));
      return (item.titleKey === query ? 40 : item.titleKey.includes(query) ? 24 : 0)
        + (exactKeyword ? 26 : partialKeyword ? 12 : 0)
        + tokens.filter(token => item.titleKey.includes(token)).length;
    }
    searchResults.innerHTML = ranked.length ? ranked.map(item => `<a class="search-result" href="${item.target}"><strong>${escape(item.title)}</strong><small>${escape(item.sub)}</small>${keywordLine(item.keywords)}</a>`).join("") :
      "<p>Chưa có kết quả. Thử một từ khóa ngắn hơn như DFT hoặc bộ lọc.</p>";
  }

  function openSearch() {
    if (dialog.open) return;
    searchInput.value = "";
    renderSearch();
    dialog.showModal();
    searchInput.focus();
  }

  function render() {
    disposeLab();
    disposeLab = () => {};
    const [requested, sub] = location.hash.slice(1).split("/");
    const match = requested?.match(/^chuong-(\d+)$/);
    const chapter = match ? chapters.find(item => item.id === Number(match[1])) : null;
    const previousRoute = route;
    route = chapter ? "chuong-" + chapter.id : Object.hasOwn(titles, requested) ? requested : "tong-quan";
    if (chapter) {
      if (previousRoute !== route) {
        main.innerHTML = chapterView(chapter);
        attachChapter(chapter);
      }
    } else if (route === "cong-thuc") {
      main.innerHTML = formulaBank();
      attachFormulaBank();
    } else if (route === "theo-slide") {
      if (previousRoute !== route) {
        main.innerHTML = slidesView();
        window.DSP_FIGURE_GALLERY?.mount(main);
      }
    } else if (route === "mo-phong") {
      const current = window.DSP_LABS.catalog.find(lab => lab.id === sub) || window.DSP_LABS.catalog[0];
      main.innerHTML = labView(current);
      disposeLab = window.DSP_LABS.mount(current.id, find("#lab-panel"));
    } else {
      main.innerHTML = route === "tai-lieu" ? sources() : home();
    }
    const label = chapter ? `${chapter.id <= 13 ? "Chương " + pad(chapter.id) : "Phụ lục"}` : titles[route];
    find("#breadcrumb").innerHTML = `DSP501 <span>/</span> ${escape(label)}`;
    document.title = `${chapter ? chapter.title : titles[route]} · Sổ tay DSP`;
    renderNavigation();
    setMenu(false);
    const chapterAnchor = chapter && /^(muc-\d+|vi-du|kiem-tra)$/.test(sub ?? "");
    const slideAnchor = route === "theo-slide" && /^bo-\d+$/.test(sub ?? "");
    if (chapterAnchor || slideAnchor) {
      const target = document.getElementById(sub);
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.scrollIntoView();
      }
    } else if (requested !== "main") {
      window.scrollTo(0, 0);
      if (previousRoute) main.focus({ preventScroll: true });
    }
  }

  menu.addEventListener("click", () => setMenu(!sidebar.classList.contains("is-open")));
  overlay.addEventListener("click", () => { setMenu(false); menu.focus(); });
  navigation.addEventListener("click", event => { if (event.target.closest("a")) setMenu(false); });
  find("#search-open").addEventListener("click", openSearch);
  searchInput.addEventListener("input", renderSearch);
  find(".search-form").addEventListener("submit", event => {
    if (event.submitter) return;
    event.preventDefault();
    searchResults.querySelector("a")?.click();
  });
  searchInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    searchResults.querySelector("a")?.click();
  });
  searchResults.addEventListener("click", event => {
    const anchor = event.target.closest("a");
    if (!anchor) return;
    dialog.close();
    if (location.hash === anchor.hash) render();
  });
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
      setMenu(false);
      menu.focus();
    }
    if (event.key === "/" && !dialog.open && !find("#figure-viewer")?.open && !event.altKey && !event.ctrlKey && !event.metaKey &&
        !event.target.closest("input, textarea, select, [contenteditable]")) {
      event.preventDefault();
      openSearch();
    }
  });
  find(".skip-link").addEventListener("click", event => {
    event.preventDefault();
    main.focus();
  });
  window.addEventListener("hashchange", render);
  render();
})();
