/*- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.*/
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let newUsers = [];
for (let i = 0; i < users.length; i++) {
    newUsers[i] = users[i].address;
}
console.log(newUsers);
/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.*/
for (const user of users) {
    const elementDiv = document.createElement('div');
    elementDiv.innerText = JSON.stringify(user);
    document.body.appendChild(elementDiv);
}
/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)*/
for (const user of users) {
    const elDiv = document.createElement('div')
    const nameDiv = document.createElement('div');
    const ageDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    nameDiv.innerText = `name: ${user.name}`;
    ageDiv.innerText = `age: ${user.age}`;
    statusDiv.innerText = `status: ${user.status}`;
    addressDiv.innerText = `adress: ${JSON.stringify(user.address)}`;
    document.body.appendChild(elDiv);
    elDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
}
/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості*/
for (const user of users) {
    const elDiv = document.createElement('div')
    const nameDiv = document.createElement('div');
    const ageDiv = document.createElement('div');
    const statusDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const cityDiv = document.createElement('div');
    const countryDiv = document.createElement('div');
    const streetDiv = document.createElement('div');
    const houseNumberDiv = document.createElement('div');
    nameDiv.innerText = `name: ${user.name}`;
    ageDiv.innerText = `age: ${user.age}`;
    statusDiv.innerText = `status: ${user.status}`;
    cityDiv.innerText = `city: ${user.address.city}`;
    countryDiv.innerText = `country: ${user.address.country}`;
    streetDiv.innerText = `street: ${user.address.street}`;
    houseNumberDiv.innerText = `houseNumber: ${user.address.houseNumber}`;

    document.body.appendChild(elDiv);
    addressDiv.append(cityDiv, countryDiv, streetDiv, houseNumberDiv);
    elDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
}