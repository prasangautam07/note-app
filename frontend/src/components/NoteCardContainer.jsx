import NoteCard from "./NoteCard"
import './NoteCard.css'
function NoteCardContainer({notes}) {
  return (
    <div className='notecard-container'>
        { notes.map(note => <NoteCard key={note.title} note={note} />)}
    </div>
  )
}

export default NoteCardContainer