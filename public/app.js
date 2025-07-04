/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/CoffeeMachine.ts":
/*!**********************************!*\
  !*** ./src/app/CoffeeMachine.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoffeeMachine = void 0;
class CoffeeMachine {
    constructor(inventory) {
        this.inventory = inventory;
    }
    addObserver(observer) {
        this.inventory.addObserver(observer);
    }
    makeDrink(drink) {
        console.log(`🛠️ Attempting to make: ${drink.name}`);
        if (!this.inventory.hasEnough(drink.requiredIngredients)) {
            console.log(`❌ Not enough ingredients for ${drink.name}`);
            this.inventory.notifyObservers(`❌ Not enough ingredients for ${drink.name}`);
            return false;
        }
        const success = this.inventory.useIngredients(drink.requiredIngredients);
        if (success) {
            console.log(`✅ ${drink.name} is ready!`);
            this.inventory.notifyObservers(`✅ ${drink.name} is ready!`);
        }
        return success;
    }
    refillIngredient(name, amount) {
        this.inventory.refill(name, amount);
    }
    showInventory() {
        console.log(`📦 Inventory: ${this.inventory.getStatus()}`);
    }
}
exports.CoffeeMachine = CoffeeMachine;


/***/ }),

/***/ "./src/drinks/DrinkFactory.ts":
/*!************************************!*\
  !*** ./src/drinks/DrinkFactory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrinkFactory = void 0;
const Espresso_1 = __webpack_require__(/*! ./predefined/Espresso */ "./src/drinks/predefined/Espresso.ts");
const Cappuccino_1 = __webpack_require__(/*! ./predefined/Cappuccino */ "./src/drinks/predefined/Cappuccino.ts");
const Latte_1 = __webpack_require__(/*! ./predefined/Latte */ "./src/drinks/predefined/Latte.ts");
class DrinkFactory {
    static register(name, creator) {
        this.registry.set(name.toLowerCase(), creator);
    }
    static create(name) {
        const creator = this.registry.get(name.toLowerCase());
        return creator === null || creator === void 0 ? void 0 : creator();
    }
    static getAvailableDrinks() {
        return Array.from(this.registry.keys());
    }
}
exports.DrinkFactory = DrinkFactory;
_a = DrinkFactory;
DrinkFactory.registry = new Map();
(() => {
    _a.register('espresso', () => new Espresso_1.Espresso());
    _a.register('cappuccino', () => new Cappuccino_1.Cappuccino());
    _a.register('latte', () => new Latte_1.Latte());
})();


/***/ }),

/***/ "./src/drinks/predefined/Cappuccino.ts":
/*!*********************************************!*\
  !*** ./src/drinks/predefined/Cappuccino.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cappuccino = void 0;
class Cappuccino {
    constructor() {
        this.name = 'Cappuccino';
        this.requiredIngredients = {
            coffee: 10,
            water: 30,
            milk: 60,
        };
    }
}
exports.Cappuccino = Cappuccino;


/***/ }),

/***/ "./src/drinks/predefined/Espresso.ts":
/*!*******************************************!*\
  !*** ./src/drinks/predefined/Espresso.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Espresso = void 0;
class Espresso {
    constructor() {
        this.name = 'Espresso';
        this.requiredIngredients = {
            coffee: 10,
            water: 30,
        };
    }
}
exports.Espresso = Espresso;


/***/ }),

/***/ "./src/drinks/predefined/Latte.ts":
/*!****************************************!*\
  !*** ./src/drinks/predefined/Latte.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Latte = void 0;
class Latte {
    constructor() {
        this.name = 'Latte';
        this.requiredIngredients = {
            coffee: 10,
            water: 30,
            milk: 100,
        };
    }
}
exports.Latte = Latte;


/***/ }),

/***/ "./src/ingredients/IngredientRegistry.ts":
/*!***********************************************!*\
  !*** ./src/ingredients/IngredientRegistry.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IngredientRegistry = void 0;
class IngredientRegistry {
    static register(ingredient) {
        this.ingredients.set(ingredient.name.toLowerCase(), ingredient);
    }
    static get(name) {
        return this.ingredients.get(name.toLowerCase());
    }
    static getAll() {
        return Array.from(this.ingredients.values());
    }
}
exports.IngredientRegistry = IngredientRegistry;
IngredientRegistry.ingredients = new Map();


/***/ }),

/***/ "./src/ingredients/IngredientUnit.ts":
/*!*******************************************!*\
  !*** ./src/ingredients/IngredientUnit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IngredientUnit = void 0;
var IngredientUnit;
(function (IngredientUnit) {
    IngredientUnit["GRAM"] = "g";
    IngredientUnit["MILLILITER"] = "ml";
})(IngredientUnit || (exports.IngredientUnit = IngredientUnit = {}));


/***/ }),

/***/ "./src/ingredients/types/Coffee.ts":
/*!*****************************************!*\
  !*** ./src/ingredients/types/Coffee.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IngredientRegistry_1 = __webpack_require__(/*! ../IngredientRegistry */ "./src/ingredients/IngredientRegistry.ts");
const IngredientUnit_1 = __webpack_require__(/*! ../IngredientUnit */ "./src/ingredients/IngredientUnit.ts");
IngredientRegistry_1.IngredientRegistry.register({
    name: 'Coffee',
    unit: IngredientUnit_1.IngredientUnit.GRAM,
});


/***/ }),

/***/ "./src/ingredients/types/Ingredient.ts":
/*!*********************************************!*\
  !*** ./src/ingredients/types/Ingredient.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ingredient = void 0;
class Ingredient {
    constructor(name, amount, unit) {
        this.name = name.toLowerCase();
        this.amount = amount;
        this.unit = unit;
    }
    consume(quantity) {
        if (quantity <= this.amount) {
            this.amount -= quantity;
            return true;
        }
        return false;
    }
    refill(quantity) {
        this.amount += quantity;
    }
    toString() {
        return `${this.name}: ${this.amount} ${this.unit}`;
    }
}
exports.Ingredient = Ingredient;


/***/ }),

/***/ "./src/ingredients/types/Milk.ts":
/*!***************************************!*\
  !*** ./src/ingredients/types/Milk.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IngredientRegistry_1 = __webpack_require__(/*! ../IngredientRegistry */ "./src/ingredients/IngredientRegistry.ts");
const IngredientUnit_1 = __webpack_require__(/*! ../IngredientUnit */ "./src/ingredients/IngredientUnit.ts");
IngredientRegistry_1.IngredientRegistry.register({
    name: 'Milk',
    unit: IngredientUnit_1.IngredientUnit.MILLILITER,
});


/***/ }),

/***/ "./src/ingredients/types/Water.ts":
/*!****************************************!*\
  !*** ./src/ingredients/types/Water.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const IngredientRegistry_1 = __webpack_require__(/*! ../IngredientRegistry */ "./src/ingredients/IngredientRegistry.ts");
const IngredientUnit_1 = __webpack_require__(/*! ../IngredientUnit */ "./src/ingredients/IngredientUnit.ts");
IngredientRegistry_1.IngredientRegistry.register({
    name: 'Water',
    unit: IngredientUnit_1.IngredientUnit.MILLILITER,
});


/***/ }),

/***/ "./src/inventory/Inventory.ts":
/*!************************************!*\
  !*** ./src/inventory/Inventory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Inventory = void 0;
const IngredientRegistry_1 = __webpack_require__(/*! ../ingredients/IngredientRegistry */ "./src/ingredients/IngredientRegistry.ts");
const Observable_1 = __webpack_require__(/*! ../observer/Observable */ "./src/observer/Observable.ts");
class Inventory extends Observable_1.Observable {
    constructor() {
        super();
        this.storage = new Map();
        IngredientRegistry_1.IngredientRegistry.getAll().forEach(ingredient => {
            this.storage.set(ingredient.name.toLowerCase(), 0);
        });
    }
    add(ingredient) {
        const name = ingredient.name.toLowerCase();
        const current = this.storage.get(name) || 0;
        this.storage.set(name, current + ingredient.amount);
        this.notifyObservers(`+ Added ${ingredient.amount} of ${ingredient.name}`);
    }
    refill(ingredientName, amount) {
        const name = ingredientName.toLowerCase();
        const current = this.storage.get(name) || 0;
        this.storage.set(name, current + amount);
        this.notifyObservers(`+ Refilled ${amount} of ${ingredientName}`);
    }
    hasEnough(required) {
        return Object.entries(required).every(([name, requiredAmount]) => {
            const current = this.storage.get(name.toLowerCase()) || 0;
            return current >= requiredAmount;
        });
    }
    useIngredients(required) {
        if (!this.hasEnough(required))
            return false;
        for (const [name, amount] of Object.entries(required)) {
            const current = this.storage.get(name.toLowerCase());
            this.storage.set(name.toLowerCase(), current - amount);
        }
        this.notifyObservers(`- Used ingredients: ${JSON.stringify(required)}`);
        return true;
    }
    getStatus() {
        return Array.from(this.storage.entries())
            .map(([name, amount]) => `${name}: ${amount}`)
            .join(', ');
    }
    getIngredientAmount(name) {
        return this.storage.get(name.toLowerCase()) || 0;
    }
}
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/inventory/defaultIngredients.ts":
/*!*********************************************!*\
  !*** ./src/inventory/defaultIngredients.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDefaults = exports.loadDefaultIngredients = void 0;
const Ingredient_1 = __webpack_require__(/*! ../ingredients/types/Ingredient */ "./src/ingredients/types/Ingredient.ts");
const IngredientUnit_1 = __webpack_require__(/*! ../ingredients/IngredientUnit */ "./src/ingredients/IngredientUnit.ts");
const IngredientRegistry_1 = __webpack_require__(/*! ../ingredients/IngredientRegistry */ "./src/ingredients/IngredientRegistry.ts");
function loadDefaultIngredients() {
    return [
        new Ingredient_1.Ingredient('Water', 200, IngredientUnit_1.IngredientUnit.MILLILITER),
        new Ingredient_1.Ingredient('Milk', 200, IngredientUnit_1.IngredientUnit.MILLILITER),
        new Ingredient_1.Ingredient('CoffeeBeans', 200, IngredientUnit_1.IngredientUnit.GRAM),
        new Ingredient_1.Ingredient('Sugar', 200, IngredientUnit_1.IngredientUnit.GRAM),
    ];
}
exports.loadDefaultIngredients = loadDefaultIngredients;
function registerDefaults() {
    IngredientRegistry_1.IngredientRegistry.register({ name: 'Water', unit: IngredientUnit_1.IngredientUnit.MILLILITER });
    IngredientRegistry_1.IngredientRegistry.register({ name: 'Milk', unit: IngredientUnit_1.IngredientUnit.MILLILITER });
    IngredientRegistry_1.IngredientRegistry.register({ name: 'CoffeeBeans', unit: IngredientUnit_1.IngredientUnit.GRAM });
    IngredientRegistry_1.IngredientRegistry.register({ name: 'Sugar', unit: IngredientUnit_1.IngredientUnit.GRAM });
}
exports.registerDefaults = registerDefaults;


/***/ }),

/***/ "./src/observer/Observable.ts":
/*!************************************!*\
  !*** ./src/observer/Observable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Observable = void 0;
class Observable {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
exports.Observable = Observable;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./ingredients/types/Coffee */ "./src/ingredients/types/Coffee.ts");
__webpack_require__(/*! ./ingredients/types/Milk */ "./src/ingredients/types/Milk.ts");
__webpack_require__(/*! ./ingredients/types/Water */ "./src/ingredients/types/Water.ts");
const CoffeeMachine_1 = __webpack_require__(/*! ./app/CoffeeMachine */ "./src/app/CoffeeMachine.ts");
const Inventory_1 = __webpack_require__(/*! ./inventory/Inventory */ "./src/inventory/Inventory.ts");
const DrinkFactory_1 = __webpack_require__(/*! ./drinks/DrinkFactory */ "./src/drinks/DrinkFactory.ts");
const defaultIngredients_1 = __webpack_require__(/*! ./inventory/defaultIngredients */ "./src/inventory/defaultIngredients.ts");
class DOMLogger {
    constructor() {
        this.logEl = document.getElementById('log');
    }
    update(message) {
        const li = document.createElement('li');
        li.textContent = message;
        this.logEl.appendChild(li);
    }
}
(0, defaultIngredients_1.registerDefaults)();
const inventory = new Inventory_1.Inventory();
(0, defaultIngredients_1.loadDefaultIngredients)().forEach(ing => inventory.add(ing));
const coffeeMachine = new CoffeeMachine_1.CoffeeMachine(inventory);
coffeeMachine.addObserver(new DOMLogger());
function updateInventoryUI() {
    const el = document.getElementById('inventory');
    el.textContent = inventory.getStatus();
}
function initDrinkSelect() {
    const select = document.getElementById('drink-select');
    select.innerHTML = '';
    DrinkFactory_1.DrinkFactory.getAvailableDrinks().forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
}
(_a = document.getElementById('make-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const drinkName = document.getElementById('drink-select').value;
    const drink = DrinkFactory_1.DrinkFactory.create(drinkName);
    if (drink) {
        coffeeMachine.makeDrink(drink);
        updateInventoryUI();
    }
});
(_b = document.getElementById('refill-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const name = document.getElementById('ingredient-name').value
        .trim()
        .toLowerCase();
    const amount = parseFloat(document.getElementById('ingredient-amount').value);
    if (name && amount > 0) {
        coffeeMachine.refillIngredient(name, amount);
        updateInventoryUI();
    }
});
initDrinkSelect();
updateInventoryUI();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map