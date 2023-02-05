import {useContext} from 'react'
import TaskContext from '../context/TaskContext';

const SearchText = ({
  onTextChange
}) => {
  const onChangeHandler = function (event) {
    onTextChange(event.target.value);
  }
  return (
    <>
      <input 
        type='text' 
        placeholder='Search here' 
        onChange={onChangeHandler} 
        className='search-input'
      />
    </>
  );
}

function Search() {
  const {searchTasks} = useContext(TaskContext);
  
  return (
    <div className='d-flex flex-column flex-sm-row align-items-stretch justify-content-between  search-bar'>
      <SearchText onTextChange={(query) => searchTasks(query)} />
    </div>
  )
}

export default Search