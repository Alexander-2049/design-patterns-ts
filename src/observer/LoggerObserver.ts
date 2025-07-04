import { IObserver } from './IObserver';

export class LoggerObserver implements IObserver {
  update(message: string): void {
    console.log(`[📢 LOG] ${message}`);
  }
}
