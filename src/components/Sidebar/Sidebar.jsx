import SearchBlock from './SearchBlock'
import CategoryBlock from './CategoryBlock'
import TagBlock from './TagBlock'
import PriceBlock from './PriceBlock'
import Button from '../Button/Button'

// The sidebar groups all the filter blocks
function Sidebar() {
  return (
    <aside id="categories" aria-label="Filtres du menu">
      <SearchBlock />
      <CategoryBlock />
      <TagBlock />
      <PriceBlock />
      <Button variant="outline-danger" className="w-100 fw-semibold">
        Réinitialiser les filtres
      </Button>
    </aside>
  )
}

export default Sidebar
