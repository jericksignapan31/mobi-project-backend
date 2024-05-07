import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class EncryptionService {
  public async hashText(toEncrypt: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(toEncrypt, saltOrRounds);
    return hash;
  }
}
