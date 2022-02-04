

function Header({ isDarkMode, onDarkModeClick }){
    return(
    <header > 
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {/* the elements I can create events if I need. I cannot create events on a component  */}
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    ); 
}




export default Header;