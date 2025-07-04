import { IDrink } from '../Drink';

export class Espresso implements IDrink {
  name = 'Espresso';
  requiredIngredients = {
    coffee: 10,
    water: 30,
  };
}
