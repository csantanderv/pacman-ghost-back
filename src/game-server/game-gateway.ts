import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { EventTypes } from "./event-types";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class GameGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;
  private logger: Logger = new Logger("GameGateway");

  afterInit() {
    this.logger.log(EventTypes.Init);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Se conectó el usuario ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Se desconectó el usuario ${client.id}`);
  }

  @SubscribeMessage(EventTypes.SendAttack)
  handleSendAttack(client: Socket, data: any) {
    if (data) {
      this.server.emit(EventTypes.ShowGhost, data);
      client.emit(EventTypes.AttackSended);
    }
  }

  @SubscribeMessage(EventTypes.KillGhost)
  handleKillGhost(client: Socket, data: any) {
    if (data) {
      this.server.emit(EventTypes.DestroyAttack, data);
    }
  }
}
