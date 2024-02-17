import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { AutoAnimateModule } from '@formkit/auto-animate/angular'
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';

registerLocaleData(localeEs, 'es');
export const appConfig: ApplicationConfig = {
  providers: [{provide: LOCALE_ID, useValue: 'es'} ,provideRouter(routes),  importProvidersFrom( HttpClientModule)]
};
