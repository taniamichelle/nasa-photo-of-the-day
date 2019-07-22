import React from 'react';
import { StyledP } from './Styled';
import { Card, Image } from 'semantic-ui-react';


function PhotoCard(props) {
    //console.log(props);
    return (
        <Card className='semantic-card'>
            <Card.Content>
                <div>
                    <h2>{props.title}</h2>
                    <div className='date'>{props.date}</div>
                    <div>
                        {props.mediaType === 'image' ? <Image src={props.url} /> : <iframe src={props.url} alt="video of the day"></iframe>}
                    </div>
                    {/* <img src={props.url} /> */}
                    <Card.Description className='cardContent'>
                        {props.explanation}
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
    );
}



export default PhotoCard;

