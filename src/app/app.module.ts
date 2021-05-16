import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { PrimeNgModule } from './prime-ng/prime-ng.module';

/* Personalizados */
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//// Cambia el local de la app de forma GLOBAL
import localEsVe from '@angular/common/locales/es-VE';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

//// Registra en la APP el uso de las variables de lenguajes locales
registerLocaleData( localEsVe );
registerLocaleData( localFr );

@NgModule({
	declarations	: [
		AppComponent
	],
	imports			: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRouterModule,
		// PrimeNgModule,
		SharedModule,
		SalesModule
	],
	providers		: [//// Cambia de forma Global el lenguaje
		{
			provide		: LOCALE_ID,
			useValue	: 'es-VE'
		}
	],
  	bootstrap		: [AppComponent]
})
export class AppModule { }
