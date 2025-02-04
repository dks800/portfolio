import React, { Children } from 'react';
import {Link} from 'react-router-dom';

const style = {
    display: 'inline-block',
    margin: 10,
    marginBotom: 30
}

const Header = ({children}) => {
    return(
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-master'>Music Master</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;