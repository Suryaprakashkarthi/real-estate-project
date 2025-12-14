import { useEffect, useState } from "react";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/book", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>All Bookings</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Property ID</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{b.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{b.phone}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{b.propertyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBookings;
