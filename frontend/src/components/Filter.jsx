import "./Filter.css"

const Filter = ({handleFilterText}) => {
  return (
    <div className="filter-container">
        <select className="filter" name="" id="" onChange={(e)=>handleFilterText(e.target.value)}>
            <option value="">All Notes</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="IMPORTANT">Important</option>
        </select>
    </div>
  )
}

export default Filter