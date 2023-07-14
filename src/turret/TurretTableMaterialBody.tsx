import {TableBody, TableCell, TableRow, TextField} from "@mui/material";
import React from "react";
import {TurretMaterial} from "./TurretBody";

// @ts-ignore
const TurretTableMaterialBody = ({turretMaterialList, setTurretMaterialList}) => {
    return (
        <TableBody>
            {turretMaterialList.map((material: TurretMaterial, index: number) => (
                <TableRow>
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
                    <TableCell>{material.unitCount} / {material.unitCount * material.costPerUnit}</TableCell>
                    <TableCell>x2</TableCell>
                    <TableCell>x4</TableCell>
                    <TableCell>x6</TableCell>
                    <TableCell>x8</TableCell>
                    <TableCell>x10</TableCell>
                    <TableCell>x12</TableCell>
                    <TableCell>x14</TableCell>
                    <TableCell>x16</TableCell>
                    <TableCell>x18</TableCell>
                    <TableCell>x20</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TurretTableMaterialBody;