import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, ConfirmationService } from 'primeng/api';

@Component({
	selector	: 'app-root',
	templateUrl	: './app.component.html',
	styleUrls	: ['./app.component.css'],
	providers	: [ConfirmationService]
})
export class AppComponent implements OnInit {
	constructor( private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig ) {
	}
	ngOnInit(): void {
		this.primengConfig.ripple	= true;
	}
}
