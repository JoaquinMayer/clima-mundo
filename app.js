const axios = require('axios');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

let encodeUrl = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8`)
    .then(resp => {

        let location = resp.data.results[0];

        console.log("Direccion", location.formatted_address);
        console.log("Latitud", location.geometry.location.lat);
        console.log("Longitus", location.geometry.location.lng);

        // console.log(JSON.stringify(resp.data, undefined, 2));
    })
    .catch(e => console.log('ERROR', e))