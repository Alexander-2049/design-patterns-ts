export class Ingredient {
  readonly name: string;
  amount: number;
  readonly unit: string;

  constructor(name: string, amount: number, unit: string) {
    this.name = name.toLowerCase();
    this.amount = amount;
    this.unit = unit;
  }

  consume(quantity: number): boolean {
    if (quantity <= this.amount) {
      this.amount -= quantity;
      return true;
    }
    return false;
  }

  refill(quantity: number): void {
    this.amount += quantity;
  }

  toString(): string {
    return `${this.name}: ${this.amount} ${this.unit}`;
  }
}
