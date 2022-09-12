// List of column names for Characters in the Users Component:
export const userTableCells = [
	'Character Name',
	'Game',
	'Created',
	'Last Change'
]

// DTA table types
const DTA = [
	'name',
	'strength',
	'tax',
	'routine',
	'difficult',
	'challenging',
	'fate',
	'persona',
	'deeds'
]
const skillsLearning = [
	'name',
	'',
	'',
	'routine',
	'',
	'',
	'fate',
	'persona',
	'deeds'
]
// SNDE table types
const ND = ['name', 'description']
const NDE = ['name', 'description', 'effect']
const SND = ['strength', 'name', 'description']
// Form specific types
const DTAForm = [
	'name',
	'shade',
	'exponent',
	'tax',
	'routine',
	'difficult',
	'challenging',
	'fate',
	'persona',
	'deeds'
]
const beliefs = ['name', 'description', 'action', 'isActive']
const SEND = ['shade', 'exponent', 'name', 'description']

// Lookup column/cell names by table type
export const characterTableCells = {
	stats: DTA,
	attributes: DTA,
	skills: DTA,
	skillsLearning: skillsLearning,
	beliefs: ND,
	instincts: ND,
	traits: NDE,
	relationships: SND,
	affiliations: SND,
	titles: SND,
	funds: SND,
	aliases: ND
}

export const characterFormCells = {
	stats: DTAForm,
	attributes: DTAForm,
	skills: DTAForm,
	skillsLearning: skillsLearning,
	beliefs: beliefs,
	instincts: ND,
	traits: NDE,
	relationships: SEND,
	affiliations: SEND,
	titles: SEND,
	funds: SEND,
	aliases: ND
}
