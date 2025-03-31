import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // controla as requisições e respostas
  providers: [AppService], // lógica dos serviços
})
export class AppModule {}
