import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger"
import promise from "redux-promise-middleware"
/*<link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  /> */
const semanticUICSS = document.createElement("link")
semanticUICSS.rel="stylesheet"
semanticUICSS.href ="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
document.head.appendChild(semanticUICSS)

/**
 * <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
 */
const semanticUIJS = document.createElement("script")
semanticUIJS.src = "https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"
document.head.appendChild(semanticUIJS)


/*const allExtensions = compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())*/


const allExtensions = composeWithDevTools(applyMiddleware(thunk,promise,logger));

const myStore = createStore(rootReducer, allExtensions);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
