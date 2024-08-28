import Navbar from "../navbar"
import Img from "./web_development.jpg"
function Skill(){
    return <div>
        <center><h1>My Portfolio</h1></center> 
        <Navbar/>
        <h1>Web Development</h1>
        <img src={Img}></img>
    </div>
}
export default Skill;