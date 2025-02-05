import {TableCell, TableHead, TableRow, TextField} from "@mui/material";
import React from "react";

// @ts-ignore
const TurretTableMaterialHeader = ({turretMultiplier, setTurretMultiplier}) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell className="Turret-Table-Obtained-Column">Obtained</TableCell>
                <TableCell className="Turret-Table-Material-Column">Material</TableCell>
                <TableCell className="Turret-Table-Qty-Column">Qty per Turret</TableCell>
                <TableCell className="Turret-Table-Cost-Column">Cost per Unit</TableCell>
                <TableCell className="Turret-Table-Calculated-Column">x1</TableCell>
                <TableCell className="Turret-Table-Calculated-Column">
                    <div>
                    <TextField
                        key={`multiplier`}
                        variant="filled"
                        size="small"
                        type="number"
                        value={turretMultiplier}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTurretMultiplier(event.target.value)
                        }}
                    />
                    </div>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TurretTableMaterialHeader;