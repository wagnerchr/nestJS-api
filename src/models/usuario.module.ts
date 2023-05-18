import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controllers/usuario.controller";
import { UsuarioRepository } from "src/repositories/usuario.repository";
import { EmailUnicoValidator } from "src/validation/unique-email";


@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator]
})
export class UsuarioModule {

}