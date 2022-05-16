import { Component, OnInit } from '@angular/core';
import {OktaWidgetService} from '../shared/okta/okta-widget.service';
import {OktaConfigService} from '../shared/okta/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  smallScreen: boolean;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private OktaWidgetService:OktaWidgetService,
    private OktaConfigService:OktaConfigService,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
   }

   @HostListener('window:resize', ['$event'])
   onResize(event) {
     event.target.innerWidth;
     window.location.reload();
   }
  
  async ngOnInit() {
    await this.OktaWidgetService.CloseWidget();
    await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL,true);
  }

}
