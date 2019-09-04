import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VagasService } from '../service/vagas.service';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void{

    this.formVaga = this.formBuilder.group({
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

    
    })
  }


  adcvaga(){

    const novaVaga = this.formVaga.getRawValue() as Vagas;
    console.log(novaVaga)
    this.VagasService.addVaga(novaVaga)
    .subscribe(
      () => this.router.navigateByUrl(''),
    )
    
    error =>{
      console.log(error);
      this.formVaga.reset();
    }
  }

  resetar(){
    this.formVaga.reset();
  }
}
