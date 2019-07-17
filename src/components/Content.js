import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
            .then(res => { setData(res.data) })
            .catch(error => console.log('API is down', error))
    }, []);

    return (
        <div>
            <h3>Content</h3>
            {/* url: 'https://www.youtube.com/embed/xc1SzgGhMKc?start=850' */}
        </div>
    );
}

export default Content;