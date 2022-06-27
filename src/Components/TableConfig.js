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
const dieTestArthaTableHeadCells = [
	{
		id: 'shade',
		align: 'left',
		label: 'Shade'
	},
	{
		id: 'exponent',
		align: 'left',
		label: 'Exponent'
	},
	{
		id: 'tax',
		align: 'left',
		label: 'Tax'
	},
	{
		id: 'routine',
		align: 'left',
		label: 'Routine'
	},
	{
		id: 'difficult',
		align: 'left',
		label: 'Difficult'
	},
	{
		id: 'challenging',
		align: 'left',
		label: 'Challenging'
	},
	{
		id: 'fate',
		align: 'left',
		label: 'Fate'
	},
	{
		id: 'persona',
		align: 'left',
		label: 'Persona'
	},
	{
		id: 'deeds',
		align: 'left',
		label: 'Deeds'
	}
]

// List of column names for Strength, Name, Description tables:
const strengthNameDescTableHeadCells = [
	{
		id: 'shade',
		align: 'left',
		label: 'Shade'
	},
	{
		id: 'exponent',
		align: 'left',
		label: 'Exponent'
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
	}
]

// List of column names for Name, Description tables:
const nameDescTableHeadCells = [
	{
		id: 'name',
		align: 'left',
		label: 'Name'
	},
	{
		id: 'description',
		align: 'left',
		label: 'Description'
	}
]

export {
	userTableHeadCells,
	dieTestArthaTableHeadCells,
	strengthNameDescTableHeadCells,
	nameDescTableHeadCells
}
