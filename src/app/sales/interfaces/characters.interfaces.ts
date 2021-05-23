
export enum Affiliation {
	'Orden Jedi',
	'Soldado Clon',
	'Separatista',
	'Separatista - Asesina Sith',
	'Separatista - Sith',
	'Alba Escalarta - Antes Lord Sith'
}

export interface Character {
	name		: string;
	affiliation	: Affiliation;
	ability		: string;
	weapon		: string;
	forceUser	: boolean;
}
