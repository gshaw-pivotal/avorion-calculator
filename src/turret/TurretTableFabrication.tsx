import {TableCell, TableRow, TextField} from "@mui/material";
import React from "react";

// @ts-ignore
const TurretTableFabrication = ({turretFabricationCost, setTurretFabricationCost, turretMultiplier}) => {
    return (
        <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Fabrication Cost</TableCell>
            <TableCell></TableCell>
            <TableCell>
                <TextField
                    key={`fabrication-cost`}
                    variant="outlined"
                    size="small"
                    type="number"
                    color="primary"
                    focused
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTurretFabricationCost(event.target.value)
                    }}
                    value={turretFabricationCost}
                />
            </TableCell>
            <TableCell>{turretFabricationCost * 1} CR</TableCell>
            <TableCell>{turretFabricationCost * turretMultiplier} CR</TableCell>
        </TableRow>
    );
}

export default TurretTableFabrication;