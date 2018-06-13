import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomServiceService } from '../room-service.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room [] = [];
  constructor(private roomservice: RoomServiceService) { }

  ngOnInit() {
    this.getRooms();
  }


  getRooms(): void{
    this.roomservice.getRooms()
    .subscribe(rooms =>this.rooms = rooms);
  }
}
