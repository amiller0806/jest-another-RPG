// ** We'll also add a bit of logic so that if the potion is a health potion, its value is a number between 30 and 40. Add the following code:
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    
    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    }else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

// set module.exports to be the Potion() constructor
//  so that our tests can create new potions.
module.exports = Potion;