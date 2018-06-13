import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { Room } from './room';
import { Observable, of} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RoomServiceService {
  roomUrl = "api/rooms";
  constructor(private httpClient: HttpClient) {

   }

   /*
   Getter for Rooms
   */
  getRooms (): Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.roomUrl)
    .pipe(
      tap(rooms => this.log('fetchedRooms')),
       catchError(this.handleError('getRooms', []))
    )

  }

  
   /*
   Getter for a single Room by id
   */
  getRoom (id: number): Observable<Room>{
    const url=`${this.roomUrl}/${id}`;
    return this.httpClient.get<Room>(url).pipe(
      tap(room => this.log(`fetched room with id= ${id}`)),
      catchError(this.handleError<Room>(`getRoombyID id= ${id}`))
    )

  }


  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      //read friendly message
      this.log(`${operation} failed: ${error.message}`);
      //return an empty result to keep the app running
      return of(result as T);
    }

  }
  private log(message: string){
    console.log("GetRoom Successful");
  }
}
