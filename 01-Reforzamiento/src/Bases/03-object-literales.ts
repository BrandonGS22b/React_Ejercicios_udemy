const ironman={
    firstName:'Brandon',
    lastName:'Garcia',
    age:45,
    address:{
        postalCode:'ABC123',
        city:'Newyork'

    }
};

const spiderman = structuredClone(ironman);//crea una copia profunda, no comparten memoria. si uso el ... no va ser una copia profunda y no me tomaria lo que esta por dentro del address solo lo externo

spiderman.firstName=('peter');
spiderman.lastName=('parker');
spiderman.age=(21);
spiderman.address.city=('colombia');


console.log(ironman,spiderman);
