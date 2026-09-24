import FilterBlock from '../FilterBlock/FilterBlock'
import { tags } from '../../data/filters'

// Tag chips (populaire, épicé, végétarien...)
function TagBlock() {
  return (
    <FilterBlock title="Tags">
      <div className="d-flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button key={tag} type="button" className="btn btn-sm btn-outline-secondary rounded-pill text-capitalize">
            {tag}
          </button>
        ))}
      </div>
    </FilterBlock>
  )
}

export default TagBlock
