import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content(props) {
    const [data, setData] = useState('');
    // const [date, setDate] = useState('');
    // const [explanation, setExplanation] = useState('');
    // const [media, setMedia] = useState('');
    // const [version, setVersion] = useState('');
    // const [title, setTitle] = useState('');
    // const [url, setUrl] = useState('');

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
            .then(res => setData(res.data))
            .catch(error => console.log('API is down', error))
    }, []);

    return (
        <div className='content'>
            <h3>{Content}</h3>
            <iframe src='https://www.youtube.com/embed/xc1SzgGhMKc?start=850' alt="video of the day"></iframe>
            <p>{data.date}</p>
            <p>{data.explanation}</p>
        </div>
    );
}

export default Content;