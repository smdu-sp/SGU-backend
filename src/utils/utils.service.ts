import { Injectable } from '@nestjs/common';
 
@Injectable()
export class UtilsService {
  constructor() {}

  verificaPagina(pagina: number, limite: number, total: number) {
    return (pagina - 1) * limite < total ? pagina : this.verificaPagina(pagina - 1, limite, total); 
  }
}