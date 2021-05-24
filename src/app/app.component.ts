import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'DadosFeras';
  teste;
  constructor(private translate: TranslateService) {}

  ngOnInit(){
  // this.translate.use('en')
  this.translate.setDefaultLang('en');
  this.teste = this.translate.currentLang
  console.log(this.teste)
  }
}
