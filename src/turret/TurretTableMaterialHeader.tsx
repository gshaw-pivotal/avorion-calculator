import {TableCell, TableHead, TableRow} from "@mui/material";
import React from "react";

const TurretTableMaterialHeader = () => {
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

export default TurretTableMaterialHeader;