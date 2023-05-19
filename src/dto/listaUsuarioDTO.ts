import { UUID } from "crypto";
import internal from "stream";

export class UsuarioDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly idade: internal,
        readonly email: string,
        readonly comSono: boolean,
    ) {}
}

export class ListaUsuarioDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
    ) {}
}