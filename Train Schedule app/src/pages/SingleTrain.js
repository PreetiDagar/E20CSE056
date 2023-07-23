import React, { useEffect, useState } from 'react';
import { getSingleTrain } from '../api';

const SingleTrain = ({ accessToken, trainNumber }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch single train data here
    getSingleTrain(accessToken, trainNumber)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching single train data:', error);
      });
  }, [accessToken, trainNumber]);

  return (
    <div>
      <h2>Single Train</h2>
      {train ? (
        <div>
          <p>Train Name: {train.trainName}</p>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          <p>AC Seats Available: {train.seatsAvailable.AC}</p>
          <p>AC Price: {train.price.AC}</p>
          <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
          <p>Sleeper Price: {train.price.sleeper}</p>
          <p>Delay (in minutes): {train.delayedBy}</p>
        </div>
      ) : (
        <p>Loading train data...</p>
      )}
    </div>
  );
};

export default SingleTrain;


