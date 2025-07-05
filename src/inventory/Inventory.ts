import { Ingredient } from '../ingredients/types/Ingredient';
import { IngredientRegistry } from '../ingredients/IngredientRegistry';
import { Observable } from '../observer/Observable';

export class Inventory extends Observable {
  private storage = new Map<string, number>();

  constructor() {
    super();
    IngredientRegistry.getAll().forEach(ingredient => {
      this.storage.set(ingredient.name.toLowerCase(), 0);
    });
  }

  public add(ingredient: Ingredient): void {
    const name = ingredient.name.toLowerCase();
    const current = this.storage.get(name) || 0;
    this.storage.set(name, current + ingredient.amount);
    this.notifyObservers(`+ Added ${ingredient.amount} of ${ingredient.name}`);
  }

  public refill(ingredientName: string, amount: number): void {
    const name = ingredientName.toLowerCase();
    const current = this.storage.get(name) || 0;
    this.storage.set(name, current + amount);
    this.notifyObservers(
      `+ Refilled ${amount}${IngredientRegistry.get(ingredientName)?.unit}. of ${ingredientName}`,
    );
  }

  public hasEnough(required: Record<string, number>): boolean {
    return Object.entries(required).every(([name, requiredAmount]) => {
      const current = this.storage.get(name.toLowerCase()) || 0;
      return current >= requiredAmount;
    });
  }

  public useIngredients(required: Record<string, number>): boolean {
    if (!this.hasEnough(required)) return false;

    for (const [name, amount] of Object.entries(required)) {
      const current = this.storage.get(name.toLowerCase())!;
      this.storage.set(name.toLowerCase(), current - amount);
    }

    this.notifyObservers(`- Used ingredients: ${JSON.stringify(required)}`);
    return true;
  }

  public getStatus(): string {
    return Array.from(this.storage.entries())
      .map(([name, amount]) => `${name}: ${amount}`)
      .join(', ');
  }

  public getIngredientAmount(name: string): number {
    return this.storage.get(name.toLowerCase()) || 0;
  }
}
