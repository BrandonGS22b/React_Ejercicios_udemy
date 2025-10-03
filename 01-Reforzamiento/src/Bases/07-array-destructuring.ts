const characterNames = ['Goku','vegeta','trunks'];

const [,,p3]=characterNames;

console.log({p3});


const returnArrayFn = () =>{
    return ['ABC',123] as const;

};

const [letter,numbers] = returnArrayFn();

console.log(letter,numbers)