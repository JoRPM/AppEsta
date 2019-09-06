import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/vagas.model';
import { VagasService } from '../service/vagas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listavagas',
  templateUrl: './listavagas.page.html',
  styleUrls: ['./listavagas.page.scss'],
})
export class ListavagasPage{

  private vagas : Vagas[];

  constructor(private vagasService:VagasService, private router: Router) { }
  
  ionViewWillEnter() {

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

    editVaga(id: number) {
      this.router.navigate(['/edit', id]);
      }

}
