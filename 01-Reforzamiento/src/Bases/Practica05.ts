


function saludar1 (nombre1:string):string{
    return`Bienvenido ${nombre1}`
}

console.log(saludar1("brandon"))
//vamos hacer lo mismo pero en funcion flecha

const saludar2=(nombre:string):string=>`Hola ${nombre}`;
console.log(saludar2("jUANITO"))

const saludar3=(nombre:string):string=>`Bienvenido ${nombre}`

console.log(saludar3("daniel"));

const saludar4= (nombre:string)=>`Bienvenido ${nombre}`

console.log(saludar4("JULIANA"))


const saludar5=(nombre:string):string=>`HOLA ${nombre}`

console.log(saludar5("como estas?"))

//nivel 2 interfaces y objetos

interface Car{

    marca:string;
    modelo:string;
    anio:number;
}

//creamos una funcion para retornar el objeto o intergas anterior

function getCar(): Car {
    return{
    marca:"Toyota",
    modelo:"chevrolet",
    anio:2025
    };

}
console.log(getCar());

//hago lo mismo pero con la funcion flecha
const getCar2 =():Car => ({
    marca:"Mazda",
    modelo:"3",
    anio:2022,
});

console.log(getCar2())