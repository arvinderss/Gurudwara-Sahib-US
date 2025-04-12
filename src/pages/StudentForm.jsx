import { useState } from 'react';

const StudentForm = ({ student = null, onSubmit }) => {
  const [name, setName] = useState(student ? student.name : '');
  const [feeStatus, setFeeStatus] = useState(student ? student.feeStatus : 'Unpaid');
  const [attendanceStatus, setAttendanceStatus] = useState(student ? student.attendanceStatus : 'Absent');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, feeStatus, attendanceStatus });
  };

  return (
    <div>
      <h2>{student ? 'Edit' : 'Add'} Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fee Status</label>
          <select
            value={feeStatus}
            onChange={(e) => setFeeStatus(e.target.value)}
            required
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <div>
          <label>Attendance Status</label>
          <select
            value={attendanceStatus}
            onChange={(e) => setAttendanceStatus(e.target.value)}
            required
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">{student ? 'Update' : 'Add'} Student</button>
      </form>
    </div>
  );
};

export default StudentForm;

