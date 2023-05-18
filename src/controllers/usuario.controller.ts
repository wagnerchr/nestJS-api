import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "src/dto/criaUsuarioDTO copy";
import { AtualizaUsuarioDTO } from "src/dto/atualizaUsuarioDTO copy";
import { ListaUsuarioDTO } from "src/dto/listaUsuarioDTO";
import { UsuarioEntity } from "src/entities/usuario.entity"; 
import { UsuarioRepository } from "src/repositories/usuario.repository";
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {

    }

    @Post()
    async create(@Body() dados: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = dados.nome;
        usuarioEntity.idade = dados.idade;
        usuarioEntity.email = dados.email;
        usuarioEntity.comSono = dados.comSono;
        usuarioEntity.id = uuid();


        this.usuarioRepository.save(usuarioEntity);
        return {
            ...dados, 
            usuariocriado: true,
        }
    }
    
    @Get()
    async getAll() {
        const usuariosSalvos = await this.usuarioRepository.list();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista;  
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() dados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.update(id, dados);

        return {
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso!'
        } 
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return {
            usuario: usuarioRemovido,
            message: 'Usuário removido com sucesso!'
        }
    }
}