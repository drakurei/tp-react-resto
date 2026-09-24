import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import FilterBlock from '../FilterBlock/FilterBlock'
import IconSearch from '../Icons/IconSearch'

// Text search: name, category and keywords of the products
function SearchBlock() {
  const { search, setSearch } = useContext(FilterContext)

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
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search !== '' && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setSearch('')}
            aria-label="Effacer la recherche"
          >
            ✕
          </button>
        )}
      </div>
    </FilterBlock>
  )
}

export default SearchBlock
