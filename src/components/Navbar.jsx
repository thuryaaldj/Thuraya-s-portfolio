const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <h1 className="navbar-logo">My Portfolio</h1>

        <ul className="navbar-links">
          <li className="navbar-link-item">
            <a href="#hero">About</a>
          </li>
          <li className="navbar-link-item">
            <a href="#whatido">What I Do</a>
          </li>
          <li className="navbar-link-item">
            <a href="#projects">My Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
