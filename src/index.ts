import './ingredients/types/Coffee';
import './ingredients/types/Milk';
import './ingredients/types/Water';

import { CoffeeMachine } from './app/CoffeeMachine';
import { Inventory } from './inventory/Inventory';
import { LoggerObserver } from './observer/LoggerObserver';
import { DrinkFactory } from './drinks/DrinkFactory';

import { loadDefaultIngredients, registerDefaults } from './inventory/defaultIngredients';

class DOMLogger implements LoggerObserver {
  private logEl = document.getElementById('log')!;

  update(message: string): void {
    const li = document.createElement('li');
    li.textContent = message;
    this.logEl.appendChild(li);
  }
}

registerDefaults();

const inventory = new Inventory();
loadDefaultIngredients().forEach(ing => inventory.add(ing));

const coffeeMachine = new CoffeeMachine(inventory);
coffeeMachine.addObserver(new DOMLogger());

function updateInventoryUI() {
  const el = document.getElementById('inventory')!;
  el.textContent = inventory.getStatus();
}

function initDrinkSelect() {
  const select = document.getElementById('drink-select') as HTMLSelectElement;
  select.innerHTML = '';
  DrinkFactory.getAvailableDrinks().forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
}

document.getElementById('make-btn')?.addEventListener('click', () => {
  const drinkName = (document.getElementById('drink-select') as HTMLSelectElement).value;
  const drink = DrinkFactory.create(drinkName);
  if (drink) {
    coffeeMachine.makeDrink(drink);
    updateInventoryUI();
  }
});

document.getElementById('refill-btn')?.addEventListener('click', () => {
  const name = (document.getElementById('ingredient-name') as HTMLInputElement).value
    .trim()
    .toLowerCase();
  const amount = parseFloat(
    (document.getElementById('ingredient-amount') as HTMLInputElement).value,
  );
  if (name && amount > 0) {
    coffeeMachine.refillIngredient(name, amount);
    updateInventoryUI();
  }
});

initDrinkSelect();
updateInventoryUI();
