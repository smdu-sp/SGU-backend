import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateServidorDto } from './dto/create-servidor.dto';
import { UpdateServidorDto } from './dto/update-servidor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UtilsService } from 'src/utils/utils.service';
import IPaginado from 'src/interfaces/ipaginado';

@Injectable()
export class ServidorService {
  constructor(
    private prisma: PrismaService,
    private utils: UtilsService
  ) { }
  create(createServidorDto: CreateServidorDto) {
    return 'This action adds a new servidor';
  }

  async findAll(limite: number, pagina: number, busca: string): Promise<IPaginado> {
    const total = await this.prisma.servidores.count();
    limite = limite > 0 ? (limite > total ? total : limite) : 10;
    pagina = pagina > 0 ? this.utils.verificaPagina(pagina, limite, total) : 1;
    const servidores = await this.prisma.servidores.findMany({
      where: {
        nome: {
          contains: busca
        }
      },
      skip: (pagina-1)*limite, 
      take: limite
    });
    if (!servidores) throw new ForbiddenException("Erro ao buscar servidores!");
    return {
      data: servidores,
      total,
      pagina,
      limite
    };
  }

  findOne(id: string) {''
    return `This action returns a #${id} servidor`;''
  }

  update(id: string, updateServidorDto: UpdateServidorDto) {
    return `This action updates a #${id} servidor`;
  }

  remove(id: string) {
    return `This action removes a #${id} servidor`;
  }
}
