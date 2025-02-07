import React, {useState} from "react";
import {Box, Table, TableBody, TableCell, TableRow, TextField} from "@mui/material";

// @ts-ignore
const TurretStatCard = () => {

    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [dps, setDps] = useState("");
    const [firerate, setFirerate] = useState("");
    const [range, setRange] = useState("");
    const [slots, setSlots] = useState("");
    const [other, setOther] = useState("");

    return (
        <div className="Turret-Stat-Card">
            <Box sx={{border: 1}}>
                <div className="Turret-Stat-Card-Title-Spacer"/>
                <span>Turret Stat Card</span>
                <div>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="Turret-Stat-Card-Field-Column">Name</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-name`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setName(event.target.value)
                                        }}
                                        value={name}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Level</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-level`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setLevel(event.target.value)
                                        }}
                                        value={level}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>DPS</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-dps`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setDps(event.target.value)
                                        }}
                                        value={dps}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Fire Rate</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-firerate`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setFirerate(event.target.value)
                                        }}
                                        value={firerate}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Range</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-range`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setRange(event.target.value)
                                        }}
                                        value={range}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Slots</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-slots`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setSlots(event.target.value)
                                        }}
                                        value={slots}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Other</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-other`}
                                        variant="filled"
                                        size="small"
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setOther(event.target.value)
                                        }}
                                        value={other}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Box>
        </div>
    );
}

export default TurretStatCard;