import { useState, useEffect } from "react";
import { useParams,Link } from "react-router";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FormatDate } from "../components/FormatDate";
import { ToastContainer,toast } from "react-toastify";
import "./NoteDetail.css";
function NoteDetailPage({deleteNote}) {
  const[note,setNote]=useState({});
  const { slug } = useParams();
  useEffect(()=>{
    axios.get(`http://127.0.0.1:4000/notes/${slug}`)
    .then((res)=>{
      console.log(res.data);
      setNote(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[slug]);
  const handleDeleteClickIcon=()=>{
    deleteNote(slug);
  }
  return (
    <div className="note-detail-container">
      <div className="note-detail">
        <div className="note-title">
          <h1>{note.title}</h1>
          <div className="title-dates">
            <p>created: {FormatDate(note.created)}</p>
            <p>last update:  {FormatDate(note.updated)}</p>
          </div>
        </div>
        <div className="icons">
          <div className="edit-icon">
              <Link to={`edit-note/${slug}`} className="icon edit-icon">
                <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                <span>Edit</span>
              </Link>
          </div>
          <div className="delete-icon" onClick={handleDeleteClickIcon}>
            <FontAwesomeIcon className="icon" icon={faTrash} />
            <span>Delete</span>
          </div>
        </div>
        <div className="note-body">
          <p>
            {note.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoteDetailPage;
