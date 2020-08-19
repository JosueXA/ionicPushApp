import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {

    this.oneSignal.startInit('dc1cc1be-b430-4bcc-a686-50a870a80e68', '139816947611');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe( ( noti ) => {
    // do something when notification is received
    console.log('Notificación recibida', noti);
    
    });

    this.oneSignal.handleNotificationOpened().subscribe( ( noti ) => {
      // do something when a notification is opened
      console.log('Notificación abierta', noti);
    });

    this.oneSignal.endInit();

  }
}
