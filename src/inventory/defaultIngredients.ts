import { Ingredient } from '../ingredients/types/Ingredient';
import { IngredientUnit as Unit } from '../ingredients/IngredientUnit';
import { IngredientRegistry } from '../ingredients/IngredientRegistry';

export function loadDefaultIngredients(): Ingredient[] {
  return [
    new Ingredient('Water', 200, Unit.MILLILITER),
    new Ingredient('Milk', 200, Unit.MILLILITER),
    new Ingredient('CoffeeBeans', 200, Unit.GRAM),
    new Ingredient('Sugar', 200, Unit.GRAM),
  ];
}

export function registerDefaults() {
  IngredientRegistry.register({ name: 'Water', unit: Unit.MILLILITER });
  IngredientRegistry.register({ name: 'Milk', unit: Unit.MILLILITER });
  IngredientRegistry.register({ name: 'CoffeeBeans', unit: Unit.GRAM });
  IngredientRegistry.register({ name: 'Sugar', unit: Unit.GRAM });
}
