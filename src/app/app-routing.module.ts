import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { StartComponent } from './start/start.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';

const routes: Routes = [
  {path:"", component: StartComponent},
  {path:"rooms", component: RoomsComponent},
  {path:"detail/:id", component: RoomdetailComponent},
  {path:"list", component: ShoppinglistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
