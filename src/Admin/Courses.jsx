import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';
const BACKEND_API_URL = 'https://augmentatech.in/api';

const AddSubject = () => {
    const [formData, setFormData] = useState({
        school_id: '',
        name: '',
        status: 1, // Default status is 1 (active)
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_API_URL}/subjects`, formData);
            alert('Subject added successfully!');
            console.log(response.data);
            // Reset form after successful submission
            setFormData({
                school_id: '',
                name: '',
                status: 1,
            });
        } catch (error) {
            alert('Failed to add subject. Please check the fields.');
            console.error(error);
        }
    };

    return (
        <div className="add-subject-container">
            <h1>Add Subject</h1>
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
                    <label>Subject Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    Add Subject
                </button>
            </form>
        </div>
    );
};

export default AddSubject;