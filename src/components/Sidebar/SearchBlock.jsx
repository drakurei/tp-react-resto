import FilterBlock from '../FilterBlock/FilterBlock'
import IconSearch from '../Icons/IconSearch'

// Text search: name, category and keywords of the products
function SearchBlock() {
  return (
    <FilterBlock title="Recherche">
      <label htmlFor="search-input" className="form-label small text-secondary">
        Un plat, une catégorie, un mot-clé…
      </label>
      <div className="input-group">
        <span className="input-group-text bg-white text-secondary">
          <IconSearch />
        </span>
        <input
          id="search-input"
          type="search"
          className="form-control"
          placeholder="Pikachu, burger, épicé…"
          autoComplete="off"
        />
      </div>
    </FilterBlock>
  )
}

export default SearchBlock
