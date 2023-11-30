import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './styles.css';

const PageTask = () => {
    return (
        <div className="page">
            <h1 className="fade-in-fade-out">Manage Tasks</h1>
            <AddTask/>
            <ListTask/>
        </div>
    )
}

export default PageTask
