import { Injectable } from '@nestjs/common';
import { CreateDocuDto } from './dto/create-docu.dto';
import { UpdateDocuDto } from './dto/update-docu.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Injectable()
export class DocuService {
  constructor(private prisma: PrismaService) {}
  async employeeDocs(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.documentsWhereUniqueInput;
    where?: Prisma.documentsWhereInput;
    orderBy?: Prisma.documentsOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.documents.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async emplooyeeDoc(
    where: Prisma.documentsWhereUniqueInput
   ) {
    return this.prisma.documents.findUnique({
      where,
    });
  }
  async create(data: CreateDocuDto) {
    return this.prisma.documents.create({ data: {
      document_name: data.document_name,
      file_link: data.file_link,
      doc_gov_id: data.doc_gov_id,
      status: data.status,
      employee: {
        connect: {
          empId: data.emp_id,
        },
      },
    } });
  }

  findAll() {
    return `This action returns all docu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docu`;
  }

  update(id: number, updateDocuDto: UpdateDocuDto) {
    return `This action updates a #${id} docu`;
  }

  remove(id: number) {
    return `This action removes a #${id} docu`;
  }
}
