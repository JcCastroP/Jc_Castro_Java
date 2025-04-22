const uri = 'https://jsonplaceholder.typicode.com/todos/';

const pintarDatos = (datos) => {
    let info = "";
    let ruta = datos;
    let loop = 0;
    ruta.forEach(element => {
        if (element.completed && loop < 5) {
            info += "<li>" + element.title + "</li>";
            loop++;
        }
    });
    document.getElementById("noticias").innerHTML = info;
}

const getJSON = (url, callback) => {

    let json;
    json = fetch(url);

    json.then(result =>
        result.json()
    ).then(
        r => {
            callback(r)
        }
    ).catch(e => console.log(e));
}

getJSON(uri, pintarDatos);