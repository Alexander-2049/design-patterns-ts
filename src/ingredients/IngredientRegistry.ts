import { Ingredient } from './Ingredient';

export class IngredientRegistry {
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
}
