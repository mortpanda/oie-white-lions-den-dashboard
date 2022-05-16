import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuListService } from '../menu-items/menu-list.service';
import { PrimeIcons } from 'primeng/api';
import { OktaConfigService } from '../okta/okta-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  smallScreen: boolean;
  ItemsMenu = [];
  SmallMenu = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private breakpointObserver: BreakpointObserver,
    private OktaConfigService: OktaConfigService,
    private MenuListService: MenuListService,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });

    this.ItemsMenu = this.MenuListService.ItemsMenu;
    this.SmallMenu = this.MenuListService.SmallMenu;

  }

  //   this.MenuItems = [
  //     // {
  //     //   label: 'Facebook',
  //     //   icon: "pi pi-fw pi-facebook"
  //     // },
  //     // {
  //     //   label: 'LinkedIn',
  //     //   icon: "pi pi-fw pi-linkedin"
  //     // },
  //     // {
  //     //   label: 'Youtube',
  //     //   icon: "pi pi-fw pi-youtube"
  //     // },
  //     // {
  //     //   label: 'Twitter',
  //     //   icon: "pi pi-fw pi-twitter"
  //     // },
  //     {
  //       label: 'ホーム',
  //       icon: "pi pi-fw pi-home"
  //     },
  //     {
  //       label: 'ログオフ',
  //       icon: 'pi pi-fw pi-sign-out'
  //     }
  //   ];


  // }
  // dockItems: MenuItem[];
  // MenuItems: MenuItem[];

  ngOnInit() {

  }

  async GoTo(strURL) {
    switch (strURL) {
      case 'home': {
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
        break;
      }
      case 'logout': {
        // NEED TO PUT LOGOUT HERE
        break;
      }
      default: {
        window.open(strURL, '_blank');
        break;
      }
    }
  }

}
