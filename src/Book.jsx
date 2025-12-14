import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Book() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    const res = await fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        propertyId: id,
        name,
        phone,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "30px", border: "1px solid #ccc", borderRadius: "10px" }}
      >
        <h2>Book Property</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />

        <button
          onClick={handleBooking}
          style={{
            padding: "10px",
            width: "100%",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>

        {message && <p style={{ marginTop: "15px" }}>{message}</p>}
      </motion.div>
    </div>
  );
}

export default Book;
