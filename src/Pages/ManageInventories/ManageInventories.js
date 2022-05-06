import React from 'react';
import { Link } from 'react-router-dom';
import './ManageInventories.css'

const ManageInventories = () => {
    return (
        <div>
            <h2>manage inventories</h2>
            <Link to='/addnewitem'>add new item</Link>
        </div>
    );
};

export default ManageInventories;