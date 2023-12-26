import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServidorModule } from './servidor/servidor.module';
import { PrismaModule } from './prisma/prisma.module';
import { UtilsModule } from './utils/utils.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ServidorModule, PrismaModule, UtilsModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
