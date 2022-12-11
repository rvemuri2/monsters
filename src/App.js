import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/searchbox-component.jsx";

class App extends Component {
  constructor() {
    console.log("render from App.js");
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  searching = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render from App.js");
    const { monsters, searchField } = this.state;
    const { searching } = this;
    const fm = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={searching}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={fm} />
      </div>
    );
  }
}
export default App;
