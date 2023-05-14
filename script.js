let result = document.createElement("img");
result.classList.add("result");
let uwPts = 0;
let wPts = 0;
let numClass = 0;

const grade = [
    {id: "#addA", uw: 4, w: 4, tid: "#As"}, {id: "#addB", uw: 3, w: 3, tid: "#Bs"}, {id: "#addC", uw: 2, w: 2, tid: "#Cs"}, {id: "#addD", uw: 1, w: 1, tid: "#Ds"}, {id: "#addE", uw: 0, w: 0, tid: "#Es"},
    {id: "#addAh", uw: 4, w: 5, tid: "#Ash"}, {id: "#addBh", uw: 3, w: 4, tid: "#Bsh"}, {id: "#addCh", uw: 2, w: 3, tid: "#Csh"}, {id: "#addDh", uw: 1, w: 1, tid: "#Dsh"}, {id: "#addEh", uw: 0, w: 0, tid: "#Esh"}
];


for(let x of grade) {
    console.log("hello");
    document.querySelector(x.id).addEventListener("click", () => {
        uwPts = uwPts+x.uw;
        wPts = wPts+x.w;
        numClass = numClass + 1;
        let uwGPA = uwPts/numClass;
        let wGPA = wPts/numClass;
        // document.querySelector("#UW").innerText = uwGPA;
        // document.querySelector("#W").innerText = wGPA;
        function fade(ele, text) {
            ele.classList.add("fadeout");
            setTimeout(() => {
                ele.innerText = text;
                ele.classList.remove("fadeout");  // fade back in
            }, 500);
        }
        let num = document.querySelector(x.tid);
        fade(num, Number(num.innerText) + 1);
        fade(document.querySelector("#UW"), uwGPA.toFixed(4));
        fade(document.querySelector("#W"), wGPA.toFixed(4));
    });
}

document.querySelector("#UW").addEventListener("click", () => {
    document.querySelector("#UW").classList.remove("blur");
    let uwGPA = uwPts/numClass;
    if (uwGPA >= 3.5)
        result.src = "happy.png";
    else if (uwGPA >= 2.5)
        result.src = "meh.png";
    else
        result.src = "sad.png";
    document.body.append(result);
})

document.querySelector("#W").addEventListener("click", () => {
    document.querySelector("#W").classList.remove("blur");
    let wGPA = wPts/numClass;
    if (wGPA >= 4)
        result.src = "happy.png";
    else if (wGPA >= 3)
        result.src = "meh.png";
    else
        result.src = "sad.png";
    document.body.append(result);
})
