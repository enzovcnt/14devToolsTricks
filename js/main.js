const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age:8 }];

function makegreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '60px';
}




console.log("Hello World!");
console.log('Welcome to the Vue.js %s application!', 'tout');
console.log('%c i am great text', 'font-size:50px; background:blue;');
console.warn('nonon')
console.error('arrête')
console.info('le savize vous')


const p = document.querySelector('p');

console.assert(p.classList.contains('bonjour'),'cest faux');

console.clear();

console.log(p);
console.dir(p);

console.clear();

dogs.forEach(dog => {
    console.groupCollapsed(dog.name)
    console.log(dog.name);
    console.log(dog.age);
    console.groupEnd(dog.name)
})

console.count('ter')
console.count('kop')
console.count('ter')
console.count('kop')
console.count('ter')
console.count('kop')
console.count('ter')
console.count('ter')
console.count('kop')
