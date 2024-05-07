import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { DocuService } from './docu.service';
import { CreateDocuDto } from './dto/create-docu.dto';
import { UpdateDocuDto } from './dto/update-docu.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('docu')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Document Module')
export class DocuController {
  constructor(private readonly docuService: DocuService) {}

  @Post()
  async create(@Body() createDocuDto: CreateDocuDto) {
    const isDocuExist = await this.docuService.employeeDocs({
      where:{
        document_name: createDocuDto.document_name,
      }
    })
    if (isDocuExist.length > 0) {
      throw new BadRequestException({
        message: "Document already exists",
      })
    };
    return this.docuService.create(createDocuDto);
  }

  @Get()
  findAll() {
    return this.docuService.employeeDocs({});
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.docuService.employeeDocs({where: {emp_id: id}})
  }


  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateDocuDto: UpdateDocuDto) {
    return this.docuService.update(+id, updateDocuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docuService.remove(+id);
  }
}
