function Navbar(props) {
    return (
      <div >
          <nav>
        <div className="logo">
          hi {props.name}
          <h2>{props.para}</h2>
        </div>
        <ul>
            <li><a href="#" >Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          
        </ul>
    </nav>
          
       
      </div>
    );
  }
  
  export default Navbar;