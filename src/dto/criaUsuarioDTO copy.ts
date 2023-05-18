import { IsString, IsNumber, IsEmail, IsBoolean, IsNotEmpty } from "class-validator";
import { EmailUnico } from "src/validation/unique-email";
import internal from "stream";

export class CriaUsuarioDTO {
    
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
    nome: string;

    @IsNumber()
    idade: internal;

    @IsEmail()
    @EmailUnico({ message: 'Já existe um usuário com este email!'})
    email: string;
    @IsBoolean()
    comSono: boolean;
}