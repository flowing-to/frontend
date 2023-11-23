import { greetUser } from "$utils/greet";

window.Webflow ||= [];
window.Webflow.push(async () => {
  const SELECTOR = ".max-width-medium";
  const div = document.querySelector(SELECTOR);
  if (!div) return;

  // Get the URLSearchParams object from the current URL
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idValue = urlSearchParams.get("id");
  if (!idValue) return;

  const allcode = await getComposById(idValue);

  for (let index = 0; index < allcode.length; index++) {
    const code = allcode[index];

    const button = document.createElement("button");
    button.innerText = code.name;
    button.classList.add("create-acc-button");
    button.addEventListener("click", () => {
      copyToClipboard(code.code);
    });

    div.prepend(button);
  }
});

const copyToClipboard = (payload: any) => {
  try {
    document.addEventListener("copy", (e) => {
      e.clipboardData?.setData("application/json", JSON.stringify(payload));
      e.preventDefault();
    });
    document.execCommand("copy");
  } catch (e) {
  } finally {
    document.removeEventListener("copy", (e) => {
      e.clipboardData?.setData("application/json", JSON.stringify(payload));
      e.preventDefault();
    });
  }
};

const getComposById = async (compo_id: string) => {
  const endpoint = `https://xegd-filk-1pjm.n7c.xano.io/api:gdLlipP9/shared_asset/${compo_id}`;

  const options = {
    method: "GET",
    Headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();

  const promises = data.map((row: any) => fetchData(row.id));
  const result = await Promise.all(promises);

  return result;
};

async function fetchData(id: string) {
  const options = {
    method: "GET",
    Headers: { "Content-Type": "application/json" },
  };

  const endpoint = `https://xegd-filk-1pjm.n7c.xano.io/api:gdLlipP9/private_component/${id}`;
  const resp = await fetch(endpoint, options);
  const { code, name } = await resp.json();
  return { code, name };
}
