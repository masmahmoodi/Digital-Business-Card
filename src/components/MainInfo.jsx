import React from "react"

export default function MainInfo(){
    return(
        <main>
          <div className="User-info">
                <h1>Masoud Mahmoodi</h1>
                <h4>Software Developer</h4>
                <small>Sharks.website</small>
          </div>
          <div className="buttons">
                <button className="email-btn"><i class="fa-solid fa-envelope"></i> Email</button>
                <button className="linkedin-btn"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
          </div>
          <div className="about">
                <h2>About</h2>
                <p>
                    I am a frontend developer with a particular interest 
                    in making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>
          </div>
          <div className="interests">
                <h2>Interests</h2>
                <p>
                    Food expert. Music scholar. 
                    Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
          </div>
        </main>
    )
}