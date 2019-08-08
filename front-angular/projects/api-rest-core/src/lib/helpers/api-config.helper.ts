
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ApiConfigHelper {

  constructor(@Inject('env') private env) {
  }

  public ANGULAR_HOST =  this.env.hasOwnProperty('angularHost') ? this.env.angularHost : 'http://localhost:4200';
  public HOST = this.env.hasOwnProperty('backendHost') ? this.env.backendHost : 'http://localhost/demo_angular_laravel/demo-laravel/public/';
  public API = this.env.hasOwnProperty('apiPrefix') ? this.env.apiPrefix : 'api/';
  public VERSION = 'v1/';
  public IMAGE_FOLDER = this.HOST + 'img/';
  public STORAGE_IMAGE_FOLDER = this.HOST + 'storage/';
  public FILE_FOLDER = this.HOST + 'file/';

  public PROJECT_NAME = this.env.hasOwnProperty('projectName') ? this.env.projectName : '';


  public getAPIURL(): string {
    return this.HOST + this.API + this.VERSION;
  }
  public getURL(): string {
    return this.HOST;
  }
  /*
   Translation
   */
  public getTranslationURL(lang): string {
    return this.getAPIURL() + 'translation/' + lang;
  }


  public buildURL(model: string, id: any = null, abstract: boolean = false, option: string = null, bulk = false) {
    let url = model;
    if (bulk) {
      url = url + '/bulk';
    }
    if (id) {
      url = url + '/' + id;
    }
    if (abstract) {
      url = 'abstract/' + url;
    }
    if (option) {
      if (option === 'select') {
        url = url + '/filter';
      }
    }
    return this.getAPIURL() + url;
  }
}
