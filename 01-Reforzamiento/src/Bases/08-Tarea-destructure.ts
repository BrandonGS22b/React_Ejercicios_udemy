
const useState = (value:string) =>{
    return[
        value,
        (newValue:string)=>{
            console.log(newValue);
        },
    ] as const;
}

// Ejemplo de uso
const [name, setName] = useState('Goku');

console.log(name);   // "Goku"

setName('Vegeta');   // imprime "Vegeta"
