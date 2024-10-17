import Router from "./routers/index";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/navbar'
function App() {
  return (
  <Provider store={store}>
    <HashRouter>
      <Navbar />
      <Router />
    </HashRouter>
  </Provider>
  )
}
export default App

