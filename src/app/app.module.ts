/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms'

import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { Config } from './shared/config';
import { AuthGuard } from './shared/guards/auth.guard';

import { FileDropDirective } from './shared/directives/file-drop.directive';
import { UploadFormComponent } from './shared/components/upload-form/upload-form.component';

@NgModule({
  declarations: [ AppComponent, FileDropDirective, UploadFormComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: Config.apiUrl,
          token: {
            class: NbAuthJWTToken,
            key: 'token'
          },
          login: {
            endpoint: '/api/auth/login',
            method: 'post'
          },
          register: {
            endpoint: '/api/auth/register',
            method: 'post'
          }
        })
      ],
      forms: {}
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }
