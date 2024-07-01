import { Injectable } from '@nestjs/common';
import axiosInstance from '../../axios/config';
const key: string = '9b146a7e6ebb3fad746f9f80ed0f087f';
@Injectable()
export class ImageService {
  constructor() {}

  async upload(file: Express.Multer.File) {
    const formdata: FormData = new FormData();
    formdata.append('image', new Blob([Buffer.from(file.buffer)]));
    formdata.append('key', key);
    formdata.append('name', 'nombre');
    const response = await axiosInstance.post('/upload', formdata);
    return response.data;
  }
}