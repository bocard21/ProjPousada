import React, { useState } from 'react';
import axios from 'axios';

const SensorDataForm = () => {
  const [sensorId, setSensorId] = useState(6);
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const myDate = now.toISOString().split('T')[0]; // yyyy-mm-dd
    const myTime = now.toTimeString().split(' ')[0]; // hh:mm:ss

    try {
      const response = await axios.post('http://localhost:3001/sensor-data', {
        sensorId,
        value: parseInt(value),
        date: myDate,
        time: myTime,
      });
      console.log('Data inserted successfully:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter sensor value"
        required
      />
      <button type="submit">Submit Data</button>
    </form>
  );
};

export default SensorDataForm;
