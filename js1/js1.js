let container = document.getElementById("container")
container.onclick = function() {
    this.innerText += `${this.innerText}`
}