import Filter from "../components/Filter"
import NoteCardContainer from "../components/NoteCardContainer"
import PropTypes from 'prop-types'
function HomePage({loading,notes,handleFilterText}) {
  return (
      <div>
        <Filter handleFilterText={handleFilterText} />
        <NoteCardContainer loading={loading} notes={notes} />
      </div>
  )
}
HomePage.prototype={
  notes:PropTypes.object.isRequired,
  handleFilterText:PropTypes.func.isRequired
}
export default HomePage