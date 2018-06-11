import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { StartComponent } from './start/start.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ShoppinglistComponent,
    StartComponent,
    RoomdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
