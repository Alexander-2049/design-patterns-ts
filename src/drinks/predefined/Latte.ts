import { IDrink } from '../Drink';

export class Latte implements IDrink {
  name = 'Latte';
  requiredIngredients = {
    coffee: 10,
    water: 30,
    milk: 100,
  };
}
