import { Pipe, PipeTransform } from '@angular/core';
import { Character, Affiliation } from '../interfaces/characters.interfaces';

@Pipe({
	name	: 'affiliation'
})

export class AffiliationPipe implements PipeTransform {
	transform( argument : number )	: string {
		return Affiliation[ argument ];
	}
}
