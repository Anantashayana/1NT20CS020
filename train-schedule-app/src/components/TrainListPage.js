import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TrainListPage = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/train/schedules')
            .then(response => response.json())
            .then(data => {
                setTrains(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                All Trains
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Train Name</TableCell>
                            <TableCell>Train Number</TableCell>
                            <TableCell>Departure Time</TableCell>
                            {/* Add more table headers here */
                            ///
                            ///
                            ///
                            
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trains.map((train) => (
                            <TableRow key={train.trainNumber}>
                                <TableCell>
                                    <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
                                </TableCell>
                                <TableCell>{train.trainNumber}</TableCell>
                                <TableCell>{train.departureTime.Hours}:{train.departureTime.Minutes}</TableCell>
                                {
                                
                                
                                /* Adding more table cells if time is there */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TrainListPage;
