import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyDut3PWbHMlWwxJt-hQRgJb09bH8oYtxp0",
    authDomain: "appesta-99f09.firebaseapp.com",
    databaseURL: "https://appesta-99f09.firebaseio.com",
    projectId: "appesta-99f09",
    storageBucket: "appesta-99f09.appspot.com",
    messagingSenderId: "878145172937",
    appId: "1:878145172937:web:27d80f8c3b9a795b0c6418"}),
    AngularFireDatabaseModule
  
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
