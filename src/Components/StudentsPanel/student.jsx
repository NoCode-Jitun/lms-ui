import React, { useState } from "react";
import "./student.css";

const ExamForm = () => {
  return (
    <div className="exam-form">
      <h2>Enter Exam Details</h2>
      <form>
        <input type="text" placeholder="Enter Exam Name" />
        <input type="text" placeholder="Enter Subject Name" />
        <input type="text" placeholder="Enter Your Class" />
        <input type="text" placeholder="Enter Full Name" />
        <input type="text" placeholder="Enter School Name" />
        <input type="text" placeholder="Enter School ID" />
        <input type="datetime-local" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("My Dashboard");

  const menuItems = [
    "My Dashboard",
    "My Inbox",
    "Contact Admin",
    "My Exams",
    "Exam Reports",
    "Videos / Study Materials",
    "My Live Exams",
    "Live Exam Reports",
    "Question Bookmarks",
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">Access<span>MyExams</span>.com</div>
        <div className="top-bar">
          <div className="student-info">Student ID <strong>ST0065</strong> | Welcome To <strong>Kishore</strong></div>
          <button className="logout">Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        <aside className="student-menu">
          <h3>📋 Student Menu</h3>
          <ul>
            {menuItems.map((item) => (
              <li 
                key={item} 
                className={activePage === item ? "active" : ""} 
                onClick={() => setActivePage(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <main className="student-profile">
          {activePage === "My Exams" ? (
            <ExamForm />
          ) : (
            <div className="profile-card">
              <img className="avatar" src="https://cdn-icons-png.flaticon.com/512/7981/7981269.png" alt="Profile" />
              <h2>kishore <span className="student-id">(ST0065)</span></h2>
              <div className="stats">
                <div className="stat wallet">💰 0 Wallet Amount</div>
                <div className="stat inbox">📩 6 Inbox</div>
                <div className="stat exams">📑 28 Exams</div>
              </div>
              <button className="buy-packages">+ Access New Exams</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
