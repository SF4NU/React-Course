import hamburgerMenu from "./assets/hamburger-menu-svgrepo-com.svg"
import logo from "./assets/logo-design.png"
import callIcon from "./assets/call.png"

function Header() {
  return(
    <header className="header">
      <div className="header-left">
        <div className="logo-div">
        <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="header-left-icons">
          <div className="titolo-sito">La Barca Del Sushi</div>
          <div className="header-buttons">
            <div className="button-div">
              <button className="call-button">+39 312 435 3909</button>
            </div>
            <div>
              <img className="call-icon" src={callIcon} alt="call icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <img className="hamburger-menu" src={hamburgerMenu} alt="hamburger menu" />
      </div>
      
    </header>
  );
}

export default Header