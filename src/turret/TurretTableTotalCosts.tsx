import {TableCell, TableRow} from "@mui/material";
import React from "react";
import {TurretMaterial} from "./TurretBody";

const calculateOneCost = (turretMaterialList: TurretMaterial[], turretFabricationCost: number): number => {
        let totalCost: number = 0;

        turretMaterialList.forEach((material: TurretMaterial) => {
                totalCost = totalCost + material.unitCount * material.costPerUnit;
        });

        return (+totalCost + +turretFabricationCost);
}

// @ts-ignore
const TurretTableTotalCosts = (props: {turretMaterialList: TurretMaterial[], turretFabricationCost: number, turretMultiplier: number}) => {
        const costForOne: number = calculateOneCost(props.turretMaterialList, props.turretFabricationCost);
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>Total Cost to Build</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{costForOne} CR</TableCell>
            <TableCell>{costForOne * props.turretMultiplier} CR</TableCell>
        </TableRow>
    );
}

export default TurretTableTotalCosts;