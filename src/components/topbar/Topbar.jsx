import "./topbar.scss";
import { Person, Mail, GitHub, LinkedIn} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aman.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8169 370775</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>amang9833@gmail.com</span>
          </div>
          {/* github */}
          <div className="itemContainer">
            <a
              href="https://github.com/Amang9833"
              className="icon"
              target="_aman"
            >
              <GitHub className="icon" />
            </a>
          </div>
          {/* linkedin */}
          <div className="itemContainer">
            <a
              href="https://linkedin.com/in/aman-gupta-9056a01b9"
              className="icon"
              target="_aman"
            >
              <LinkedIn className="icon" />
            </a>
          </div>
          {/* leetcode */}
          <div className="itemContainer">
            <a
              href="https://leetcode.com/Aman_gupta-9833/"
              className="icon"
              target="_aman"
            >
              <img
                src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png"
                alt=""
                className="icon-img"
              />
            </a>
          </div>
          {/* codechef */}
          <div className="itemContainer">
            <a
              href="https://www.codechef.com/users/aman_9833"
              className="icon"
              target="_aman"
            >
              <img
                src="https://img.icons8.com/ios/452/codechef.png"
                alt=""
                className="icon-img"
              />
            </a>
          </div>
          {/* resume */}
          <div className="itemContainer">
            <a
              href="https://drive.google.com/file/d/1kedCuKJpiGl9E3xCq6X6Ht23ZdAbKSlB/view?usp=sharing"
              className="icon link icon-btn"
              target="_aman"
              download
            >
              Open Resume
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
