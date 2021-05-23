import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { BasicsComponent } from './pages/basics/basics.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';

import { CapitalLettersPipe } from './pipes/capital-letters.pipe';
import { ForceUserPipe } from './pipes/force-user.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { AffiliationPipe } from './pipes/affiliation.pipe';

@NgModule({
	declarations: [
		//// COMPONENTS
		NumbersComponent,
		NotCommonsComponent,
		BasicsComponent,
		SortComponent,
		//// PIPES
		CapitalLettersPipe,
		ForceUserPipe,
  		SortDataPipe,
		AffiliationPipe
	],
	imports: [
		CommonModule,
		PrimeNgModule
	],
	exports: [
		BasicsComponent,
		NotCommonsComponent,
		NumbersComponent,
		SortComponent
	]
})

export class SalesModule { }
