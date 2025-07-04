import './ingredients/types/Coffee';
import './ingredients/types/Milk';
import './ingredients/types/Water';

import { CoffeeMachine } from './app/CoffeeMachine';
import { Inventory } from './inventory/Inventory';
import { LoggerObserver } from './observer/LoggerObserver';
import { DrinkFactory } from './drinks/DrinkFactory';

const inventory = new Inventory();
const coffeeMachine = new CoffeeMachine(inventory);

coffeeMachine.addObserver(new LoggerObserver());

coffeeMachine.refillIngredient('coffee', 100);
coffeeMachine.refillIngredient('milk', 500);
coffeeMachine.refillIngredient('water', 1000);

coffeeMachine.showInventory();

const espresso = DrinkFactory.create('Espresso');
if (espresso) coffeeMachine.makeDrink(espresso);

const cappuccino = DrinkFactory.create('Cappuccino');
if (cappuccino) coffeeMachine.makeDrink(cappuccino);

coffeeMachine.showInventory();
