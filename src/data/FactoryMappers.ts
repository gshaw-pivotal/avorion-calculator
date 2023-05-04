import {
    ALUMINIUM_MINE,
    COAL_MINE,
    Factory,
    SCRAP_METAL_TRADER,
    STEEL_FACTORY_SCRAP,
    STEEL_TUBE_FACTORY
} from "./Factory";

export const factoryList = ():Factory[] => {
    return Factories;
}

export const factoryMapByOutputs = ():Map<String, Factory[]> => {
    return OutputMap;
}

export const factoryListForOutput = (output: string):Factory[] => {
  return OutputMap.has(output) ? OutputMap.get(output)! : [];
};

const Factories: Factory[] = [
    STEEL_TUBE_FACTORY, STEEL_FACTORY_SCRAP, SCRAP_METAL_TRADER, ALUMINIUM_MINE, COAL_MINE
];

const OutputMap: Map<string, Factory[]> = new Map([
    ['Coal', [COAL_MINE]],
    ['Aluminium', [ALUMINIUM_MINE]],
    ['Scrap Metal', [SCRAP_METAL_TRADER]],
    ['Steel', [STEEL_FACTORY_SCRAP]],
    ['Steel Tube', [STEEL_TUBE_FACTORY]]
]);