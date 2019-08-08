import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Login } from '../app/login';
// import { baby } from '../app/baby';
// import { defects } from '../app/defects';
// import { martenal } from '../app/martenal';
// import { motherConditions } from '../app/mother-conditions';
// import { motherPhysical } from '../app/mother-physical';
// import { Updated } from '../app/updated'
// import {Users} from '../app/users';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // declarations: [AppComponent, Login, baby, defects, martenal, motherConditions, motherPhysical, Updated],
  // entryComponents: [AppComponent, Login, baby, defects, martenal, motherConditions, motherPhysical, Updated],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
