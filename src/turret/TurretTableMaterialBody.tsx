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
const TurretTableMaterialBody = ({turretMaterialList, setTurretMaterialList}) => {
    return (
        <TableBody>
            {turretMaterialList.map((material: TurretMaterial, index: number) => (
                <TableRow>
                    <TableCell>
                        <Checkbox
                            key={`obtained-${index}`}
                            size="small"
                        />
                    </TableCell>
                    <TableCell className="Turret-Build-Table-Cell">
                        <TextField
                            key={`material-${index}`}
                            variant="filled"
                            size="small"
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
                            variant="filled"
                            size="small"
                            type="number"
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
                            variant="filled"
                            size="small"
                            type="number"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const entries = [...turretMaterialList]
                                entries[index].costPerUnit = event.target.value
                                setTurretMaterialList(entries)
                            }}
                        />
                    </TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={1}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={2}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={4}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={6}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={8}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={10}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={12}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={14}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={16}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={18}/></TableCell>
                    <TableCell><TurretTableCostCell material={material} multiplier={20}/></TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TurretTableMaterialBody;