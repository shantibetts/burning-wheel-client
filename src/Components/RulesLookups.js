// Tests required to advance stats (tBW p43)
export const statTests = {
	1: { routine: 0, difficult: 1, challenging: 1, logic: 'AND' },
	2: { routine: 0, difficult: 1, challenging: 1, logic: 'AND' },
	3: { routine: 0, difficult: 2, challenging: 1, logic: 'AND' },
	4: { routine: 0, difficult: 2, challenging: 1, logic: 'AND' },
	5: { routine: 0, difficult: 3, challenging: 1, logic: 'AND' },
	6: { routine: 0, difficult: 3, challenging: 2, logic: 'AND' },
	7: { routine: 0, difficult: 4, challenging: 2, logic: 'AND' },
	8: { routine: 0, difficult: 4, challenging: 3, logic: 'AND' },
	9: { routine: 0, difficult: 5, challenging: 3, logic: 'AND' }
}

// Tests required to advance skills (tBW p42)
export const skillTests = {
	1: { routine: 1, difficult: 1, challenging: 1, logic: 'OR' },
	2: { routine: 2, difficult: 1, challenging: 1, logic: 'OR' },
	3: { routine: 3, difficult: 2, challenging: 1, logic: 'OR' },
	4: { routine: 4, difficult: 2, challenging: 1, logic: 'OR' },
	5: { routine: 0, difficult: 3, challenging: 1, logic: 'AND' },
	6: { routine: 0, difficult: 3, challenging: 2, logic: 'AND' },
	7: { routine: 0, difficult: 4, challenging: 2, logic: 'AND' },
	8: { routine: 0, difficult: 4, challenging: 3, logic: 'AND' },
	9: { routine: 0, difficult: 5, challenging: 3, logic: 'AND' }
}

// Difficulty of Test by Dice Rolled (tBW p41)

export const difficultyByDiceRolled = (numDice, obstacle) => {
	if (obstacle === 1 && numDice === 1) {
		return 'PLAYER_CHOICE'
	}
	let spread = 1
	if (obstacle >= 4) {
		spread = 2
	}
	if (obstacle >= 7) {
		spread = 3
	}
	if (obstacle >= 7) {
		spread = 3
	}
	if (obstacle >= numDice + 1) {
		return 'CHALLENGING'
	}
	if (obstacle <= numDice && obstacle - spread >= numDice) {
		return 'DIFFICULT'
	}
	if (obstacle - spread > numDice) {
		return 'ROUTINE'
	}
}
