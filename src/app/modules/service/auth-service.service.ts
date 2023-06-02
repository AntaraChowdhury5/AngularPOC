import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  
  sendData(data: any) {
    this.eventEmitter.emit(data);
  }
  constructor() { }
  
}
