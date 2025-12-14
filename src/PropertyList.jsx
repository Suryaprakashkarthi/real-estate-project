import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {properties.map((property) => (
        <motion.div
          key={property._id} // ✅ Use property._id inside map
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{property.title}</h3>
          <p><b>Location:</b> {property.location}</p>
          <p><b>Price:</b> ₹{property.price}</p>
          <p><b>Type:</b> {property.type}</p>
          <p><b>Status:</b> {property.status}</p>

          <button
            onClick={() => navigate(`/book/${property._id}`)}
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
            Book Now
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default PropertyList;
