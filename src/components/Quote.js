import '../App.css';
import NavBar from './Navbar';

const Quote = () => (
  <div className="main-quote-container">
    <NavBar />
    <div className="quote-container">
      <h1>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. –William Paul
        Thurston
      </h1>
    </div>
  </div>
);

export default Quote;
