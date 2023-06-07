import './Navbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import HighlightIcon from '@mui/icons-material/Highlight';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


function Navbar(){

    function checkLoggedOut(){
     if(localStorage.getItem('currentUser') === null){
        return true;
     }
     else{
        return false;
     }
    }

    function checkLoggedIn(){
        if(localStorage.getItem('currentUser') !== null){
           return true;
        }
        else{
           return false;
        }
       }

    const navigate = useNavigate();

    //State that checks if the menu bar is clicked or not
    const [clicked,setClicked] = useState(false)
    
    
    // When the menu bar is clicked, the boolean state reverses itself
    function handleClick(){
        setClicked(!clicked);
    }

    function handleLogout(){
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    const menuItems=   [
        {
        title: 'Log In',
        url: '/',
        cName: 'nav-links-mobile' //This is for mobile
    },
    ]
   
    const loggedInMenuItems = [
        {
            title: 'Home', //Menu Name
            url: '/home', //This is where the link is stored
            cName: 'nav-links' //This is to import className without having to manually type it in 
        },

        {
            title: 'Book a Seat', //Menu Name
            url: '/book', //This is where the link is stored
            cName: 'nav-links' //This is to import className without having to manually type it in 
        },
        
        {
            title: 'Profile', //Menu Name
            url: '/profile', //This is where the link is stored
            cName: 'nav-links' //This is to import className without having to manually type it in 
        },
     
        {
            title: 'Log Out',
            url: '/',
            cName: 'nav-links-mobile' //This is for mobile
        },
    ]

    const adminLoggedInMenuItems = [
        {
            title: 'Home', //Menu Name
            url: '/adminHome', //This is where the link is stored
            cName: 'nav-links' //This is to import className without having to manually type it in 
        },

        {
            title: 'Check Bookings', //Menu Name
            url: '/bookings', //This is where the link is stored
            cName: 'nav-links' //This is to import className without having to manually type it in 
        },
     
        {
            title: 'Log Out',
            url: '/',
            cName: 'nav-links-mobile' //This is for mobile
        },
    ]
   
  
    return(
        <nav className = "navbarItems">
            <h1 className ="navbar-logo">CME Seat Booking </h1> 
            <div className = "menu-icon" onClick = {handleClick} >
             {/* When we click on the icon, we set the icon to be the x icon, and if
             it is not clicked, it will give us the menu bar icon   */}
             {clicked? <CloseIcon/> : <MenuIcon/> }
            </div>
            {/* Now we need add the state in the className since on mobile the nav links will shift to the left */}
            <ul className = {clicked ? "nav-menu active": "nav-menu"} >
                {/* Mapping the data in the MenuItems array into each li tag */}
                
                {

        // checkLoggedOut()?
        // menuItems.map((item,index) => {
        //     return(
        //         <a key= {index} href = {item.url} className = {item.cName} >{item.title}</a>
        //     )
        // })
        // :
        loggedInMenuItems.map((item,index) => {
            return(
                <a key= {index} href = {item.url} className = {item.cName} >{item.title}</a>
            )
        })
        }     
            </ul>

        {
        checkLoggedIn() ?
      
        <button onClick={handleLogout} className = "nav-button btn btn--primary ">Log Out</button>
       
        :
        <Link  to = "/">
            <button className = "nav-button btn ">Log In</button>
            </Link>
        }

        </nav>
    )
}

export default Navbar;
