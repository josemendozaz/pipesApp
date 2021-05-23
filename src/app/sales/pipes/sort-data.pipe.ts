import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interfaces';

@Pipe({
	name: 'sortData'
})

export class SortDataPipe implements PipeTransform {

	transform( characters: Character[], orderby: string = 'worthless', orderAsc: boolean = false ): Character[] {

		switch ( orderby ) {
			case 'name'			:
				characters	= characters.sort( (a, b) => orderAsc ? ( ( a.name > b.name ) ? 1 : -1 ) : ( ( a.name < b.name ) ? 1 : -1 ) );
				break;
			case 'useOfForce'	:
				// tslint:disable-next-line: max-line-length
				characters	= characters.sort( (a, b) => orderAsc ? ( ( a.forceUser > b.forceUser ) ? 1 : -1 ) : ( ( a.forceUser < b.forceUser ) ? 1 : -1 ) );
				break;
			case 'skill'		:
				characters	= characters.sort( (a, b) => orderAsc ? ( ( a.ability > b.ability ) ? 1 : -1 ) : ( ( a.ability < b.ability ) ? 1 : -1 ) );
				break;
			default:
				characters	= characters;
				break;
		}
		return characters;

	}

}
