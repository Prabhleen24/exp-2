import BootstrapSection from "./Components/BootstrapSection";
import MuiSection from "./Components/MuiSection";
import "./App.css";

function App() {
  return (
    <>
      {/* Global Header */}
      <div className="text-center py-4 bg-dark text-white shadow-sm">
        <h2>Student Portfolio</h2>
        <p className="mb-0">
          Bootstrap & Material UI
        </p>
      </div>

      {/* Split Layout */}
      <div className="container-fluid mt-4">
        <div className="row g-4">
          <div className="col-md-6">
            <BootstrapSection />
          </div>

          <div className="col-md-6">
            <MuiSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
