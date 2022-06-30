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
	// 	{
	// 		id: 'name',
	// 		align: 'left',
	// 		label: 'Name'
	// 	},
	// 	{
	// 		id: 'shade',
	// 		align: 'left',
	// 		label: 'Shade'
	// 	},
	// 	{
	// 		id: 'exponent',
	// 		align: 'left',
	// 		label: 'Exponent'
	// 	},
	// 	{
	// 		id: 'tax',
	// 		align: 'left',
	// 		label: 'Tax'
	// 	},
	// 	{
	// 		id: 'routine',
	// 		align: 'left',
	// 		label: 'Routine'
	// 	},
	// 	{
	// 		id: 'difficult',
	// 		align: 'left',
	// 		label: 'Difficult'
	// 	},
	// 	{
	// 		id: 'challenging',
	// 		align: 'left',
	// 		label: 'Challenging'
	// 	},
	// 	{
	// 		id: 'fate',
	// 		align: 'left',
	// 		label: 'Fate'
	// 	},
	// 	{
	// 		id: 'persona',
	// 		align: 'left',
	// 		label: 'Persona'
	// 	},
	// 	{
	// 		id: 'deeds',
	// 		align: 'left',
	// 		label: 'Deeds'
	// 	}
	// ]

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
		id: 'shade',
		align: 'left',
		label: 'S'
	},
	{
		id: 'exponent',
		align: 'left',
		label: 'E'
	},
	{
		id: 'tax',
		align: 'left',
		label: 'T'
	},
	{
		id: 'routine',
		align: 'left',
		label: 'R'
	},
	{
		id: 'difficult',
		align: 'left',
		label: 'D'
	},
	{
		id: 'challenging',
		align: 'left',
		label: 'C'
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

// List of column names for Strength, Name, Description, CallOn tables:
const SNDCTableCells = () => [
	{
		id: 'icon',
		align: 'left',
		label: ''
	},
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
		id: 'callOn',
		align: 'left',
		label: 'Call On'
	}
]

export {
	userTableHeadCells,
	dieTestArthaCells,
	skillsLearningCells,
	SNDCTableCells
}
