function calculateLE(divElement) {
    let parent = divElement.parentElement
    let leSplit = divElement.innerText.split(' ')[1].split('/')
    let rateClass = "le rate-calculated"
    let rateText = "LE: " + (leSplit[0] / leSplit[1]).toFixed(2) + " Hour"

    if (parent.getElementsByClassName(rateClass).length == 0) {
        let clone = divElement.cloneNode()
        clone.className = rateClass
        clone.innerText = rateText
        parent.appendChild(clone)
    } else {
        parent.getElementsByClassName(rateClass)[0].innerText = rateText
    }
}

// When extension is clicked fetch all the LE texts
document.querySelectorAll('.tw-text-center[data-v-4b7e9996]').forEach(function (i, obj) {
    calculateLE(i)

    // As the grid changes without the page reloading, listen to the change event
    i.addEventListener("DOMCharacterDataModified", function (event) {
        calculateLE(event.target.parentElement)
    }, false)
});
