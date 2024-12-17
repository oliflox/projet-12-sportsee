import "./assets/css/App.css";

import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <HorizontalNav />
      <section className="dashboard-container">
        <VerticalNav />
        <Dashboard />
      </section>
    </>
  );
}

export default App;