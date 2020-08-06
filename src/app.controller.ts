import { Controller, Get, Post, Body, Logger } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger: Logger = new Logger("GameGateway");

  @Post("save-ghost")
  async create(@Body() ghost: { positionX: number; positionY: number }) {
    this.logger.log(`Ghost: ${ghost.positionX} ${ghost.positionY} `);
    const resultado = { status: "OK" };
    return resultado;
  }
}
