import { Component, OnInit, Input } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { Room } from '../room';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.scss']
})
export class RoomdetailComponent implements OnInit {
  @Input() room: Room;

  constructor(private roomService: RoomServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom():void{
    //get id from url params:
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id).subscribe(room => this.room = room);
  }

}
