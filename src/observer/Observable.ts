import { IObserver } from './IObserver';

export abstract class Observable {
  private observers: IObserver[] = [];

  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  public notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
}
