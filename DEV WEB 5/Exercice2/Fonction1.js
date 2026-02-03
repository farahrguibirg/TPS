const fonction1=x => x + 5;

const fonction2 = (x, y) => x + y;

const fonction  = () => {
    let num = Number(prompt("Entrez un nombre :"));
    return num + 2;
}
console.log(fonction());   
console.log(fonction1(3));     
console.log(fonction2(3, 6));