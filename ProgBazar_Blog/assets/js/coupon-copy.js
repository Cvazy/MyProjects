const span = document.getElementById("copy");

span.onclick = function() {
    document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        alert(`Скопирован купон: ${event.clipboardData.getData("text")}`)
    }
});