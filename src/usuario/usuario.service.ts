import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor (
    private prisma: PrismaService
  ) {}

  async criar(createUsuarioDto: CreateUsuarioDto) {
    const { login, nome, permissao, status_user } = createUsuarioDto;
    const novoUsuario = await this.prisma.usuario.create({
      data: { login, nome, permissao, status_user }
    });
    return novoUsuario;
  }

  async listarTodos() {
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios;
  }

  async buscarPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id }
    });
    return usuario;
  }

  async atualizar(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const atualizarUsuario = await this.prisma.usuario.update({
      data: updateUsuarioDto,
      where: { id }
    });
    return atualizarUsuario;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
