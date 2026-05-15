import { useEffect, useState } from "react";

const cardStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const result = {
        voltage: 220,
        current: 5,
        power: 1100,
        energy: 12,
      };

      setData(result);
    } catch (err) {
      setError("Could not load data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Energy Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Voltage</h3>
          <p>{data.voltage} V</p>
        </div>

        <div style={cardStyle}>
          <h3>Current</h3>
          <p>{data.current} A</p>
        </div>

        <div style={cardStyle}>
          <h3>Power</h3>
          <p>{data.power} W</p>
        </div>

        <div style={cardStyle}>
          <h3>Energy</h3>
          <p>{data.energy} kWh</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;