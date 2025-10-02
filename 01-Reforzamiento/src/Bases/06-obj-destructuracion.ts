const person={
    name:'Garcia',
    age:45,
    key:'Brandon'
}

const{key,name:iromanName,age} = person;

console.log(key,iromanName,age)
interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string;

}


const useContext=({key,name,age,rank='sin rango'}: Hero) =>{
    return{
    keyName: key,
    user:{
        name,
        age,

    },
    rank:rank,
    }

}
const {rank,keyName,user} = useContext(person);
//const context = useContext(person);
console.log(rank, keyName, user.name, user.age);

