import React, {useState} from "react";
import {
    Table,
    TableContainer,
} from "@mui/material";
import TurretTableMaterialHeader from "./TurretTableMaterialHeader";
import TurretTableMaterialBody from "./TurretTableMaterialBody";
import TurretTableButtons from "./TurretTableButtons";
import TurretTableFabrication from "./TurretTableFabrication";
import TurretTableTotalCosts from "./TurretTableTotalCosts";

export type TurretMaterial = {
    name: string;
    costPerUnit: number;
    unitCount: number;
}

export default function TurretBody() {

    const [turretMaterialList, setTurretMaterialList] = useState<TurretMaterial[]>([]);
    const [turretFabricationCost, setTurretFabricationCost] = useState<number>(0);

    const resetTurretMaterials = () => {
        setTurretMaterialList([]);
    }

    const addNewTurretMaterial = () => {
        setTurretMaterialList([...turretMaterialList, {name: "", costPerUnit: 0, unitCount: 0}])
    }

    const removeLastTurretMaterial = () => {
        setTurretMaterialList(turretMaterialList.slice(0, turretMaterialList.length - 1));
    }

    return (
        <div>
            <TurretTableButtons resetTurretMaterials={resetTurretMaterials} addNewTurretMaterial={addNewTurretMaterial} removeLastTurretMaterial={removeLastTurretMaterial}/>
            <TableContainer>
                <Table>
                    <TurretTableMaterialHeader/>
                    <TurretTableMaterialBody turretMaterialList={turretMaterialList} setTurretMaterialList={setTurretMaterialList}/>
                    <TurretTableFabrication turretFabricationCost={turretFabricationCost} setTurretFabricationCost={setTurretFabricationCost}/>
                    <TurretTableTotalCosts turretMaterialList={turretMaterialList} turretFabricationCost={turretFabricationCost}/>
                </Table>
            </TableContainer>
        </div>
    );
}
