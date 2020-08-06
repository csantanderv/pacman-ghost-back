import { Module } from "@nestjs/common";
import { GameGateway } from "./game-gateway";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [ConfigService],
  providers: [GameGateway]
})
export class GameServerModule {}
