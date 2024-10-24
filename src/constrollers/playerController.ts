import { IPlayer, Message } from "../interfaces"
import { Player } from "../models/player/player"
import { PlayerModel } from "../models/player/playerModel"

export const registerPlayer = (message: Message) => {
    console.log('register', message)
    console.log('data', message.data)
    const data = JSON.parse(message.data)
    const player = new Player(data.name, data.password) as IPlayer
    PlayerModel.push(player as IPlayer)

    // return {
    //     type: message.type,
    //     data: {
    //         name: userName,
    //         index: 
    //     }
    // }
}

export const getPlayer =(name: string)=>{

}