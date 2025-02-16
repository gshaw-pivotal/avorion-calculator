import React, {useRef, useState} from "react";
import {
    Box,
    Table,
    TableContainer,
} from "@mui/material";
import TurretTableMaterialHeader from "./TurretTableMaterialHeader";
import TurretTableMaterialBody from "./TurretTableMaterialBody";
import TurretTableButtons from "./TurretTableButtons";
import TurretTableFabrication from "./TurretTableFabrication";
import TurretTableTotalCosts from "./TurretTableTotalCosts";
import TurretStatCard from "./TurretStatCard";

export type TurretMaterial = {
    name: string;
    costPerUnit: number;
    unitCount: number;
    location: string;
}

export default function TurretBody() {

    const [turretMaterialList, setTurretMaterialList] = useState<TurretMaterial[]>([]);
    const [turretFabricationCost, setTurretFabricationCost] = useState<number>(0);
    const [turretMultiplier, setTurretMultiplier] = useState<number>(2);

    const statCardChildRef = useRef();

    const resetTurretMaterials = () => {
        setTurretMaterialList([]);
        setTurretFabricationCost(0)
        setTurretMultiplier(2)
        // @ts-ignore
        statCardChildRef.current.resetStatCard()
    }

    const addNewTurretMaterial = () => {
        setTurretMaterialList([...turretMaterialList, {name: "", costPerUnit: 0, unitCount: 0, location: ""}])
    }

    const removeLastTurretMaterial = () => {
        setTurretMaterialList(turretMaterialList.slice(0, turretMaterialList.length - 1));
    }

    return (
        <div className="Turret-View-Layout">
            <div>
                <TurretTableButtons resetTurretMaterials={resetTurretMaterials} addNewTurretMaterial={addNewTurretMaterial} removeLastTurretMaterial={removeLastTurretMaterial}/>
                <Box sx={{border: 1}}>
                    <TableContainer>
                        <Table>
                            <TurretTableMaterialHeader turretMultiplier={turretMultiplier} setTurretMultiplier={setTurretMultiplier}/>
                            <TurretTableMaterialBody turretMaterialList={turretMaterialList} setTurretMaterialList={setTurretMaterialList} turretMultiplier={turretMultiplier}/>
                            <TurretTableFabrication turretFabricationCost={turretFabricationCost} setTurretFabricationCost={setTurretFabricationCost} turretMultiplier={turretMultiplier}/>
                            <TurretTableTotalCosts turretMaterialList={turretMaterialList} turretFabricationCost={turretFabricationCost} turretMultiplier={turretMultiplier}/>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
            <div>
                <TurretStatCard ref={statCardChildRef}/>
            </div>
        </div>
    );
}
