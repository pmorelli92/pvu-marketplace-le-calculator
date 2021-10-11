function parseElement(divElement) {
    let leSplit = divElement.innerText.split(' ')[1].split('/')
    return {
        le: leSplit[0],
        hours: leSplit[1],
    }
}

function addElement(divElement, elementClass, elementText) {
    let parent = divElement.parentElement

    if (parent.getElementsByClassName(elementClass).length == 0) {
        let clone = divElement.cloneNode()
        clone.className = elementClass
        clone.innerText = elementText
        parent.appendChild(clone)
    } else {
        parent.getElementsByClassName(elementClass)[0].innerText = elementText
    }
}

function calculateDays(divElement) {
    let values = parseElement(divElement)
    let daysText = "Days: " + (values.hours / 24).toFixed(2)
    let daysClass = "le days-calculated"
    addElement(divElement, daysClass, daysText)
}

function calculateLE(divElement) {
    let values = parseElement(divElement)
    let rateText = "LE: " + (values.le / values.hours).toFixed(2) + " Hour"
    let rateClass = "le rate-calculated"
    addElement(divElement, rateClass, rateText)
}

// When extension is clicked fetch all the LE texts
document.querySelectorAll('.tw-text-center[data-v-4b7e9996]').forEach(function (i, obj) {
    calculateLE(i)
    calculateDays(i)

    // As the grid changes without the page reloading, listen to the change event
    i.addEventListener("DOMCharacterDataModified", function (event) {
        calculateLE(event.target.parentElement)
        calculateDays(event.target.parentElement)
    }, false)
});
