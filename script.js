// const shadeswash = document.querySelector('#shade-swash-blob');
// const vscode = document.querySelector('#vs-code-blob');
// const colorbynumber = document.querySelector('#color-by-number-blob');
// const physicscalc = document.querySelector('#physics-calc-blob');
const contentcontainer = document.querySelector('#content');
let contentOpen = false;

function newProjectContent(title, imageSrc, description, website, github) {
        contentcontainer.innerHTML = "";
        let content = contentcontainer;
        let image = `<img src="${imageSrc}">`;
        content.innerHTML += image;
        content.innerHTML += `<h2>${title}</h2>`;
        content.innerHTML += `<p>${description}</p>`;
        content.innerHTML += `<p>Website: <a href="${website}">${website}</a></p>`;
        content.innerHTML += `<p>GitHub: <a href="${github}">${github}</a></p>`;
        content.classList += "content";
}

function newAboutContent(title, imageSrc, description, website, github) {
    contentcontainer.innerHTML = "";
    let content = contentcontainer;
    let image = `<img src="${imageSrc}">`;
    content.innerHTML += image;
    content.innerHTML += `<h2>${title}</h2>`;
    content.innerHTML += `<p>${description}</p>`;
    content.innerHTML += `<p>Website: <a href="${website}">${website}</a></p>`;
    content.innerHTML += `<p>GitHub: <a href="${github}">${github}</a></p>`;
    content.classList += "content";
}

let blobsNodeList = document.querySelectorAll('.blob');
let blobsArray = Array.from(blobsNodeList);

blobsArray.forEach(function(blob, index) {
    if (blob.classList.contains(project))
    blob.addEventListener('click', () => {
        let contentTitle = blob.getAttribute('data-title');
        let contentImageSrc = blob.getAttribute('data-image-src');
        let contentDescription = blob.getAttribute('data-description');
        let contentWebsite = blob.getAttribute('data-website');
        let contentGithub = blob.getAttribute('data-github');
        newProjectContent(contentTitle, contentImageSrc, contentDescription, contentWebsite, contentGithub)
    })
})