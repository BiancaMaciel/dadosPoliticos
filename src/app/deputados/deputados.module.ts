import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeputadosService } from '../services/deputados.service';
import { DeputadosComponent } from './deputados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DeputadosService]
})
export class DeputadosModule { }
