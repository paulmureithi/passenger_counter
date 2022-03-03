let count = 0

// listen for button clicks and increment count on click
function increment() {
    count += 1
    // console.log(count)
    document.getElementById("counter").innerText = count
}

function save() {
    let counter = count + " - "
    document.getElementById("save-el").textContent += counter
    count = 0
    document.getElementById("counter").innerText = count
}

