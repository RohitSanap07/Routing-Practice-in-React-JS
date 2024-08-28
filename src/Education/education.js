import Navbar from "../navbar"
import img from "./Engineering.avif"
function Education(){
    return <div>
        <center><h1>My Portfolio</h1></center>
        <Navbar/>
        <h1>I am pursuing Btech in Information Technology</h1>
        <img src={img}></img>
    </div>
}
export default Education;