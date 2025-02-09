export type Component = {
    name: string,
    soldBy: string[],
    boughtBy: string[],
    dangerous: boolean,
    illegal: boolean
}

export const COMPONENT_LIST:Component[] = [
    {name: "Acid", soldBy: ["Chemical Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Adhesive", soldBy: ["Chemical Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Aluminum", soldBy: ["Aluminum Mine", "Turret Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Ammunition", soldBy: ["Ammunition Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Ammunition L / Ammo L", soldBy: ["Ammunition S Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Ammunition M / Ammo M", soldBy: ["Ammunition S Factory", "Turret Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Ammunition S / Ammo S", soldBy: ["Ammunition S Factory", "Turret Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Antigrav Generator", soldBy: ["Antigrav Generator Factory"], boughtBy: [], dangerous: false, illegal: false},
    {name: "Antigrav Units", soldBy: ["Antigrav Unit Factory"], boughtBy: [], dangerous: false, illegal: false},
    // {name: "", soldBy: [], boughtBy: [], dangerous: false, illegal: false},
];