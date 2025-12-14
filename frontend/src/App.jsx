import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyList from "./PropertyList";
import Book from "./Book";
import Admin from "./Admin";
import AdminBookings from "./AdminBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
