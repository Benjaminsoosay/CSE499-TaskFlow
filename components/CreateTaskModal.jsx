import React, { useState } from 'react';
import axios from 'axios';

const CreateTaskModal = ({ isOpen, onClose, onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Assuming you save token here on login
            await axios.post('http://localhost:5000/api/tasks', 
                { title, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onTaskCreated(); // Refresh dashboard
            onClose();
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    return (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="modal-content" style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '400px' }}>
                <h2>Create New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Task Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit" style={{ background: 'blue', color: 'white', padding: '8px 16px' }}>Save Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskModal;