let myArray = [];
let index = 0;

const insertIntoDb = (obj) => {
    const book = { id: index, ...obj };
    index++;
    myArray.push(book);
}

const getAllFromDb = () => { return myArray; }
const getFromDbById = (id) => {
    const obj = myArray.find(el => el.id === parseInt(id));
    if (obj) {
        return obj;
    }
    throw new Error(`The object with the id = ${id} does not exists!`);
}

const getFromDbBySeller = (seller) => {
    const books = myArray.filter(el => el.seller === seller);
    return books;
}

const getFromDbByName = (name) => {
    const books = myArray.filter(el => el.name === name);
    return books;
}

const updateById = (id, payload) => {
    const elemIndex = myArray.findIndex(el => el.id === parseInt(id));
    if (elemIndex > -1) {
        myArray[elemIndex] = {
            id,
            ...payload
        }
    } else {
        throw new Error(`The object with the id = ${id} does not exists!`);
    }
}


const removeFromDbById = (id) => {
    const newArray = myArray.filter(el => el.id !== parseInt(id));
    myArray = newArray;
}
const removeFromDbBySeller = (seller) => {
    console.log(seller);
    const newArray = myArray.filter(el => el.seller !== seller);
    myArray = newArray;
}
const purgeDb = () => {
    myArray = [];
}

module.exports = {
    insertIntoDb,
    getAllFromDb,
    getFromDbById,
    getFromDbBySeller,
    updateById,
    removeFromDbById,
    removeFromDbBySeller,
    getFromDbByName,
    purgeDb
};