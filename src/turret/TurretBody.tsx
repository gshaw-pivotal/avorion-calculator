import React, {useEffect, useState} from "react";
import {
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";

type TurretMaterial = {
    name: string;
    costPerUnit: number;
    unitCount: number;
}

const TableMaterialHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Cost per Unit</TableCell>
                <TableCell>x1</TableCell>
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
        </TableHead>
    );
}

// @ts-ignore
const TableMaterialBody = ({turretMaterialList, setTurretMaterialList}) => {
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

export default function TurretBody() {

    const [turretMaterialList, setTurretMaterialList] = useState<TurretMaterial[]>([]);

    useEffect(() => {
        console.log("(US)RowCount: " + turretMaterialList.length)
    },[turretMaterialList]);

    const resetTurretMaterials = () => {
        setTurretMaterialList([]);
    }

    const addNewTurretMaterial = () => {
        setTurretMaterialList([...turretMaterialList, {name: "", costPerUnit: 0, unitCount: 0}])
    }

    const removeLastTurretMaterial = () => {
        setTurretMaterialList(turretMaterialList.slice(0, turretMaterialList.length - 1));
    }

    const TurretButtonsRow: React.FC = () => {
        return (
            <>
                <div className="Turret-Buttons">
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            onClick={() => resetTurretMaterials()}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => addNewTurretMaterial()}
                        >
                            Add (+)
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => removeLastTurretMaterial()}
                        >
                            Minus (-)
                        </Button>
                    </Stack>
                </div>
            </>
        );
    }

    return (
        <div>
            <TurretButtonsRow/>
            <TableContainer>
                <Table>
                    <TableMaterialHeader/>
                    <TableMaterialBody turretMaterialList={turretMaterialList} setTurretMaterialList={setTurretMaterialList}/>
                </Table>
            </TableContainer>
        </div>
    );
}
