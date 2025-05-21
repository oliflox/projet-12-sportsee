import "./assets/css/App.css";

import HorizontalNav from "./components/layout/HorizontalNav";
import VerticalNav from "./components/layout/VerticalNav";
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