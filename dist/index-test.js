"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
    const SELECTOR = ".max-width-medium";
    const div = document.querySelector(SELECTOR);
    if (!div)
      return;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const idValue = urlSearchParams.get("id");
    if (!idValue)
      return;
    const allcode = await getComposById(idValue);
    for (let index = 0; index < allcode.length; index++) {
      const code = allcode[index];
      const button = document.createElement("button");
      button.innerText = code.name;
      button.classList.add("create-acc-button");
      button.addEventListener("click", () => {
        button.innerText = "Copied!";
        copyToClipboard(code.code);
      });
      div.prepend(button);
    }
  });
  var copyToClipboard = (payload) => {
    try {
      document.addEventListener("copy", (e) => {
        e.clipboardData?.setData("application/json", payload);
        e.preventDefault();
      });
      document.execCommand("copy");
    } catch (e) {
    } finally {
      document.removeEventListener("copy", (e) => {
        e.clipboardData?.setData("application/json", payload);
        e.preventDefault();
      });
    }
  };
  var getComposById = async (compo_id) => {
    const data = await fetchData(compo_id);
    return data.map(({ name, code }) => {
      return { name, code };
    });
  };
  async function fetchData(id) {
    const options = {
      method: "GET",
      Headers: { "Content-Type": "application/json" }
    };
    const endpoint = `https://xegd-filk-1pjm.n7c.xano.io/api:gdLlipP9/private_component/${id}`;
    const resp = await fetch(endpoint, options);
    return await resp.json();
  }
})();
//# sourceMappingURL=index.js.map
