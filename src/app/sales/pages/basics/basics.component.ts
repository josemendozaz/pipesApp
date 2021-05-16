import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

	lowerName	: string	= 'josé';
	upperName	: string	= 'JOSÉ';
	fullName	: string	= 'JOSÉ MENDOZA';

	date		: Date		= new Date(); //// Fecha Actual

	constructor() { }

	ngOnInit(): void {
	}

}
