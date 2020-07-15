/* VARIABLES */

// Gets a node list of all blobs in html.
const blobsNodeList = document.querySelectorAll('.blob');
// Turns blob node list into array.
const blobsArray = Array.from(blobsNodeList);
// Gets a list of all content divs in html
const contentNodeList = document.querySelectorAll('.content');
// Turns content node list into array.
const contentArray = Array.from(contentNodeList);

/* MAIN */

// Loops through blobs array
blobsArray.forEach(function(blob, index) {
    // Adds listener for clicks on each blob
    blob.addEventListener('click', () => {
        // On click, loops through content array
        contentArray.forEach(function(content, index) {
            // Finds all non-hidden items
            if (content.classList.contains("hidden") === false) {
                // Hides previously non-hidden items
                content.classList.add("hidden");
            }
        })
        // Unhides correct item
        contentArray[index].classList.toggle("hidden");
    })
})