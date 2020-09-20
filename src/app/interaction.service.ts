import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  messageSource=new Subject<string>();
  observable$= this.messageSource.asObservable();

  constructor() { }


  notify(msg:string){
    this.messageSource.next(msg)
  }
}
