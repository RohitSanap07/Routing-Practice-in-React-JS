import {createRoot} from  "react-dom/client";
import Skill from "./Skill/skill"
import Education from "./Education/education"
import Navbar from "./navbar"
import img from "./Rohit img1.png"

const root = createRoot(document.getElementById("root"));
function Profile() {
    return <div>
        <center><h1>My Portfolio</h1></center>
            <Navbar/>
       <h1>I am Rohit Sanap</h1>
        <img src={img}></img>
      
        
    </div>
}

const currentpath = window.location.pathname
if(currentpath=="/"){
    root.render(<Profile/>)
}
else if (currentpath=="/Skill"){
    root.render(<Skill/>)
}
else if (currentpath=="/Education"){
    root.render(<Education/>)
}
