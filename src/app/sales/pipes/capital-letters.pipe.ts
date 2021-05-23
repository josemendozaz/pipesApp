import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name	: 'capitalletters'
})

export class CapitalLettersPipe implements PipeTransform {
	transform( argument : string, inCapitalLetters : boolean = true )	: string {
		return ( inCapitalLetters ) ? argument.toUpperCase() : argument.toLowerCase();
	}
}

