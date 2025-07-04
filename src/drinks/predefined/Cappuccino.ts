import { IDrink } from '../Drink';

export class Cappuccino implements IDrink {
  name = 'Cappuccino';
  requiredIngredients = {
    coffee: 10,
    water: 30,
    milk: 60,
  };
}
