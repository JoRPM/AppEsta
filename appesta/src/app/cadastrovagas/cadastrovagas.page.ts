import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VagasService } from '../service/vagas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vagas } from '../models/vagas.model';

@Component({
  selector: 'app-cadastrovagas',
  templateUrl: './cadastrovagas.page.html',
  styleUrls: ['./cadastrovagas.page.scss'],
})
export class CadastrovagasPage implements OnInit {
  
  formVaga: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private VagasService: VagasService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void{

    this.formVaga = this.formBuilder.group({
      
      id: ['',[

      ]],
      
      numberticket:["",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]
    ],
    numbervaga:["",[
      Validators.required,
      Validators.maxLength(3)
    ]
  ],

    placa:["",[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]
    ],

    valorpago:["",[
      Validators.required
    ]
  ],
    entrada:["",[
    Validators.required
    ]
  ],

    saida:["",[
    Validators.required
    ]
  ],

    
    });

    this.route.paramMap.subscribe(params => {
      const vagaID =+ params.get('id');
      if(vagaID) {
        this.getVaga(vagaID);
      }
      });
  }


  adcvaga(){

    const novaVaga = this.formVaga.getRawValue() as Vagas;
    if(novaVaga.id) {
      this.VagasService.updateVaga(novaVaga)
      .subscribe(
        () => this.router.navigateByUrl('/listavagas'),
        error =>{
          console.log(error);
          this.formVaga.reset();
        }
      );
    } else {
      this.VagasService.addVaga(novaVaga)
      .subscribe(
        () => this.router.navigateByUrl('/listavagas'),
        error =>{
          console.log(error);
          this.formVaga.reset();
        }
      );
    }
  }

  resetar(){
    this.formVaga.reset();
  }

  getVaga(id:number) {
    this.VagasService.getVaga(id).subscribe(
      (vagaDB: Vagas) => this.editVaga(vagaDB),
      errorDB => console.log(errorDB)
    );
  }

  editVaga(vagas: Vagas){
    this.formVaga.patchValue({
      numberticket: vagas.numberticket,
      numbervaga: vagas.numbervaga,
      placa: vagas.placa,
      valorpago: vagas.valorpago,
      entrada: vagas.entrada,
      saida: vagas.saida,
      id: vagas.id
    });
  }


}
