import { Message } from '../interfaces';
import { registerPlayer } from './playerController';
import { PlayerModel } from '../models/player/playerModel';
export const handleMessage = (message: Message) => {
    let response;
  switch (message.type) {
    case 'reg':
        response = registerPlayer(message)
        console.log(PlayerModel)
      break;
    case 'create_room':
      break;
    case 'add_user_to_room':
      break;
    case 'add_ships':
      break;
    case 'attack':
      break;
    case 'randomAttack':
      break;
    default:
      break;
  }
  return response
};
