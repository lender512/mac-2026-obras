(() => {
  "use strict";

  const artLink = document.querySelector("[data-artwork]");
  const dialog = document.querySelector(".art-dialog");
  if (artLink && dialog && typeof dialog.showModal === "function") {
    artLink.addEventListener("click", (event) => {
      // Preserve opening the image in a new tab with the browser's shortcuts.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.showModal();
    });
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => artLink.focus({ preventScroll: true }));
  }

  const experiment = document.querySelector("[data-experiment]");
  if (experiment) {
    const slider = experiment.querySelector("input");
    const exponent = experiment.querySelector("[data-exponent]");
    const result = experiment.querySelector("[data-result]");
    const note = experiment.querySelector("[data-result-note]");
    const update = () => {
      const n = Number(slider.value);
      const a = 3 ** n, b = 4 ** n, c = 5 ** n;
      exponent.textContent = `n = ${n}`;
      result.textContent = `${a.toLocaleString("es-PE")} + ${b.toLocaleString("es-PE")} ${a + b === c ? "=" : "≠"} ${c.toLocaleString("es-PE")}`;
      note.textContent = a + b === c
        ? "Con n = 2, la terna (3, 4, 5) satisface la igualdad: 9 + 16 = 25."
        : `Con n = ${n}, esta misma terna deja de funcionar: la suma es ${(a + b).toLocaleString("es-PE")}.`;
    };
    slider.addEventListener("input", update);
    update();
  }
})();
