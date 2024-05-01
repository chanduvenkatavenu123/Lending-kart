import '../App.css'
import HamburgerMenu from "../assets/Hamburger-menu.svg"
function Headerpart(){
    return(
       <div className="Navbar">       
        <div className="navLeft">
          <img className="hambergerMenu" src={HamburgerMenu}/>
          <img className="logo" src="https://www.lendingkart.com/business-loan/images/lk-logo.953b659c.svg"/>        
        </div>
       <div className="navRight">
                <button className="" style={{border:'none'}} onClick={()=>alert("Clicked on Help Center")}>Help Center</button>
                <span style={{display:'flex'}}><svg class="h-5 w-5 fill-current text-gray-500"  viewBox="0 0 24 24" fill=""  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> &nbsp; 1800-572-0202</span>
                <button className="btn" onClick={()=>alert("Clicked on Engilsh")}>English</button>
       </div>
      </div> 
    )
};
export default Headerpart;