import {Link} from 'react-router-dom'
function Header({storeName, handleDarkMode}){
    return(
      <div>
        <h1>{storeName}</h1>
        <label>
          Dark Mode
        <input onChange={handleDarkMode} type="checkbox" id="dark-mode-checkbox" name="dark-mode" value="dark-mode"></input>
        </label>
        <Link to="/books/new">New Form</Link>
        <Link to="/books">Book List</Link>
      </div>
    )
  }
  //Exporting books
  export default Header;
  