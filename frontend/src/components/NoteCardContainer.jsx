import NoteCard from "./NoteCard"
import './NoteCard.css'
function NoteCardContainer({loading,notes}) {
  return (
    <div>
      { (loading) ? (<div className="no-notes-header">loading</div>) :
        (<div className='notecard-container'>
            { notes.map(note => <NoteCard key={note.title} note={note} />)}
        </div>)
      }
    </div>
  )
}

export default NoteCardContainer