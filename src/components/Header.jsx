import  React  from "react"

import profile from "../assets/profile-img.jpg"

export default function Header(){
    return(
        // <h1>somthing good goging here</h1>
        <header>
           <img src={profile} className="profile-img" />
        </header>
    )
}