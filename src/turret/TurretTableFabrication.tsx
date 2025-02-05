import {TableCell, TableRow, TextField} from "@mui/material";
import React from "react";

// @ts-ignore
const TurretTableFabrication = ({turretFabricationCost, setTurretFabricationCost}) => {
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell>Fabrication Cost</TableCell>
            <TableCell></TableCell>
            <TableCell>
                <TextField
                    key={`fabrication-cost`}
                    variant="filled"
                    size="small"
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTurretFabricationCost(event.target.value)
                    }}
                />
            </TableCell>
            <TableCell>{turretFabricationCost * 1} CR</TableCell>
            <TableCell>{turretFabricationCost * 2} CR</TableCell>
            <TableCell>{turretFabricationCost * 4} CR</TableCell>
            <TableCell>{turretFabricationCost * 6} CR</TableCell>
            <TableCell>{turretFabricationCost * 8} CR</TableCell>
            <TableCell>{turretFabricationCost * 10} CR</TableCell>
            <TableCell>{turretFabricationCost * 12} CR</TableCell>
            <TableCell>{turretFabricationCost * 14} CR</TableCell>
            <TableCell>{turretFabricationCost * 16} CR</TableCell>
            <TableCell>{turretFabricationCost * 18} CR</TableCell>
            <TableCell>{turretFabricationCost * 20} CR</TableCell>
        </TableRow>
    );
}

export default TurretTableFabrication;