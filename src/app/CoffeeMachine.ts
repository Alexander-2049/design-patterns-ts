import { Inventory } from '../inventory/Inventory';
import { IDrink } from '../drinks/Drink';
import { IObserver } from '../observer/IObserver';

export class CoffeeMachine {
  private inventory: Inventory;

  constructor(inventory: Inventory) {
    this.inventory = inventory;
  }

  public addObserver(observer: IObserver): void {
    this.inventory.addObserver(observer);
  }

  public makeDrink(drink: IDrink): boolean {
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

  public refillIngredient(name: string, amount: number): void {
    this.inventory.refill(name, amount);
  }

  public showInventory(): void {
    console.log(`📦 Inventory: ${this.inventory.getStatus()}`);
  }
}
