import EventEmitter from 'events';
import { Ingredient } from './Ingredient';

export class IngredientRegistry extends EventEmitter {
  private static ingredients = new Map<string, Ingredient>();

  static register(ingredient: Ingredient): void {
    this.ingredients.set(ingredient.name.toLowerCase(), ingredient);
  }

  static get(name: string): Ingredient | undefined {
    return this.ingredients.get(name.toLowerCase());
  }

  static getAll(): Ingredient[] {
    return Array.from(this.ingredients.values());
  }

  static addIngredientListener(listener: (ingredient: Ingredient) => void): void {
    this.prototype.on('ingredientAdded', listener);
  }

  static removeIngredientListener(listener: (ingredient: Ingredient) => void): void {
    this.prototype.off('ingredientAdded', listener);
  }

  static add(ingredient: Ingredient): void {
    this.register(ingredient);
    this.prototype.emit('ingredientAdded', ingredient);
  }
}
