import {FcSearch} from 'react-icons/fc';

function SearchToggle({
  onSearchToggleClick
}) {
  return (
    <div className="search-toggle-container">
      <button
        className='btn search-toggle-btn'
        onClick={onSearchToggleClick}
      >
        <FcSearch />
      </button>
    </div>
  )
}

export default SearchToggle