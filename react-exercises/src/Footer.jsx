import social1 from "./assets/facebook-color-svgrepo-com.svg";
import social2 from "./assets/instagram-1-svgrepo-com.svg";
import social3 from "./assets/snapchat-svgrepo-com.svg";
import social4 from "./assets/twitter-color-svgrepo-com.svg";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <div>
          <img src={social1} alt="social1" />
        </div>
        <div>
          <img src={social2} alt="social2" />
        </div>
        <div>
          <img src={social3} alt="social3" />
        </div>
        <div>
          <img src={social4} alt="social4" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
