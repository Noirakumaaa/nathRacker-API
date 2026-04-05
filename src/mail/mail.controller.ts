import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service.js';

class SendMailDto {
  to: string;
  subject: string;
  html: string;
}

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async send(@Body() dto: SendMailDto) {
    await this.mailService.sendMail(dto.to, dto.subject, dto.html);
    return { message: 'Email sent successfully' };
  }
}
