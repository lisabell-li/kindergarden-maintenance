import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Room } from '../room';
import { RoomServiceService } from '../room-service.service';



@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {

  lightbulbCount= 0;
  lightswitchesCount= 0;
  socketsCount= 0;
  windowsCount= 0;

  rooms: Room[] = [];
  roomCount: Room;

  constructor(private roomService:RoomServiceService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(): void{
    this.roomService.getRooms().subscribe( rooms =>this.createShoopingListitems(rooms));
    
  }

  createShoopingListitems(roomsSub: Room[]) : void{
    var i:number; 
    for(let i=0; i<roomsSub.length; i++){
      this.lightbulbCount += roomsSub[i].lightbulbs["broken"];
      this.lightswitchesCount += roomsSub[i].lightSwitches["broken"];
      this.socketsCount += roomsSub[i].sockets["broken"];
      this.windowsCount += roomsSub[i].windows["broken"];
    
    }
  }

}
