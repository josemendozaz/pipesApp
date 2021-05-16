import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { BasicsComponent } from './pages/basics/basics.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';

@NgModule({
	declarations: [
		NumbersComponent,
		NotCommonsComponent,
		BasicsComponent,
		SortComponent
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
