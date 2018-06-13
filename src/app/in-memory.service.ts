import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryService implements InMemoryDbService {

  createDb(){
    const rooms =[
      {id: 1, name: "Kitchen",  sqm: "32", lightbulbs: {working: 16, broken: 0}, windows:{working: 4, broken: 0}, lightSwitches: {working: 2, broken: 2}, sockets: {working: 10, broken: 4} },
      {id: 1, name: "Playroom",  sqm: "87", lightbulbs: {working: 24, broken: 4}, windows:{working: 10, broken: 1}, lightSwitches: {working: 12, broken: 2}, sockets: {working: 12, broken: 2} },
      {id: 1, name: "Bathroom",  sqm: "23", lightbulbs: {working: 8, broken: 1}, windows:{working: 1, broken: 0}, lightSwitches: {working: 4, broken: 0}, sockets: {working: 8, broken: 1} }
    ];
    return {rooms};
  }
}
