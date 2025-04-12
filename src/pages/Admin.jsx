import { Link, useNavigate } from 'react-router-dom';
import StudentList from './StudentList';

const Admin = () => {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate('/student-form'); // Navigates to Add Student Form
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You can manage student data here.</p>
      <div>
        <h2>Manage Students</h2>
        <Link to="/student-list">
          <button>View Students</button>
        </Link>
        <button onClick={handleAddStudent}>Add New Student</button>
      </div>
      <div>
        <h2>Attendance Management</h2>
        <button>View Attendance</button>
        <button>Mark Attendance</button>
      </div>
      <div>
        <h2>Fee Management</h2>
        <button>View Fees</button>
        <button>Send Fee Reminders</button>
      </div>
    </div>
  );
};

export default Admin;

