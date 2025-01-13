import { h1 } from "motion/react-client"
import Filter from "../components/Filter"
import NoteCardContainer from "../components/NoteCardContainer"
import PropTypes from 'prop-types'
function HomePage({notes,handleFilterText}) {
  return (
    <>
      {notes.length<1 ? <h1 className="no-notes-header">No Notes Found</h1>:
      <div>
        <Filter handleFilterText={handleFilterText} />
        <NoteCardContainer notes={notes} />
      </div>
      }
    </>
  )
}
HomePage.prototype={
  notes:PropTypes.object.isRequired,
  handleFilterText:PropTypes.func.isRequired
}
export default HomePage