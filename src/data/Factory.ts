export type Factory = {
    id: number,
    name: string,
    inputs: Map<string, number>,
    outputs: Map<string, number>
}

export const STEEL_TUBE_FACTORY:Factory = {id: 1, name: 'Steel Tube Factory', inputs: new Map([['Aluminium', 2], ['Steel', 4]]), outputs: new Map([['Steel Tube', 2]])}
export const STEEL_FACTORY_SCRAP:Factory = {id: 2, name: 'Steel Factory (Scrap)', inputs: new Map([['Scrap Metal', 12], ['Coal', 4]]), outputs: new Map([['Steel', 6]])}
export const SCRAP_METAL_TRADER:Factory = {id: 3, name: 'Scrap Metal Trader', inputs: new Map(), outputs: new Map([['Scrap Metal', 60]])}
export const ALUMINIUM_MINE:Factory = {id: 4, name: 'Aluminium Mine', inputs: new Map(), outputs: new Map([['Aluminium', 10]])}
export const COAL_MINE:Factory = {id: 5, name: 'Coal Mine', inputs: new Map(), outputs: new Map([['Coal', 4]])};