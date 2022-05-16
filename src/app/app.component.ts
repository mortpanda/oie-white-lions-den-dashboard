import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'okta-japan-template-v5-primeui';

  constructor(
    private primengConfig: PrimeNGConfig,
    
  ){}

  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
