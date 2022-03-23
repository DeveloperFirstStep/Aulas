var background = document.querySelector("#background");

document.querySelector("#att").addEventListener("click", () => {
    const fColor = document.querySelector("#color1").value;
    const sColor = document.querySelector("#color2").value;
    const angle = document.querySelector("#angle").value;
    const txtColor = document.querySelector("#fontColor").value;

    const values = new Object({
        fColor: fColor,
        sColor: sColor,
        angle: angle,
        txtColor: txtColor
    })

    if (values.angle == "" || values.angle == null || values.angle == undefined) {
        values.angle = "90"
        localStorage.setItem("data", JSON.stringify(values))
    } else {
        localStorage.setItem("data", JSON.stringify(values))
    }

    changeColor();
})

const changeColor = () => {
    background.style.transition = "0s"
    let parse = JSON.parse(localStorage.getItem("data"))
    console.log(background.style);
    if (localStorage.getItem("data") == null) {
        background.style.transition = "5s"
        background.style.backgroundImage = `linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`
    } else {
        background.style.transition = "5s"
        background.style.backgroundImage = `linear-gradient(${parse.angle}deg, ${parse.fColor}, ${parse.sColor})`
    }
}

document.querySelector("#clear").addEventListener("click", () => {
    localStorage.removeItem("data")
    if (localStorage.getItem("data") == null) {
        background.style.backgroundImage = `linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`
    } else {
        localStorage.removeItem("data")
        background.style.backgroundImage = `linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`
    }
    document.querySelector("h3").innerHTML = ""
    document.querySelector("textarea").value = ""
    document.querySelector("#angle").value = ""
})

document.querySelector("#angle").addEventListener("blur", () => {
    let input = document.querySelector("#angle")
    if (input.value > 360) {
        input.value = 360
    } else if (input.value < 0) {
        input.value = 0
    }
})

document.querySelector("#fontColor").addEventListener("blur", () => {
    let color = document.querySelector("#fontColor").value;
    let txt = document.querySelector("h3");
    txt.style.color = color;
})

document.querySelector("textarea").addEventListener("keyup", () => {
    let parse = JSON.parse(localStorage.getItem("data"))
    let txt = document.querySelector("textarea")
    let out = document.querySelector("h3")
    out.innerHTML = txt.value
    if(localStorage.getItem("data") != null){
        out.style.color = parse.txtColor;
    }else{
        out.style.color = document.querySelector("#fontColor").value;
    }
})


changeColor();
