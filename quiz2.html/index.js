const apiKey = 'e3ad77404dc88bee59f4a50942c3dbc6';
let div = document.getElementById('cityWeather');

async function showWeather(city) { // Эта функция достает данные и показывает на странице
    const fetchedData = await fetchData(city);
    
    const htmlToAppend = `<div>
                <h1>${fetchedData.main.temp}°C <img src="http://openweathermap.org/img/w/${fetchedData.weather[0].icon}.png"/></h1>
                <h3>${fetchedData.name}</h3>
                <p>Погода: ${fetchedData.weather[0].description}</p>
                <p>Влажность: ${fetchedData.main.humidity}</p>
                <p>Скорость Ветра: ${fetchedData.wind.speed}</p>
            </div>`;
    div.innerHTML = htmlToAppend;
}

const getLocalData = () => { // Проверяет данные в localStorage, если они есть, то возвращает их, иначе возвращает null
    const localData = localStorage.getItem('city');
    if (!localData) { return null; }
    return localData;
};

document.getElementById('btn').addEventListener('click', () => { // Выполняется при клике на кнопку
    let city = document.getElementById('city').value;
    showWeather(city);  
    localStorage.setItem('city', city);
});

window.addEventListener('load', () => { // При загрузке страницы, если есть данные в localStorage, выполняет showWeather
    showWeather("Almaty");
});

async function fetchData(city) { // Запрос погоды с API
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
        
        if (response.ok) { 
            return await response.json();
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    } catch (err) {
        console.log(err);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('readSearch').addEventListener('click', async function () {
    const container = document.getElementById('container'); // Убедитесь, что элемент с id 'container' существует
    container.innerHTML = ''; 

    let cities = ['Aktay', 'Astana', 'Shymkent', 'Aktobe', 'Atyrau', 'Oskemen', 'Semey', 'Kyzylorda', 'Taldykorgan', 'Karagandy', 'Taraz', 'Petropavl'];

    cities.forEach(async function(city) {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`);

            if (!response.ok) {
                console.error("Ошибка");
            }

            let data = await response.json();
            console.log(data);

            let div = document.createElement('div');
            div.className = 'hourly-card';

            div.innerHTML = `
                <p class="time">${data.name}</p>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Картинка погоды">
                <p>${data.main.temp}°C/<span class="feelsLike">${data.main.feels_like}°C</span></p>
                <p>Погода: ${data.weather[0].description}</p>
                <p>Влажность: ${data.main.humidity}%</p>
            `;

            container.appendChild(div); // Добавляем созданный элемент в контейнер
        } catch (err) {
            console.error(err);
        }
    });
});