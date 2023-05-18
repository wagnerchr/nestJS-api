import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "src/entities/usuario.entity";

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async save(usuario: UsuarioEntity){
        this.usuarios.push(usuario)   
    }   
    
    async list() {
        return this.usuarios;
    }

    async findByEmail(email: string) {
        const user = this.usuarios.find(
            user => user.email === email
        );
        return user !== undefined;
    }

    // Buscar Usuário
    private findById(id: string) {
        const usuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id  
        );

        if(!usuario) 
            throw new Error('Usuário não encontrado!')

        return usuario;
    }

    async update(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
        
        const usuario = this.findById(id);
        
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id') 
                return;
            usuario[chave] = valor;         
        });
        return usuario;
    }

    async remove(id: string) {
        const usuario = this.findById(id);
        this.usuarios = this.usuarios.filter(
            usuario => usuario.id !== id
        );
        return usuario;
    }
}