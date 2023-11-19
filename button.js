const buttons = document.getElementsByClassName("button-active");
for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        const buttonBum = event.target;
        buttonBum.style.backgroundColor = "red";
        buttonBum.style.color = "white";
    })
}