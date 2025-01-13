import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import '../css/navbar.css'
function Navbar({searchNotes}) {
    const [searchQuery,setSearchQuery]=useState();
    const handleSearch=()=>{
        searchNotes(searchQuery);
    }
  return (
    <nav className="navbar">
        <div className="container">
            <Link className="navbar-brand" to='/'>
                <h4>Notes</h4>
            </Link>
            <div className="search-box">
                <input type="text" placeholder="Search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                 />
                 <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
            <Link className="add-note-btn" to={"/add-note"}>
                <button className="btn">
                     <FontAwesomeIcon className="plus-icon" icon={faSquarePlus} />Add Notes
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar