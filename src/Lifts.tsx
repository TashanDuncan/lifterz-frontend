import React, { useEffect, useState } from "react";
export interface Lift {
  id: number;
  exercise: string;
}
const Lifts = () => {
  const [lifts, setLifts] = useState([]);
  useEffect(() => {
    fetchLifts();
  }, []);

  const fetchLifts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/lifts");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setLifts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <h1>Lifts</h1>
      <ul>
        {lifts.map((lift: Lift) => (
          <li key={lift.id}>{lift.exercise}</li>
        ))}
      </ul>
    </div>
  )
};

export default Lifts;
