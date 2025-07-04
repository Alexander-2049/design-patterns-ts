import { IDrink } from './Drink';
import { Espresso } from './predefined/Espresso';
import { Cappuccino } from './predefined/Cappuccino';
import { Latte } from './predefined/Latte';

export class DrinkFactory {
  private static registry = new Map<string, () => IDrink>();

  static {
    this.register('espresso', () => new Espresso());
    this.register('cappuccino', () => new Cappuccino());
    this.register('latte', () => new Latte());
  }

  public static register(name: string, creator: () => IDrink): void {
    this.registry.set(name.toLowerCase(), creator);
  }

  public static create(name: string): IDrink | undefined {
    const creator = this.registry.get(name.toLowerCase());
    return creator?.();
  }

  public static getAvailableDrinks(): string[] {
    return Array.from(this.registry.keys());
  }
}
