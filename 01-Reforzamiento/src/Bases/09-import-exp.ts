import{heroes, type Hero,Owner} from '../data/heroes.data';

const getHeroById=(id:number):Hero|undefined =>{
    const hero = heroes.find((hero)=>{
        return hero.id === id;
    });

    //if (!hero) {
    //    throw new Error(`no existe un heroe con el id ${id}`)
    //}
    return hero;

};

console.log(getHeroById(3));

//Tarea 

/*

*tengo que crear una funcion getHeroesByOwner=>Hero[]   esto me regresara un arreogo de Hero
*filtra heroes del arreglo anterior por su propietario
*@param Owner - el propietario por el cual filtrar (DC o marvel) , usar la enumeracion Owner
*returns Array de heroes pertenecientes al propietario especificado

*/


export const getHeroesByOwner=(owner:Owner):Hero[]=>{
    const heroesByOwner =heroes.filter((hero)=>hero.owner===owner);

    return heroesByOwner;
}; 


console.log(getHeroesByOwner(Owner.DC));
console.log(getHeroesByOwner(Owner.Marvel));