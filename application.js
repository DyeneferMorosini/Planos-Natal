const planos = [
    {
        id: 0,
        plano: "Básico",
        semana: 9.99,
        mes: 29.99,
    },
    {
        id: 1,
        plano: "Super",
        semana: 14.99,
        mes: 59.99,
    },
    {
        id: 2,
        plano: "Mega",
        semana: 29.99,
        mes: 99.99,
    },
]

function atualizarValores(aluguel,qtd=1){
    let cards = document.querySelectorAll(".plano");
    planos.forEach(plano => {
        let valor = parseFloat((qtd * plano[aluguel]).toFixed(2));
        cards[plano.id].childNodes[5].textContent = "R$ "+valor;
        cards[plano.id].childNodes[7].textContent = "Por "+aluguel;
        if(aluguel == "mes"){
            cards[plano.id].childNodes[7].textContent = "Por mês";
        }
    })
}

function Main(){
    let aluguelPor = "semana";
    atualizarValores(aluguelPor);
    let btns = document.querySelectorAll(".option-button");
    let qtd = document.querySelector("#quantidade");
    btns.forEach(btn => {
        btn.addEventListener("click",()=>{
            qtd.value = 1;
            if(btn.textContent == "Por semana"){
                aluguelPor = "semana";
                atualizarValores("semana");
            }else{
                aluguelPor = "mes";
                atualizarValores("mes");
            }
        })
    })
    qtd.addEventListener("change",()=>{
        atualizarValores(aluguelPor,qtd.value);
    })
}

window.onload = () => {
    Main();
}