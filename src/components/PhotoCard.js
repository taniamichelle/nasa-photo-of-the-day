import React from 'react';
import { StyledP } from './Style';


function PhotoCard(props) {
    //console.log(props);
    return (
        <StyledP>
            <div>
                <h2>{props.title}</h2>
                <div className='date'>{props.date}</div>
                <div>{props.mediaType === 'image' ? <img src={props.url} /> : <iframe src={props.url} alt="video of the day"></iframe>}</div>
                {/* <img src={props.url} /> */}
                <p>{props.explanation}</p>
            </div>
        </StyledP>
    );
}



export default PhotoCard;

