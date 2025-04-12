import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);  // Maintain the list of students
  const navigate = useNavigate();

  const handleAddStudent = (student) => {
    // Logic to add student (e.g., updating state or API call)
    setStudents([...students, student]);
    navigate('/student-list');  // Navigate to the student list after adding
  };

  const handleEditStudent = (updatedStudent) => {
    // Logic to update student (e.g., finding the student and updating)
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    navigate('/student-list');  // Navigate back to the student list after editing
  };

  return (
    <div>
      <h1>Student List</h1>
      <StudentForm onSubmit={handleAddStudent} />  {/* for adding a new student */}
      {/* Alternatively, you can pass `student` for editing if you have an existing student */}
    </div>
  );
};

export default StudentList;

