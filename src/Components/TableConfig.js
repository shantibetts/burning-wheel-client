// List of column names for Characters in the Users Component:
const userTableHeadCells = [
	{
		id: 'characterName',
		align: 'left',
		label: 'Character Name'
	},
	{
		id: 'game',
		align: 'left',
		label: 'Game'
	},
	{
		id: 'created',
		align: 'left',
		label: 'Created'
	},
	{
		id: 'lastChange',
		align: 'left',
		label: 'Last Change'
	}
]

// List of column names for Die, Test and Artha tables:
const dieTestArthaCells = [
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

const skillsLearningCells = [
	{
		id: 'icon',
		align: 'left',
		label: ''
	},
	{
		id: 'name',
		align: 'left',
		label: 'Name'
	},
	{
		id: 'none',
		align: 'left',
		label: 'none'
	},
	{
		id: 'none',
		align: 'left',
		label: 'none'
	},
	{
		id: 'none',
		align: 'left',
		label: 'none'
	},
	{
		id: 'routine',
		align: 'left',
		label: 'R'
	},
	{
		id: 'none',
		align: 'left',
		label: 'none'
	},
	{
		id: 'none',
		align: 'left',
		label: 'none'
	},
	{
		id: 'fate',
		align: 'left',
		label: 'F'
	},
	{
		id: 'persona',
		align: 'left',
		label: 'P'
	},
	{
		id: 'deeds',
		align: 'left',
		label: 'D'
	}
]

// List of column names for Strength, Name, Description, Effect tables:
const SNDETableCells = () => [
	{
		id: 'strength',
		align: 'left',
		label: 'Strength'
	},
	{
		id: 'name',
		align: 'left',
		label: 'Name'
	},
	{
		id: 'description',
		align: 'left',
		label: 'Description'
	},
	{
		id: 'effect',
		align: 'left',
		label: 'Effect'
	}
]

// SNDE table types
const ND = ['name', 'description']
const NDE = ['name', 'description', 'effect']
const SND = ['strength', 'name', 'description']

const SNDETableTypes = {
	beliefs: ND,
	instincts: ND,
	traits: NDE,
	relationships: SND,
	affiliations: SND,
	titles: SND,
	funds: SND,
	aliases: ND
}

export {
	userTableHeadCells,
	dieTestArthaCells,
	skillsLearningCells,
	SNDETableCells,
	SNDETableTypes
}
