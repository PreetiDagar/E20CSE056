import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const AllTrains = ({ accessToken }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains data here
    getAllTrains(accessToken)
      .then((response) => {
        // Sort trains according to the specified criteria
        const sortedTrains = response.data.sort((a, b) => {
          // Sort by ascending order of price
          if (a.price.AC > b.price.AC) return 1;
          if (a.price.AC < b.price.AC) return -1;

          // Sort by descending order of tickets
          if (a.seatsAvailable.AC < b.seatsAvailable.AC) return 1;
          if (a.seatsAvailable.AC > b.seatsAvailable.AC) return -1;

          // Sort by descending order of departure time
          const aDepartureTime = new Date(
            0,
            0,
            0,
            a.departureTime.Hours,
            a.departureTime.Minutes,
            a.departureTime.Seconds
          ).getTime();
          const bDepartureTime = new Date(
            0,
            0,
            0,
            b.departureTime.Hours,
            b.departureTime.Minutes,
            b.departureTime.Seconds
          ).getTime();
          return bDepartureTime - aDepartureTime;
        });

        setTrains(sortedTrains);
      })
      .catch((error) => {
        console.error('Error fetching trains data:', error);
      });
  }, [accessToken]);

  return (
    <div>
      <h2>All Trains</h2>
      {/* Render the trains data here */}
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            <p>Train Name: {train.trainName}</p>
            <p>Train Number: {train.trainNumber}</p>
            <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
            <p>AC Seats Available: {train.seatsAvailable.AC}</p>
            <p>AC Price: {train.price.AC}</p>
            <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
            <p>Sleeper Price: {train.price.sleeper}</p>
            <p>Delay (in minutes): {train.delayedBy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;



