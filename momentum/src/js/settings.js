const closeBtn = document.querySelectorAll(".close");
const settingsModal = document.querySelector(".settings-modal");
const settingsBtn = document.querySelector(".settings");
const closeAll = document.querySelector(".close-all");

export function openSettings() {
  settingsModal.style = "left: 0";
  settingsBtn.style = "display: none;";
  closeBtn.forEach((item) => {
    item.style.display = "block";
  });
  closeAll.addEventListener("click", closeAllBtns);
}
export const addListeners = () => {
  closeBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.parentNode;
      parent.style = "display: none;";
      settingsBtn.style = "display: block;";
    });
  });
};

function closeAllBtns() {
  closeBtn.forEach((item) => {
    item.style.display = "none";
  });
}
