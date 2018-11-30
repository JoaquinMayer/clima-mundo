const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cba6f7ac6ad8490012a475b7b777a13e`)

    if (resp.data.code === 400) {
        throw new Error(`No hay resultados`);
    }

    let temp = resp.data.main.temp;

    return temp
}

module.exports = {
    getClima
}