(() => {
  "use strict";

  const packs = window.DSP_SLIDE_FIGURES = Object.create(null);
  const loading = new Map();
  const viewer = document.querySelector("#figure-viewer");
  const imageArea = viewer.querySelector("#figure-image-area");
  const largeImage = viewer.querySelector("#figure-large");
  const title = viewer.querySelector("#figure-title");
  const source = viewer.querySelector("#figure-source");
  const position = viewer.querySelector("#figure-position");
  const previous = viewer.querySelector("#figure-previous");
  const next = viewer.querySelector("#figure-next");
  const zoom = viewer.querySelector("#figure-zoom");
  let current = null;

  function loadDeck(number) {
    if (packs[number]) return Promise.resolve(packs[number]);
    if (loading.has(number)) return loading.get(number);
    const request = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `slide-figures/${number}.js`;
      script.addEventListener("load", () => {
        script.remove();
        if (Array.isArray(packs[number])) resolve(packs[number]);
        else reject(new Error("Missing slide figures"));
      }, { once: true });
      script.addEventListener("error", () => {
        script.remove();
        reject(new Error("Could not load slide figures"));
      }, { once: true });
      document.head.append(script);
    }).finally(() => loading.delete(number));
    loading.set(number, request);
    return request;
  }

  function showFigure(index) {
    if (!current || index < 0 || index >= current.figures.length) return;
    current.index = index;
    const figure = current.figures[index];
    title.textContent = figure.title;
    source.textContent = `${current.file} · Trang ${figure.page}`;
    position.textContent = `${index + 1} / ${current.figures.length}`;
    largeImage.alt = figure.title;
    largeImage.src = figure.src;
    largeImage.style.setProperty("--figure-width", `${figure.width}px`);
    setZoom(false);
    previous.disabled = index === 0;
    next.disabled = index === current.figures.length - 1;
  }

  function setZoom(enabled) {
    imageArea.classList.toggle("zoomed", enabled);
    imageArea.scrollTo(0, 0);
    zoom.setAttribute("aria-pressed", String(enabled));
    zoom.textContent = enabled ? "Vừa khung" : "Phóng to";
  }

  function openFigure(figures, file, index) {
    current = { figures, file, index };
    showFigure(index);
    viewer.showModal();
  }

  previous.addEventListener("click", () => showFigure(current.index - 1));
  next.addEventListener("click", () => showFigure(current.index + 1));
  zoom.addEventListener("click", () => setZoom(!imageArea.classList.contains("zoomed")));
  viewer.addEventListener("keydown", event => {
    if (imageArea.classList.contains("zoomed") && event.target === imageArea) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    showFigure(current.index + (event.key === "ArrowLeft" ? -1 : 1));
  });
  viewer.addEventListener("close", () => {
    largeImage.removeAttribute("src");
    current = null;
  });

  function figureCard(figure, open) {
    const button = document.createElement("button");
    button.className = "slide-figure-card";
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    const thumb = document.createElement("img");
    thumb.src = figure.src;
    thumb.alt = "";
    thumb.width = figure.width;
    thumb.height = figure.height;
    thumb.loading = "lazy";
    thumb.decoding = "async";
    const label = document.createElement("strong");
    label.textContent = figure.title;
    const page = document.createElement("span");
    page.textContent = `Trang ${figure.page} · Phóng to`;
    button.append(thumb, label, page);
    button.addEventListener("click", open);
    return button;
  }

  function mount(root) {
    root.querySelectorAll(".slide-figures").forEach(details => {
      const content = details.querySelector(".slide-figure-content");
      const summary = details.querySelector("summary");
      const number = Number(details.dataset.deck);
      let ready = false;
      let busy = false;
      const populate = async () => {
        if (!details.open || ready || busy) return;
        busy = true;
        content.textContent = "Đang tải hình…";
        try {
          const figures = await loadDeck(number);
          const grid = document.createElement("div");
          grid.className = "slide-figure-grid";
          figures.forEach((figure, index) => grid.append(figureCard(figure, () =>
            openFigure(figures, details.dataset.source, index))));
          content.replaceChildren(grid);
          summary.textContent = `Hình, đồ thị và sơ đồ trong slide (${figures.length})`;
          ready = true;
        } catch {
          const retry = document.createElement("button");
          retry.className = "button secondary";
          retry.type = "button";
          retry.textContent = "Tải lại hình";
          retry.addEventListener("click", populate, { once: true });
          content.replaceChildren("Chưa tải được hình. ", retry);
        } finally {
          busy = false;
        }
      };
      details.addEventListener("toggle", populate);
    });
  }

  window.DSP_FIGURE_GALLERY = { mount };
})();
