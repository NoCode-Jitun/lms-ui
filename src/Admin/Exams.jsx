import React from "react";
import "./Admin.css";
import { useState } from "react";

const Exams = () => {
  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  //handleUpload *BACKEND*

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>ADD NEW EXAM</h3>
      </div>

      <div className="form-add exams">
        <form action="">
          <div className="addBox">
            Exam Name: <input type="text" placeholder="Exam Name" required />
          </div>

          <div className="addBox">
            Course Name:{" "}
            <input type="text" placeholder="Course Name" required />
          </div>

          <div className="uploadBox">
            Upload Questions:
            <input type="file" name="file" onChange={handleFile} />
            <button className="up2">Upload</button>
          </div>
            <div className="submitButton">
            <button className="submit1">Add</button>
            </div>
          
        </form>
      </div>
        <br />
        <br />
      <div className="main-title">
        <h2>List of Exams Created</h2>
      </div>
      <div className="listExams">
        <table>
            <tr>
                <th>Name of the Exam</th>
                <th>Course</th>
                <th>No. of Students Enrolled</th>
            </tr>
            <tr>
                <td>Examination 1</td>
                <td>Course 1</td>
                <td>19</td>
            </tr>

            <tr>
                <td>Examination 2</td>
                <td>Course 2</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Examination 3</td>
                <td>Course 3</td>
                <td>9</td>
            </tr>
            <tr>
                <td>Examination 15</td>
                <td>Course 5</td>
                <td>9</td>
            </tr>
            <tr>
                <td>Examination 11</td>
                <td>Course 12</td>
                <td>190</td>
            </tr>
            <tr>
                <td>Examination 10</td>
                <td>Course 22</td>
                <td>119</td>
            </tr>
            <tr>
                <td>Examination 177</td>
                <td>Course 8</td>
                <td>33</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Exams;
