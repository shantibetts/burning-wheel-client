// List of column names for Characters in the Users Component:
export const userTableCells = [
	'Character Name',
	'Game',
	'Created',
	'Last Change'
]

// List of column names for Die, Test and Artha tables:
export const DTACells = [
	'Name',
	'Shade',
	'Exponent',
	'Tax',
	'Routine',
	'Difficult',
	'Challenging',
	'Fate',
	'Persona',
	'Deeds'
]
export const skillsLearningCells = [
	'Name',
	'',
	'',
	'',
	'Routine',
	'',
	'',
	'Fate',
	'Persona',
	'Deeds'
]

// SNDE table types
const ND = ['name', 'description']
const NDE = ['name', 'description', 'effect']
const SND = ['strength', 'name', 'description']

export const SNDETypes = {
	beliefs: ND,
	instincts: ND,
	traits: NDE,
	relationships: SND,
	affiliations: SND,
	titles: SND,
	funds: SND,
	aliases: ND
}
