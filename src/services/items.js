import api from "./api";

let testItems = [
    { id: 1, text: "Test item 1", number: "1234567" }, // Migration 1
    { id: 2, text: "Test item 2", number: "7654321" }, // Migration 2
]
const itemService = {};

const generateID = () => testItems.length == 0 ? 1 : testItems[testItems.length - 1].id + 1;

// CRUD ----------------------------------------------------------------------------------
itemService.getItems = () => testItems;
// itemService.getItem = (id) => { // UNUSED
//     const itemIndex = testItems.findIndex(item => item.id == id)
//     return testItems[itemIndex]
// }; 
itemService.createItem = (newText, newNumber) => testItems.push({ 
    id: generateID(), 
    text: newText, 
    number: newNumber
});
itemService.updateItem = (id, newText, newNumber) => { 
    testItems.forEach(item => {
        if(item.id == id) {
            item.text = newText,
            item.number = newNumber
        }    
    })
};
itemService.deleteItem = (id) => testItems = testItems.filter(item => item.id != id);
// CRUD ----------------------------------------------------------------------------------

export default itemService;