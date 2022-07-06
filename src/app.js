import "./app.css";
import logo from "./img/logo.png";
import SearchBar from "./component/searchBar";
import MostPopularList from "./component/mostPopularList";

function App() {
  return (
    <>
      <header>
        <nav>
          <h1 className="logo">
            <a href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </h1>
          <SearchBar></SearchBar>
          <div className="right-menu">
            <ul>
              <li>
                <i className="fa-solid fa-video"></i>
              </li>
              <li>
                <i className="fa-solid fa-ellipsis"></i>
              </li>
              <li>
                <i className="fa-solid fa-bell"></i>
              </li>
              <li>
                <i className="fa-solid fa-user"></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section>
        <MostPopularList></MostPopularList>
      </section>
    </>
  );
}

export default App;
