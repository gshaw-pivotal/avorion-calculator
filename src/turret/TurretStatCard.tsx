import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Box, Table, TableBody, TableCell, TableRow, TextField} from "@mui/material";

// @ts-ignore
const TurretStatCard = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        resetStatCard: () => resetStatCard()
    }));

    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [dps, setDps] = useState("");
    const [firerate, setFirerate] = useState("");
    const [range, setRange] = useState("");
    const [slots, setSlots] = useState("");
    const [other, setOther] = useState("");

    const resetStatCard = () => {
        setLocation("");
        setName("");
        setLevel("");
        setDps("");
        setFirerate("");
        setRange("");
        setSlots("");
        setOther("");
    }

    return (
        <div className="Turret-Stat-Card">
            <Box sx={{border: 1}}>
                <div className="Turret-Stat-Card-Title-Spacer"/>
                <span>Turret Stat Card</span>
                <div>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="Turret-Stat-Card-Field-Column">Factory Sector Co-ords</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-location`}
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setLocation(event.target.value)
                                        }}
                                        value={location}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell className="Turret-Stat-Card-Info-Column">
                                    <TextField
                                        key={`stat-name`}
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        color="secondary"
                                        focused
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
                                        variant="outlined"
                                        size="small"
                                        multiline
                                        rows={3}
                                        color="secondary"
                                        focused
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
});

export default TurretStatCard;