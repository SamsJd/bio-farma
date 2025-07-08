import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from './../services/categoria.service';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('/categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }
}
