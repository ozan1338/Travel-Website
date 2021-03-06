import React from "react";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ModelProvider } from "./context/providers/ModelProvider";
import { Nav } from "./components/Nav";
import { NavProvider } from "./context/providers/NavProvider";
import { Toggle } from "./components/Toggle";
import { DestinationProvider } from "./context/providers/DestinationProvider";
import {Details} from "./pages/Details";
import {SharedProvider} from "./context/providers/SharedProvider";
import {GalleryProvider} from "./context/providers/GalleryProvider";


function App() {
  

  return (
    <Router>
      <ModelProvider>
        <NavProvider >
        <DestinationProvider>
        <GalleryProvider>
        <SharedProvider>
        <Toggle />
        <Nav />
        <HelmetProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/details/:id' exact component={Details} />
            <Route component={NotFound}/>
          </Switch>
        </HelmetProvider>
        </SharedProvider> 
        </GalleryProvider>
        </DestinationProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
