import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GameServerModule } from "./game-server/game-server.module";
import config from "./config/app";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GameServerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
