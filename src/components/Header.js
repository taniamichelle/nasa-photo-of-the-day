import React, { useState } from 'react';
import { StyledHeading, StyledButton } from './Style';

function Header(props) {
    const [appName, setAppName] = useState('');

    // useEffect(() => { console.log('first effect', title) });

    return (
        <div className='header'>
            <StyledHeading><h1>🚀  NASA: Photo of the Day  🚀</h1></StyledHeading>
            <StyledButton>
                <button className='signInButton'>Sign In</button>
                <button className='signUpButton'>Sign Up</button>
            </StyledButton>
        </div>
    );
}

export default Header;