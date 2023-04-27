const user = {id: 1, name: 'shohan', job: 'student'};
// console.log(user);

// javaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);


const shop = {
    ownwe: 'mina',
    address: {
        street: 'khoksa',
        city: 'kushtia',
        country: 'bangladesh',
    },
    products: ['laptop', 'mobile', 'monitor', 'keyboard'],
    revenue: 50000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObject = JSON.parse(shopJson);
console.log(shopObject);