export const setBgVariables = (query) => {
  const element = document.querySelector(query);
  element.style.setProperty(
    "--background-mobile",
    element.dataset.bgMobile
  );
  element.style.setProperty(
    "--background-desktop",
    element.dataset.bgDesktop
  );
};