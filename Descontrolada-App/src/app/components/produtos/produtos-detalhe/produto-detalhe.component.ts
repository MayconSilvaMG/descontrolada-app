import { Produto } from './../../../models/Produtos';
import { Component, OnInit } from '@angular/core';
import { AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss'],
  providers: [DatePipe],
})
export class ProdutoDetalheComponent implements OnInit {
  produtoId: number;
  produto = {} as Produto;
  form: FormGroup;
  file: File;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService,
    private router: Router,
    private http: HttpClient
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      tema: [
        '',
        [
          Validators.required
        ],
      ],
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', [Validators.required]],
      quantidade: ['', Validators.required],
      tipo: ['', [Validators.required]]
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public return() {
    window.history.back();
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  saveProduct() {
    debugger;
    this.http.post('http://localhost:5000/v1/CreateProduct', this.produto).subscribe(
      data => {
        console.log('Produto criado:', data);
        this.router.navigate(['/lista-produtos']);
      },
      error => {
        console.error('Erro ao criar produto:', error);
      }
    );
  }

}
