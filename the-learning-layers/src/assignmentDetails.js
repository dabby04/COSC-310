import { React, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './App.css'; // Update this to your stylesheet
import StudentMenu from './StudentMenu';
function AssignmentDetails() {

  const navigate = useNavigate();

  const { assignmentId } = useParams();
  const location = useLocation();

  // Extracting query parameters
  const queryParams = new URLSearchParams(location.search);
  const courseName = queryParams.get('name');
  const courseId = queryParams.get('courseId');
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    // Fetch the assignment details from the server
    const fetchAssignmentDetails = async () => {
      const response = await fetch(`http://localhost:4000/user/assignments/${assignmentId}`);
      const data = await response.json();
      setAssignment(data);
    }
    fetchAssignmentDetails();
  }, []);


  // Simulate a function to navigate to the submission page
  const goToSubmissionPage = () => {
    navigate({
      pathname: '/SubmitAssignment',
      search: `?name=${courseName}&courseId=${courseId}&assignmentId=${assignmentId}`
    });
  };

  // Dummy data for assignment details
  const assignmentDetails = {
    title: "M5: Final report and delivery",
    dueDate: "Friday by 11:59 p.m.",
    points: 13,
    submitting: "a file upload",
    description: `For your final submission, you will need to produce a video walk-through and overview of your project as well as complete a report detailing the following items. Please make it clear in your responses which item you are addressing.\n\nVideo Walkthrough (10%)\n\nFor your final deliverable, you will need to produce a short video overview of your product, walking through the features implemented...`
    // ... include the rest of your assignment text here
  };

  return (
    <>
      <StudentMenu></StudentMenu>
      <div className="assignment-detail">
        <header className="assignment-header">
          <h1>{assignment.name}</h1>
          <button className="start-assignment" onClick={goToSubmissionPage}>Start Assignment</button>
        </header>
        <div className="assignment-meta">
          <span>Due: {assignment.dueDate}</span>
          <span>Weight: {assignment.weight}</span>
          <span>Submitting: A file upload</span>

        </div>
        <article className="assignment-description">
          {assignment.description}
        </article>
        <span>
          Additional file: <a href={`http://localhost:4000/files/${assignment.filepath}`} download>
            {assignment.filepath && assignment.filepath.split('/').pop()}
          </a>
        </span>

      </div>
    </>
  );
}

export default AssignmentDetails;
