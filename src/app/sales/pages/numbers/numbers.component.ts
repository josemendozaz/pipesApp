import { Component, OnInit } from '@angular/core';

@Component({
	selector	: 'app-numbers',
	templateUrl	: './numbers.component.html',
	styleUrls	: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

	netSales	:	number	= 2567789.5567;
	percentage	:	number	= 0.485689;

	constructor() { }

	ngOnInit(): void {
	}

}
