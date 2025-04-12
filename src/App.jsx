import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';  // Ensure this is the correct path
import StudentForm from './pages/StudentForm';  // Ensure this is the correct path
import Admin from './pages/Admin';  // Add if you have an admin page
// Import any other components you might have

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the main route for the student list */}
        <Route path="/" element={<StudentList />} />

        {/* Route for adding a new student */}
        <Route path="/add-student" element={<StudentForm />} />

        {/* Route for editing an existing student (you might pass an ID or student data) */}
        <Route path="/edit-student/:id" element={<StudentForm />} />

        {/* Admin route for managing students (if applicable) */}
        <Route path="/admin" element={<Admin />} />

        {/* You can add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

