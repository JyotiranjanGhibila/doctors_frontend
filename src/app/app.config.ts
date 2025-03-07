import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
    importProvidersFrom(CommonModule),AppRoutingModule, RouterModule
  ]
};
