import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }

        getMyItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `http://localhost:5000/inventories/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItems.filter(inventory => inventory._id !== id);
                    setMyItems(remaining)
                    toast('Items Deleted')
                })
        }
    }


    return (
        <div className='container'>
            <h2 className='text-center mt-5'>My Items :{myItems.length}</h2>
            <div className='inventories-collection'>
                {
                    myItems.map(item => <MyItem
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                    ></MyItem>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyItems;