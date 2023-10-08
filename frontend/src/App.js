import logo from './logo.svg';
import './App.css';
import GraphQLProvider from "./clientState/providers/GraphQLProvider";
import ResultsPage from "./pages/results";

function App() {
  return (
      <GraphQLProvider>
        <ResultsPage />
      </GraphQLProvider>
  );
}

export default App;
