import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MenuModule} from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ImageModule} from 'primeng/image';
import {DockModule} from 'primeng/dock';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    ImageModule,
    DockModule,
    FlexLayoutModule,
    InputTextModule,
    TooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
