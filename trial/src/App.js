import logo from "./logo.svg";
import { Header } from "./stories/components/Header";
import { MenuBar } from "./stories/components/MenuBar";
import { MembersListing } from "./stories/components/MembersListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MenuBar />
        <MembersListing />
      </header>
    </div>
  );
}

export default App;
