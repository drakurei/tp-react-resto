import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import SearchBlock from './SearchBlock'
import CategoryBlock from './CategoryBlock'
import TagBlock from './TagBlock'
import PriceBlock from './PriceBlock'
import Button from '../Button/Button'

// The sidebar groups all the filter blocks and the reset button
function Sidebar() {
  const { resetFilters, activeFiltersCount } = useContext(FilterContext)

  return (
    <aside id="categories" aria-label="Filtres du menu">
      <SearchBlock />
      <CategoryBlock />
      <TagBlock />
      <PriceBlock />
      <Button
        variant="outline-danger"
        className="w-100 fw-semibold"
        onClick={resetFilters}
        disabled={activeFiltersCount === 0}
      >
        Réinitialiser les filtres
        {activeFiltersCount > 0 && ` (${activeFiltersCount})`}
      </Button>
    </aside>
  )
}

export default Sidebar
