import React, { useState, useEffect } from 'react';

function Header() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    // useEffect(() => { console.log('first effect', title) });

    // useEffect(() => { console.log('second effect', date) });
    return (
        <div className='header'>
            <h1>NASA Photo of the Day</h1>
            <h2>Date?</h2>
            <button className='signInButton'>Sign In</button>
            <button className='signUpButton'>Sign Up</button>
        </div>
    );
}

export default Header;