const shadeswash = document.querySelector('#shade-swash-blob');
const vscode = document.querySelector('#vs-code-blob');
const colorbynumber = document.querySelector('#color-by-number-blob');
const physicscalc = document.querySelector('#physics-calc-blob');
const contentcontainer = document.querySelector('#content');
let contentState = false;

const newContent = (title, iconSrc, description) => {
    if (contentState == true) {
      let content = contentcontainer;
      let image = `<img src="${iconSrc}">`;
      content.innerHTML += image;
      content.innerHTML += `<h2>${title}</h2>`;
      content.innerHTML += description;
      content.classList += "content";
      //contentcontainer.appendChild(content);
    } else {
      document.getElementsByClassName('content')[0].remove();
    }
  }

shadeswash.addEventListener('click', () => {
    contentState = !contentState;
    newContent('About', "icons/shadeswash.svg", `<h4>Project Info</h4><p>ShadeSwash was created in 2019 and is maintained by varlevi. It was created in order to provide developers and designers with a simple, well-designed tool for finding color shades.</p>`);
})

vscode.addEventListener('click', () => {
    contentState = !contentState;
    newContent('About', "shade-swash.png", `<h4>Project Info</h4><p>ShadeSwash was created in 2019 and is maintained by varlevi. It was created in order to provide developers and designers with a simple, well-designed tool for finding color shades.</p>`);
})