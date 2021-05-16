/*
 * imports
 */
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { interval } from 'rxjs';
/*
 * Component
 */
@Component({
	selector	: 'app-not-commons',
	templateUrl	: './not-commons.component.html',
	styleUrls	: ['./not-commons.component.css'],
	providers	: [MessageService]
})
/*
 * class
 */
export class NotCommonsComponent implements OnInit {
	/*
	 * constructor
	 */
	// tslint:disable-next-line: max-line-length
	constructor( private messageService: MessageService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig ) { }
	/*
	 * i18nSelect
	 */
	name	: string	= 'jose';
	gender	: string	= 'male';
	invitationMap		= {
		male	: 'invitarlo',
		female	: 'invitarla',
	};
	person				= {
		name	: 'José Mendoza',
		age		: 28,
		address	: 'Los Teques, Venezuela'
	};
	object 				= {
		foo		: 'bar',
		baz		: 'qux',
		nested	: {
			xyz		: 3,
			numbers	: [ 1, 2, 3, 4, 5 ]
		}
	};
	characters			= [
		{
			name		: 'Obi-Wan Kenobi',
			affiliation	: 'Orden Jedi',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Anakin Skywalker',
			affiliation	: 'Orden Jedi',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Yoda',
			affiliation	: 'Orden Jedi',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Rex',
			affiliation	: 'Soldado Clon',
			ability		: 'Doble Blasters',
			weapon		: 'Doble Blasters'
		},
		{
			name		: 'Ahsoka Tano',
			affiliation	: 'Orden Jedi',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Droide B1',
			affiliation	: 'Separatista',
			ability		: 'Blasters - Multiples Droides',
			weapon		: 'Blasters',
		},
		{
			name		: 'Droide Destructor',
			affiliation	: 'Separatista',
			ability		: 'Doble Cañones bláster y Escudos',
			weapon		: 'Doble Cañones bláster',
		},
		{
			name		: 'Assaj Ventres',
			affiliation	: 'Separatista - Asesina Sith',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber',
		},
		{
			name		: 'Cody',
			affiliation	: 'Soldado Clon',
			ability		: 'Blaster - JetPack',
			weapon		: 'Blaster'
		},
		{
			name		: 'Conde Doku',
			affiliation	: 'Separatista - Sith',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Darth Sidius',
			affiliation	: 'Separatista - Sith',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
		{
			name		: 'Darth Maul',
			affiliation	: 'Alba Escalarta - Antes Lord Sith',
			ability		: 'El poder de "La Fuerza"',
			weapon		: 'Lightsaber'
		},
	];
	/*
	 * i18nPlural
	 */
	clients					: string[]	= ['Maria', 'Pedro', 'Juan', 'Roberto', 'Kenobi', 'Maul', 'Skywalker'];
	clientsMap							= {
		'=0'	: 'no tenemos ningún cliente esperando.',
		'=1'	: 'tenemos un cliente esperando.',
		other	: `tenemos # clientes esperando.`
	};
	showRemoveClientButton	: boolean	= true;
	/*
	 * Async Pipe
	 */
	myObservable	= interval(1000); // 0,1,2,3,4,5,6,7...
	valuePromise	= new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve( 'Tenemos Data de Promesa' );
		}, 5000 );
	});
	/*
	 * ngOnInit
	 */
	ngOnInit(): void {
  	}
	/*
	 * Cambia el nombre de un cliente alternandolo con otro mediante el genero.
	 */
	changeClient()	: void {
		this.gender		= ( this.gender === 'male' ) ? 'female'	: 'male';
		this.name	= ( this.gender === 'male' ) ? 'José Mendoza' : 'Susana Perez';
	}
	/*
	 * Elimina el nombre de un cliente del arreglo "clients"
	 */
	removeClient()	: void {
		if ( this.clients.length <= 0 ) { return; }
		this.confirmationService.confirm({
			message	: '¿Está Seguro que desea eliminar un cliente?',
			header	: 'Confirmación',
			icon	: 'pi pi-exclamation-triangle',
			accept	: () => {
				this.clients.pop();
				this.messageService.add({severity: 'success', summary: 'Success', detail: 'Se ha eliminado el cliente'});
				this.showRemoveClientButton	= ( this.clients.length === 0 ) ? false : true;
			},
			reject: () => {
				this.messageService.add({severity: 'info', summary: 'Info', detail: 'Has declinado en la acción de eliminar un cliente'});
			}
		});
	}
}
