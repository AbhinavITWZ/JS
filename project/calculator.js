let display = document.querySelector(".display");
let button = document.querySelectorAll("button");
display.innerText = "";
let lastop = false;

button.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.className !== "clear" && e.className !== "equal" && e.className !== "remove") {
            if (lastop) {
                display.innerText = "";
                lastop = false;
            }
            display.innerText += e.innerText;
        } 
        else if (e.className === "equal") {
            try {
                display.innerText = Number(eval(display.innerText)).toFixed(2);
                lastop = true;
            } catch {
                display.innerText = "Error";
            }
        } 
        else if (e.className === "remove") {
            display.innerText = display.innerText.slice(0, -1);
        } 
        else {
            display.innerText = "";
        }
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (/[\d+\-*/.%]/.test(key)) {
        if (lastop) {
            display.innerText = "";
            lastop = false;
        }
        display.innerText += key;
    } 
    else if (key === "Enter") {
        try {
            display.innerText = Number(eval(display.innerText)).toFixed(2);
            lastop = true;
        } catch {
            display.innerText = "Error";
        }
    } 
    else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1);
    } 
    else if (key === "Escape") {
        display.innerText = "";
    }
});
