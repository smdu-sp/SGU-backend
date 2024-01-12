import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario') //localhost:3000/usuario
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('criar') //localhost:3000/usuario/criar
  criar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.criar(createUsuarioDto);
  }

  @Get('listar-todos') //localhost:3000/usuario/listar-todos
  listarTodos() {
    return this.usuarioService.listarTodos();
  }

  @Get('buscar-por-id/:id') //localhost:3000/usuario/buscar-por-id/{id}
  buscarPorId(@Param('id') id: string) {
    return this.usuarioService.buscarPorId(+id);
  }

  @Patch('atualizar/:id') //localhost:3000/usuario/atualizar/{id}
  atualizar(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.atualizar(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
