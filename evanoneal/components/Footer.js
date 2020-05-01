import React from 'react';
import { SocialIcon } from 'react-social-icons';

const footer = {
    height: '50px',
    marginTop: '25px',
    color: 'var(--highlight)',
    textAlign: 'center',
}

const social = {
    width: '30px',
    height: '30px',
    marginRight: 10,

}

export default function Footer () {
    return (
        <footer style={footer}>
            <SocialIcon url="https://www.instagram.com/eoneal1/?hl=en" bgColor='grey' style={social}/>
            <SocialIcon url="https://www.linkedin.com/in/evan-oneal/" bgColor='grey'style={social}/>
            <SocialIcon url="http://evanjoneal@gmail.com" bgColor='grey'style={social}/>
        </footer>
    )
}