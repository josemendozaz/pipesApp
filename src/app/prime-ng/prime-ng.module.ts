import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from 'primeng/toast';

// import { MenuItem } from 'primeng/api';


@NgModule({
	// declarations	: [],
	// imports			: [
	// 	// CommonModule,
	// 	ButtonModule,
	// 	CardModule
	// ],
	exports	: [
		ButtonModule,
		CardModule,
		MenubarModule,
		FieldsetModule,
		ConfirmDialogModule,
		MessagesModule,
		ToastModule
		// MenuItem
	]
})
export class PrimeNgModule { }
