import { useState } from "react";
import { motion } from "framer-motion";

function Admin() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("Available");
  const [message, setMessage] = useState("");

  const handleAddProperty = async () => {
    const token = localStorage.getItem("token"); // Admin login token

    const res = await fetch("http://localhost:5000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        location,
        price,
        type,
        status,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Admin Dashboard</h2>

        <input
          placeholder="Property Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Type (House/Land)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        >
          <option value="Available">Available</option>
          <option value="Sold">Sold</option>
        </select>

        <button
          onClick={handleAddProperty}
          style={{
            padding: "10px",
            width: "100%",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Property
        </button>

        {message && <p style={{ marginTop: "15px" }}>{message}</p>}

        <a
          href="/admin/bookings"
          style={{ display: "block", marginTop: "20px", color: "blue" }}
        >
          View All Bookings
        </a>
      </motion.div>
    </div>
  );
}

export default Admin;
