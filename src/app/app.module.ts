import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { StartComponent } from './start/start.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RoomServiceService } from './room-service.service';
import { InMemoryService } from './in-memory.service';

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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
