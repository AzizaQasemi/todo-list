import React from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddTodo() {
    const [title, setatitle] = React.useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setatitle("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='input_container'>
                <input className='input'
                type="text" 
                placeholder="Enter todo..."
                value={title}
                onChange={(e) => setatitle(e.target.value)}
                />
            </div>
            <div className='btn_container'>
                <button>Add</button>
            </div>
        </form>
    );
};