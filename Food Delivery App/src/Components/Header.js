import FoodFireLogo from "../../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);


//here I dont need to export the Title since its used in Header and not in App.js.
// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
