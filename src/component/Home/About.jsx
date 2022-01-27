import React from "react";
import profileImg from '../Images/profile.jpg';
import SocialIcons from '../shared/Social/Social';

const About = () => {

    return (
        <div className='aboutWrap'>
            <img src={profileImg} className='aboutWrap_img' alt='Profile' />
            <div className='aboutWrap_details'>
                <h1 className='aboutWrap_details_head'>Rohit Ranjan</h1>
                <p className='aboutWrap_details_txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <SocialIcons />
            </div>
        </div>
    )
}

export default About
