import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  exports: [PagesComponent, HomeComponent],
  imports: [
    // NbThemeModule.forRoot({ name: 'dark' }),
    CommonModule,


    NbLayoutModule,
    // NbSidebarModule,
    // NbButtonModule,
    // NbEvaIconsModule,
    AppRoutingModule,
    RouterModule,

    NbSidebarModule.forRoot(), //if this is your app.module
    // NbButtonModule,
  ],
})
export class PagesModule {}
