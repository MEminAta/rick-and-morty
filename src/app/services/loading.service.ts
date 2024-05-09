import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  private waitingRequestCountBehavior = new BehaviorSubject<number>(0);
  waitingRequestCountObservable = this.waitingRequestCountBehavior.asObservable();

  constructor() {}

  increaseWaitingRequestCount() {
    const currentValue = this.waitingRequestCountBehavior.value;
    this.waitingRequestCountBehavior.next(currentValue + 1);
  }

  decreaseWaitingRequestCount() {
    const currentValue = this.waitingRequestCountBehavior.value;
    this.waitingRequestCountBehavior.next(currentValue - 1);
  }
}
