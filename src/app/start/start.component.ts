import { Component, OnInit } from '@angular/core';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import { OktaWidgetService } from '../shared/okta/okta-widget.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;
  strSafeSite: SafeResourceUrl;
  strSite='https://kent-nagao-oie.oktapreview.com/app/UserHome?iframe=true&iframeControlHideAll=true&iframeControlHideSearch=true';
  constructor(
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
    public OktaWidgetService: OktaWidgetService,
    private sanitizer: DomSanitizer,
  ) { }

  async ngOnInit() {
    
    this.strUserSession = await this.authService.isAuthenticated();
    console.log(this.strUserSession)
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true:
        this.strThisUser = await this.authService.token.getUserInfo()
          .then(function (user) {
            return user
          })
          .catch((err) => {
            console.log(err);
            window.location.replace(this.OktaConfigService.strPostLogoutURL);
           })
           this.strFullName = this.strThisUser.name;
           this.strSafeSite = this.sanitizer.bypassSecurityTrustResourceUrl(this.strSite);
        break;
    }
    console.log(this.strThisUser)

  }

}
