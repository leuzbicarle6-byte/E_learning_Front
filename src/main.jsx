import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./backend/app/store.js"; // Plus besoin d'importer 'persistor'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* Le PersistGate a été retiré puisque le state s'hydrate tout seul maintenant */}
      <App />
    </Provider>
  </StrictMode>,
);