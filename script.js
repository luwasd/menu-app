const SHEET_ID ='1uUAXsUWEolsAaCoPIj9s7CbNtwprT0mjVb6htPzERKE';

const TOKEN = 'ya29.a0Aa4xrXOjLm6SKh1xheRhvol7IGnMeYhhD9k4wlVwI0xZ7gUTT9nzpikemN9r1tUGogwpSo5XbGKsMvqTElo7cUYX5ePt0z3AG5yGDgntrW5MF_gTejh04Pvvpgs-5cKtNgau6onRc6SwAIJk9JaAq12S0ZfZggaCgYKATASARMSFQEjDvL9UOJHTHcQcWE5ssmhBDk8Xw0165';
const ALMUERZO = document.getElementById('almuerzo');
const DESAYUNO = document.getElementById('desayuno');
const BEBIDAS = document.getElementById('bebidas');


ALMUERZO.addEventListener('click', function () {
  document.getElementById('lista-menu').innerHTML = "";
  let hoja = "menu!A2:C";
  fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${hoja}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      }
    }
  //esperamos el response
  ).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][1];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
  });
});

DESAYUNO.addEventListener('click', function () {
  document.getElementById('lista-menu').innerHTML = "";
  let hoja = "desayuno!A2:C";
  fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${hoja}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      }
    }
  //esperamos el response
  ).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][1];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
  });
});

BEBIDAS.addEventListener('click', function () {
  document.getElementById('lista-menu').innerHTML = "";
  let hoja = "bebidas!A2:C";
  fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${hoja}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      }
    }
  //esperamos el response
  ).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][1];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
  });
});
