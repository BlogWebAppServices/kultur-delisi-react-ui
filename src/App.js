import React from "react"
import "./App.css"
import Homepages from "./components/home/Homepages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import 'rsuite/dist/rsuite.min.css';
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Admin from "./admin/src/Admin"
const App = () => {
  return (
    <>
      <Router>
        <Switch>
              <Route path='/admin' exact component={Admin} />
    
              <Route path='/' exact component={Homepages} />
              <Route path='/singlepage/:id' exact component={SinglePage} />
              <Route path='/culture' exact component={Culture} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />

          
          
        </Switch>
      </Router>
    </>
  )
}

export default App
