// server/routes/trains.js
// const express = require('express');
import express from 'express'
import axios from "axios"

const router = express.Router();

// Function to get the authentication token from the app.js server
const getToken = async () => {
    try {
      const response = await axios.post('http://localhost:3000/get-token'); // Adjust the URL if needed
      return response.data.token;
    } catch (error) {
      throw new Error('Unable to get token');
    }
  };

// Get train schedules within the next 12 hours
router.get('/schedules', async (req, res) => {
  console.log('hitting')    // OK
  try {
    const currentTime = new Date();
    const token = await getToken();
    
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const filteredTrains = response.data.filter(train => {
      const departureTime = new Date();
      departureTime.setHours(train.departureTime.Hours);
      departureTime.setMinutes(train.departureTime.Minutes);
      departureTime.setSeconds(train.departureTime.Seconds);
      const timeDifference = departureTime - currentTime;
      return timeDifference >= 0 && timeDifference <= 12 * 60 * 60 * 1000; // Within the next 12 hours
    });

    const sortedTrains = filteredTrains.sort((a, b) => {
      // Sorting based on price, seats available, and departure time
      if (a.price.AC === b.price.AC) {
        if (a.seatsAvailable.sleeper === b.seatsAvailable.sleeper) {
          return b.departureTime.Minutes - a.departureTime.Minutes;
        }
        return a.seatsAvailable.sleeper - b.seatsAvailable.sleeper;
      }
      return a.price.AC - b.price.AC;

      // Have to check
    });

    res.json(sortedTrains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router  //_