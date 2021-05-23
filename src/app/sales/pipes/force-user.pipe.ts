import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name	: 'forceuser'
})

export class ForceUserPipe implements PipeTransform {
	transform( argument : boolean )	: string {
		return ( argument ) ? 'si' : 'no';
	}
}
