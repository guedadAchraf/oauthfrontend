import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthConfig, OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { provideHttpClient } from '@angular/common/http';
import {AppComponent} from "./app/app.component";
import {appConfig} from "./app/app.config";
import {bootstrapApplication} from "@angular/platform-browser";

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8180/realms/sso-realm',
  //tokenEndpoint: 'http://localhost:8180/realms/sso-realm/protocol/openid-connect/token',
  redirectUri: window.location.origin,
  clientId: 'app-frondend',
  responseType: 'code',
  scope: 'openid profile',
  showDebugInformation: true,
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


