import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private store: BehaviorSubject<string> = new BehaviorSubject<string>('anonymous');

  constructor() {
  }

  getState(): Observable<string>{
    return this.store.asObservable();
  }

  setState(state: string){
    // console.log(state);
    this.store.next(state);
  }

}
