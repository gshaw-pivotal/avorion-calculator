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
const TurretTableTotalCosts = (props: {turretMaterialList: TurretMaterial[], turretFabricationCost: number}) => {
        const costForOne: number = calculateOneCost(props.turretMaterialList, props.turretFabricationCost);
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>Total Cost to Build</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{costForOne} CR</TableCell>
            <TableCell>{costForOne * 2} CR</TableCell>
            <TableCell>{costForOne * 4} CR</TableCell>
            <TableCell>{costForOne * 6} CR</TableCell>
            <TableCell>{costForOne * 8} CR</TableCell>
            <TableCell>{costForOne * 10} CR</TableCell>
            <TableCell>{costForOne * 12} CR</TableCell>
            <TableCell>{costForOne * 14} CR</TableCell>
            <TableCell>{costForOne * 16} CR</TableCell>
            <TableCell>{costForOne * 18} CR</TableCell>
            <TableCell>{costForOne * 20} CR</TableCell>
        </TableRow>
    );
}

export default TurretTableTotalCosts;