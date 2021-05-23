import { Component, OnInit } from '@angular/core';
import { Affiliation, Character } from '../../interfaces/characters.interfaces';

@Component({
	selector	: 'app-sort',
	templateUrl	: './sort.component.html',
	styleUrls	: ['./sort.component.css']
})

export class SortComponent implements OnInit {

	inCapitalLetters			: boolean		= true;
	inCapitalLettersButtonClass	: string		= 'pi pi-chevron-down';
	orderBy						: string		= 'name';
	orderByAsc					: boolean		= false;

	characters					: Character[]	= [
		{
			name		: 'Obi-Wan Kenobi',
			affiliation	: Affiliation['Orden Jedi'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Anakin Skywalker',
			affiliation	: Affiliation['Orden Jedi'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Yoda',
			affiliation	: Affiliation['Orden Jedi'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Rex',
			affiliation	: Affiliation['Soldado Clon'],
			ability		: 'Doble Blasters',
			weapon		: 'Doble Blasters',
			forceUser	: false
		},
		{
			name		: 'Ahsoka Tano',
			affiliation	: Affiliation['Orden Jedi'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Droide B1',
			affiliation	: Affiliation.Separatista,
			ability		: 'Blasters - Multiples Droides',
			weapon		: 'Blasters',
			forceUser	: false
		},
		{
			name		: 'Droide Destructor',
			affiliation	: Affiliation.Separatista,
			ability		: 'Doble Cañones bláster y Escudos',
			weapon		: 'Doble Cañones bláster',
			forceUser	: false
		},
		{
			name		: 'Assaj Ventres',
			affiliation	: Affiliation['Separatista - Asesina Sith'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Cody',
			affiliation	: Affiliation['Soldado Clon'],
			ability		: 'Blaster - JetPack',
			weapon		: 'Blaster',
			forceUser	: false
		},
		{
			name		: 'Conde Doku',
			affiliation	: Affiliation['Separatista - Sith'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Darth Sidius',
			affiliation	: Affiliation['Separatista - Sith'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
		{
			name		: 'Darth Maul',
			affiliation	: Affiliation['Alba Escalarta - Antes Lord Sith'],
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
			forceUser	: true
		},
	];
	constructor() { }

	ngOnInit(): void {
	}

	toggleInCapitalLetters()			: void {
		this.inCapitalLetters				= ( this.inCapitalLetters ) ? false : true;
		this.inCapitalLettersButtonClass	= ( this.inCapitalLetters ) ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
	}

	toggleOrderBy( orderBy: string )	: void {
		switch ( orderBy ) {
			case 'name'			:
				this.orderBy	= orderBy;
				this.orderByAsc	= ( this.orderByAsc === true ) ? false : true;
				break;
			case 'useOfForce'	:
				this.orderBy	= orderBy;
				this.orderByAsc	= ( this.orderByAsc === true ) ? false : true;
				break;
			case 'skill'		:
				this.orderBy	= orderBy;
				this.orderByAsc	= ( this.orderByAsc === true ) ? false : true;
				break;
			default:
				this.orderBy	= this.orderBy;
				this.orderByAsc	= false;
				break;
		}
		console.log( orderBy );
	}

}
