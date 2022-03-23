var nome = document.querySelector('#nome')

var btn = document.querySelector("#btn")

nome.innerText = localStorage.getItem("name")

btn.addEventListener('click', () => {
    if (localStorage.getItem("name") == "Cleber") {

        localStorage.setItem("name", "Fernando");
        nome.innerText = localStorage.getItem("name")
    }else{

        localStorage.setItem("name", "Cleber")
        nome.innerText = localStorage.getItem("name")
    }
})


