// const shadeswash = document.querySelector('#shade-swash-blob');
// const vscode = document.querySelector('#vs-code-blob');
// const colorbynumber = document.querySelector('#color-by-number-blob');
// const physicscalc = document.querySelector('#physics-calc-blob');
const contentcontainer = document.querySelector('#content');
let contentOpen = false;

function newContent(title, iconSrc, description) {
    if (contentOpen = false) {
        document.querySelectorAll('.content')[0].remove();
    } else {
        contentOpen = true;
    }
    let content = contentcontainer;
    let icon = `<img src="${iconSrc}">`;
    content.innerHTML += icon;
    content.innerHTML += `<h2>${title}</h2>`;
    content.innerHTML += `<p>${description}</p>`;
    content.classList += "content";
  }

let blobsNodeList = document.querySelectorAll('.blob');
let blobsArray = Array.from(blobsNodeList);

blobsArray.forEach(function(blob, index) {
    blob.addEventListener('click', () => {
        let contentTitle = blob.getAttribute('data-title');
        let contentIconSrc = blob.getAttribute('data-icon-src');
        let contentDescription = blob.getAttribute('data-description');
        newContent(blob.getAttribute('data-title'), blob.getAttribute('data-icon-src'), blob.getAttribute('data-description'))
    })
})