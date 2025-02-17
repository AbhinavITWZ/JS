let tictac = document.querySelector(".tictac");
let box = document.querySelectorAll(".box");
let h2 = document.querySelector("h2");

let state = "X";
let winLine = document.querySelector(".win-line");
let win = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];

let gameover = false;
let move = 0; // Track moves

function winner() {
    win.forEach((el) => {
        let [a, b, c] = el;
        if (box[a].innerText == state && box[b].innerText == state && box[c].innerText == state) {
            h2.innerText = `${state} wins !!`;
            gameover = true;

            // Show the winning line
            let rectA = box[a].getBoundingClientRect();
            let rectC = box[c].getBoundingClientRect();
            let boardRect = document.querySelector(".tictac").getBoundingClientRect();
            
            let x1 = rectA.left + rectA.width / 2 - boardRect.left;
            let y1 = rectA.top + rectA.height / 2 - boardRect.top;
            let x2 = rectC.left + rectC.width / 2 - boardRect.left;
            let y2 = rectC.top + rectC.height / 2 - boardRect.top;
            
            let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
            
            winLine.style.display = "block";
            winLine.style.width = `${distance}px`;
            winLine.style.transform = `translate(${x1}px, ${y1}px) rotate(${angle}deg)`;
        }
    });
}

tictac.addEventListener("click", (e) => {
    if (gameover) return;

    if (e.target.classList.contains("box") && e.target.innerText == "") {
        e.target.innerText = state;
        move++; // Increment move count
        winner();

        if (!gameover && move === 9) {
            h2.innerText = `No one wins, it's a draw!!`;
            gameover = true;
        }

        state = (state == "X") ? "0" : "X";
    }
});
