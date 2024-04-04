import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
function TeacherCourseNavigation({ courseName, courseId }){
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };

    return(
        <>
        <article className='side-nav'>
            <Nav variant="underline" className="flex-column teachernav">
                <Nav.Link className ="sidebar" eventKey="/viewCourseTeacher" onClick={() => routeChange(`/viewCourseTeacher?courseId=${encodeURIComponent(courseId)}&name=${encodeURIComponent(courseName)}`)}>View Course</Nav.Link>
                <Nav.Link className ="sidebar" eventKey="/teacherAssignment" onClick={() => routeChange(`/teacherAssignments?courseId=${encodeURIComponent(courseId)}&name=${encodeURIComponent(courseName)}`)}>Assignments</Nav.Link>
                <Nav.Link className ="sidebar" eventKey="">Quizzes</Nav.Link>
                <Nav.Link className ="sidebar" eventKey="/viewStudents" onClick={() => routeChange('/viewStudents')}>Students</Nav.Link>
            </Nav>
        </article>
        </>
    )
}
export default TeacherCourseNavigation;