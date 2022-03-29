import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <img className="profile-picture" src="../images/profile-picture.png" />
            <div className="name">Laura Smith</div>
            <div className="job">Frontend Developer</div>
            <div className="website">laurasmith.website</div>
            <div className="email-button">
                <img className="button-img" src="../images/email-icon.png"/>
                <div className="button-text">Email</div>
            </div>
        </div>
    )
}