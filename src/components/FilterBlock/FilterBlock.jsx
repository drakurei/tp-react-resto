// Shell of a sidebar block: a small card with a title and the filter inside
function FilterBlock({ title, children }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body">
        <h3 className="h6 text-uppercase fw-bold text-secondary mb-3">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default FilterBlock
