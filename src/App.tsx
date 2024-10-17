import Router from "./routers/index";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
  <Provider store={store}>
    <HashRouter>
      <Router />
    </HashRouter>
  </Provider>
  )
}
export default App

