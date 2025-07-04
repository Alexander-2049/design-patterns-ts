import { IngredientUnit } from './IngredientUnit';

export interface Ingredient {
  name: string;
  unit: (typeof IngredientUnit)[keyof typeof IngredientUnit];
}
