import {Checkbox, Stack, TableBody, TableCell, TableRow, TextField} from "@mui/material";
import React from "react";
import {TurretMaterial} from "./TurretBody";

// @ts-ignore
const TurretTableCostCell = ({material, multiplier}) => {
    return (
        <Stack>
            <div>{material.unitCount * multiplier} units</div>
            <div>{material.unitCount * multiplier * material.costPerUnit} CR</div>
        </Stack>
    );
}

// @ts-ignore
const TurretTableMaterialBody = ({turretMaterialList, setTurretMaterialList, turretMultiplier}) => {
    return (
        <TableBody>
            {turretMaterialList.map((material: TurretMaterial, index: number) => (
                <TableRow>
                    <TableCell className="Turret-Table-Obtained-Column">
                        <Checkbox
                            key={`obtained-${index}`}
                            size="small"
                        />
                    </TableCell>
                    <TableCell className="Turret-Build-Table-Cell">
                        <TextField
                            key={`material-${index}`}
                            variant="outlined"
                            size="small"
                            color="primary"
                            focused
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const entries = [...turretMaterialList]
                                entries[index].name = event.target.value
                                setTurretMaterialList(entries)
                            }}
                        />
                    </TableCell>
                    <TableCell className="Turret-Build-Table-Cell">
                        <TextField
                            key={`quantity-${index}`}
                            variant="outlined"
                            size="small"
                            type="number"
                            color="primary"
                            focused
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const entries = [...turretMaterialList]
                                entries[index].unitCount = event.target.value
                                setTurretMaterialList(entries)
                            }}
                        />
                    </TableCell>
                    <TableCell className="Turret-Build-Table-Cell">
                        <TextField
                            key={`cost-${index}`}
                            variant="outlined"
                            size="small"
                            type="number"
                            color="primary"
                            focused
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const entries = [...turretMaterialList]
                                entries[index].costPerUnit = event.target.value
                                setTurretMaterialList(entries)
                            }}
                        />
                    </TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={1}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={turretMultiplier}/></TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TurretTableMaterialBody;