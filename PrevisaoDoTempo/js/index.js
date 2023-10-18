const search = document.querySelector('.search-box button');
const container = document.querySelector(".container")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")

search.addEventListener("click", ()=>{ //função anônima
    console.log("carregar dados");

    const APIKey = '46d7b441a87b91be754b345a441d48a3'
    const city = document.querySelector(".search-box input").value;

    if(city ==='') return

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
    .then((response) => response.json())
    .then((json) => {
        //console.log(json);
        if(json.cod ==="404"){
            container.style.height = '400px'; //vai aumentar a caixinha quando digitamos alguma coisa
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            error404.style.display = "block";
            error404.classList.add("fadeIn"); //efeito de aparecer ou desaparecer que tá no css  
            return;
        }

        
    });

});