import { IsString, IsNumber, IsEmail, IsBoolean, IsNotEmpty, IsOptional } from "class-validator";
import { EmailUnico } from "src/validation/unique-email";
import internal from "stream";

export class AtualizaUsuarioDTO {
    
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
    @IsOptional()
    nome?: string;

    @IsNumber()
    @IsOptional()
    idade?: internal;

    @IsEmail()
    @EmailUnico({ message: 'Já existe um usuário com este email!'})
    @IsOptional()
    email?: string;
    @IsBoolean()
    @IsOptional()
    comSono?: boolean;
}