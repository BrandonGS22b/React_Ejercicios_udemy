interface Hero{
    id:number;
    name:string;
    owner:Owner;

}
enum Owner{
    DC='DC', //
    Marvel='Marvel',
}

const heroes:Hero[]= [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.DC,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.DC,
  },
];


//console.log(heroes);
console.log(heroes[1].id,heroes);
console.log(heroes[1].id, heroes[1].name); //aqui obtiene el id y el nombre
