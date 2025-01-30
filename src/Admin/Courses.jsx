import React from 'react'
import './Admin.css'

const Courses = () => {
  return (
    <div className="main-container">
    <div className="main-title">
      <h3>ADD NEW COURSE</h3>
    </div>

    <div className="form-add exams">
      <form action="">

        <div className="addBox">
          New Course Name:{" "}
          <input type="text" placeholder="Course Name" required />
        </div>
        <div className="submitButton">
            <button className="submit1">Add</button>
            </div>
        </form>
        </div>
        <br />
        <br/>
        <div className="main-title">
        <h2>List of Exams Created</h2>
      </div>
      <div className="listExams">
        <table>
            <tr>
                
                <th>Course Name</th>
                <th>No. of Students Enrolled</th>
            </tr>
            <tr>
             
                <td>Course 1</td>
                <td>19</td>
            </tr>

            <tr>
                
                <td>Course 2</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Course 3</td>
                <td>9</td>
            </tr>
            <tr>
               
                <td>Course 5</td>
                <td>9</td>
            </tr>
            <tr>
               
                <td>Course 12</td>
                <td>190</td>
            </tr>
            <tr>
                
                <td>Course 22</td>
                <td>119</td>
            </tr>
            <tr>
                
                <td>Course 8</td>
                <td>33</td>
            </tr>
        </table>
      </div>


        </div>
  )
}

export default Courses
