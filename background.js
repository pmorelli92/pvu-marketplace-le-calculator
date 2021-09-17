chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

// document.querySelectorAll('.tw-text-center[data-v-4b7e9996]').forEach(function (i, obj) {
//     let leSplit = i.innerText.split(' ')[1].split('/')
//     i.innerText = leSplit[0] / leSplit[1]
// });

// document.getElementsByClassName('tw-text-white tw-mr-3 amount')[0].innerText += "\nIf you like the extension, donate to: "

//     // }, 2000);

//     .change(function () {
//         //Do what you want when div changes
//     });





// const targetNode = document.getElementsByClassName('tw-flex-grow tw-p-6 center')[0]
// const config = { attributes: true, childList: true, subtree: true };
// const callback = function (mutationsList, observer) {
//     document.querySelectorAll('.tw-text-center[data-v-4b7e9996]').forEach(function (i, obj) {
//         let leSplit = i.innerText.split(' ')[1].split('/')
//         i.innerText = leSplit[0] / leSplit[1]
//     });
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);
