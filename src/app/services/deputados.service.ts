import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app-settings';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeputadosService {

  private url: string = AppSettings.API_ENDPOINT + '/deputados';

  constructor(private http: HttpClient) {

  }

  getDeputados() {
    return this.http.get(this.url);
  }

}
