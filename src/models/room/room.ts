import { IPlayer } from "../../interfaces";

export class Room{
    id: number;
    players: Array<IPlayer>;
    activePlayerIdx: number;

    constructor(id:number, players: Array<IPlayer>, activePlayerIdx: number){
        this.id = id
        this.players = players, 
        this.activePlayerIdx = activePlayerIdx
    }

}