import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoCard from './components/PhotoCard';
import { StyledDiv, StyledContainer } from './components/Style';
import Logo from './components/Logo';
import axios from 'axios';

import "./App.scss";


function App() {
  //set data useState to an object so we can call all elements at once in our .then
  // const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    //can add a data after the API key to pull up an image from a specific date: 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo&date=2012-03-14'
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    //can use Henry's API to show multiple images: 'https://henry-mock-nasa-api.herokuapp.com/api'
    axios.get('https://henry-mock-nasa-api.herokuapp.com/api')
      .then(res => {
        //console.log(res.data);
        // setData(res.data)
        //using Henry's mock API
        setPhotos(res.data);
      });
  }, [])
  return (
    <StyledContainer>
      <div className='App'>
        <Logo />
        <StyledDiv><Header></Header></StyledDiv>
        <h2>Check Out Today's Photo:</h2>
        {/* pass data to photocard via props */}
        {/* {data
          ? <PhotoCard date={data.date}
            title={data.title}
            explanation={data.explanation}
            mediaType={data.media_type}
            url={data.url} />
          : <div>Loading...<div>
          </div>Test</div>} */}
        {/* using Henry's mock API */}
        {photos.map(data => (
          <PhotoCard date={data.date}
            title={data.title}
            explanation={data.explanation}
            mediaType={data.media_type}
            url={data.url} />
        ))}
        <Footer />
      </div>
    </StyledContainer>
  );
}

export default App;
