import React, { useState } from 'react';
import axios from 'axios';
import './exam.css';

const BACKEND_API_URL = 'https://augmentatech.in/api';

const Exam = () => {
    const [formData, setFormData] = useState({
        school_id: '',
        name: '',
        start_time: '',
        end_time: '',
        questions: [{ id: '', marks: '' }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuestionChange = (index, e) => {
        const { name, value } = e.target;
        const newQuestions = [...formData.questions];
        newQuestions[index][name] = value;
        setFormData({ ...formData, questions: newQuestions });
    };

    const addQuestionField = () => {
        setFormData({
            ...formData,
            questions: [...formData.questions, { id: '', marks: '' }],
        });
    };

    const removeQuestionField = (index) => {
        const newQuestions = formData.questions.filter((_, i) => i !== index);
        setFormData({ ...formData, questions: newQuestions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // token
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Authentication error: Please log in again.");
            return;
        }

        try {
            const response = await axios.post(
                `${BACKEND_API_URL}/exams/create`, 
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            alert('Exam created successfully!');
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Session expired. Please log in again.");
                
            } else {
                alert('Failed to create exam. Please check the fields.');
            }
            console.error(error);
        }
    };

    return (
        <div className="create-exam-container">
            <h1>Create Exam</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>School ID</label>
                    <input
                        type="number"
                        name="school_id"
                        value={formData.school_id}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Exam Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Start Time</label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        value={formData.start_time}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>End Time</label>
                    <input
                        type="datetime-local"
                        name="end_time"
                        value={formData.end_time}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="questions-section">
                    <h3>Questions</h3>
                    {formData.questions.map((question, index) => (
                        <div key={index} className="question-group">
                            <div className="form-group">
                                <label>Question ID</label>
                                <input
                                    type="number"
                                    name="id"
                                    value={question.id}
                                    onChange={(e) => handleQuestionChange(index, e)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Marks</label>
                                <input
                                    type="number"
                                    name="marks"
                                    value={question.marks}
                                    onChange={(e) => handleQuestionChange(index, e)}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="remove-question-btn"
                                onClick={() => removeQuestionField(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="add-question-btn"
                        onClick={addQuestionField}
                    >
                        Add Question
                    </button>
                </div>

                <button type="submit" className="submit-btn">
                    Create Exam
                </button>
            </form>
        </div>
    );
};

export default Exam;
