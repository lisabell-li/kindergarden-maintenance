
 enum Status {
    Working,     // 0
    Broken,         // 1
    BeingRepaired,       // 2
}

export class Room{
        id: number;
        name: string;
        sqm: number;
        lightbulbs: number;
        windows: number;
        lightSwitches: number;
        sockets: { working: number, broken: number };
}