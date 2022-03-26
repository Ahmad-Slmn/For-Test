const title = document.querySelector(".hero h2");
const ul = document.querySelector(".hero ul");
const button = document.querySelector(".hero button")

button.onclick = function () {

    window.location.reload()
}

window.onload = function () {
    if (this.navigator.onLine) {

        online()

    } else {

        offline()
    }
}

window.addEventListener("online", function () {

    online()
})

window.addEventListener("offline", function () {

    offline()
})

function online() {
    title.textContent = "you are online now oh employee";
    title.style.color = "#080";
    ul.classList.add("hide");
    button.classList.add("hide")
}

function offline() {
    title.textContent = "you are offline now oh employee";
    title.style.color = "#666";
    ul.classList.remove("hide");
    button.classList.remove("hide")
}
