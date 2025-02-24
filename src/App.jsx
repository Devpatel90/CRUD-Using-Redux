import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/MainRoutes";
import { Provider } from "react-redux";
import { Store } from "./App/Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
