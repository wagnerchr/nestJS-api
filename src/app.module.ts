import { Module } from '@nestjs/common';
import { UsuarioModule } from './models/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
