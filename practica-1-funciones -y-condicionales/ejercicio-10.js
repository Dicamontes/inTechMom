/* Practica 1: Funciones y Condicionales
Ejercicio 10: Práctica libre! Crea una función que haga lo que tu quieras. Luego invocala e imprime 
en pantalla los resultados. La función debe retornar algun valor.
*/

let productList ={
    1520 : {
        "department": "Women",
        "typeOfProduct": "Clothes",
        "category": "Pants",
        "description": "Classic pants",
        "color": "Light beige",
        "size": [2, 4 , 6, 8, 10, 12, 16]
    },
    1521: {
        "department": "Men",
        "typeOfProduct": "Clothes",
        "category": "T-shirts",
        "description": "Regular fit T-shirt",
        "color": "Pistachio green",
        "size": ["S", "M" , "L", "XL"]
    },
    1522: {
        "department": "Girls",
        "typeOfProduct": "Clothes",
        "category": "Dresses",
        "description": "Ruffled dress",
        "color": "Light pink",
        "size": ["2-4A", "4-6A" , "6-8A", "8-10A"]
    }
};

/* 1. Function that takes an object literal, productObject, containing a list of products of a clothing store,
an id, and a property (like department or description). The function will consult the object to find the 
value of the specified property.
*/
function propertValueSearch(productObject, id, property){
    let result = "";
    if(property !== ""){
        result = productObject[id][property];
        return result;
    } else {
        return "Por favor ingrese una propiedad valida para poder consultar su valor."
    }
}
    
// Calling the function propertValueSearch
    console.log(propertValueSearch(productList, 1521, "description"));
    console.log(propertValueSearch(productList, 1520, "size"));

/* 2. Function that takes an object literal, productObject, containing a list of products of a clothing store,
an id, a property (like department or description), and a value. 
- The function will modify/update the object passed to the function.
- The funcion will return the entire productObject.
- If property isn't size and value isn't an empty string, update or set that product's property to value.
- If property is size and value isn't an empty string, add value to the end of the product's existing size array.
- If value is an empty string, show a message indicating that value must be different than empty.
*/
function updateProduct (productObject, id, property, value){
    if (property !== "size" && value !== ""){
        productObject[id][property] = value;
        return productObject;
    } else if (property === "size" && value !== ""){
        productObject[id][property].push(value);
        return productObject;
    } else if (value === ""){
        return "Please specify a value that is not empty";
    }
}

// Calling the function updateProduct
console.log(updateProduct(productList, 1522, "size","10-12A"));
console.log(updateProduct(productList, 1520, "color", "Black"));


