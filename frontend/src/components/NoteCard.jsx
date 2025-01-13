import './NoteCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import PropTypes from 'prop-types'
import { FormatDate } from './FormatDate';
function NoteCard({note}) {
    
    const color = note.category === 'BUSINESS' ? 'blue' : note.category === 'PERSONAL' ? 'green' : 'purple';
    const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`

  return (

        <div className='notecard'>
            <Link to={`/notes/${note.slug}`}  className="notecard-link">
                <FontAwesomeIcon className="note-icon " style={{color:color}} icon={faNoteSticky} />
            </Link>
            <div className="notecard-title">
                <h3>{note.title}</h3>
                <p>{FormatDate (note.updated)}</p>
            </div>
            <div className="notecard-body">
                <p>{body}</p>
            </div>
            <div className="notecard-category">
                <FontAwesomeIcon className="category-icon" style={{color:color}}  icon={faEnvelope} />
                <p>{note.category}</p>
            </div>
        </div>
  )
}
NoteCard.propTypes = {
    note: PropTypes.object.isRequired,
}

export default NoteCard