import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaConfigService } from '../okta/okta-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  strDate: Date = new Date();
  strRepoURL;
  constructor(
    private OktaConfigService: OktaConfigService,
  ) {
    this.strRepoURL = this.OktaConfigService.strGitHubRepo;
  }

  ngOnInit(): void {
  }

}
