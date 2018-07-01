import { Component, OnInit } from '@angular/core';
import { DeputadosService } from '../services/deputados.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  deputados: any = [];

  constructor(private deputadosService: DeputadosService) {

  }

  ngOnInit() {
    this.getDeputados();
  }

  getDeputados() {
    this.deputadosService.getDeputados().subscribe(dados => this.deputados = dados['dados']);
  }

}
