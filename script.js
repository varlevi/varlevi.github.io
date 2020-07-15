const blobsNodeList = document.querySelectorAll('.blob');
const blobsArray = Array.from(blobsNodeList);
const contentNodeList = document.querySelectorAll('.content');
const contentArray = Array.from(contentNodeList);

blobsArray.forEach(function(blob, index) {
    blob.addEventListener('click', () => {
        contentArray.forEach(function(content, index) {
            if (content.classList.contains("hidden") === false) {
                content.classList.add("hidden");
            }
        })
        contentArray[index].classList.toggle("hidden");
    })
})