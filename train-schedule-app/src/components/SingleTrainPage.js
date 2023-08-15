import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const SingleTrainPage = () => {
    const { trainNumber } = useParams();
    const [train, setTrain] = useState(null);



    // Not yet done
    useEffect(() => {
        fetch(`http://localhost:3000/train/schedules/${trainNumber}`)
            .then(response => response.json())
            .then(data => {
                setTrain(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [trainNumber]);

    if (!train) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Train Details
            </Typography>
            {/* Display train details here */}
        { /*TODO*/}
            
        </Container>
    );
};

export default SingleTrainPage;
