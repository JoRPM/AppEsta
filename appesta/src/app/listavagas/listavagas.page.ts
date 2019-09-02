import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/vagas.model';
import { VagasService } from '../service/vagas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listavagas',
  templateUrl: './listavagas.page.html',
  styleUrls: ['./listavagas.page.scss'],
})
export class ListavagasPage implements OnInit {

  private vagas : Vagas[];

  constructor(private vagasService:VagasService) { }
  private router: Router;
  ngOnInit() {

    this.listaVaga();
  }

    listaVaga() {
      this.vagasService.getVagas().subscribe(
        vagaDB => this.vagas = vagaDB,
        erroDB => console.log(erroDB)
      )
    }

    deleteVaga(id){
      this.vagasService.deleteVaga(id).subscribe();
  
        window.location.reload();
    }

    atualizaVaga(id: number) {
      this.router.navigateByUrl(`/listavaga`)
      }

}
