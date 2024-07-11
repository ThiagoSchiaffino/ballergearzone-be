import {
    Controller,
    HttpStatus,
    ParseFilePipeBuilder,
    Post,
    Req,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ImageService } from '../services/image.service';
  
  @Controller('/images')
  export class ImagesController {
    constructor(private imageService: ImageService) {}
  
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@Req() request,
      @UploadedFile(
        new ParseFilePipeBuilder()
          .addFileTypeValidator({
            fileType: /(jpg|jpeg|png|gif)$/,
          })
          .addMaxSizeValidator({
            maxSize: 1024000,
            message: 'La imagen no puede superar el 1 MB',
          })
          .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
      )
      file: Express.Multer.File,
    ) {
      return await this.imageService.upload(file, request.user);
    }
  }