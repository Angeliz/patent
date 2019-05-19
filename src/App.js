import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Patentspecialist from './pages/patents/specialist/Specialistlist'
import Patentsystem from './pages/patents/system/Home'
import Patentcustom from './pages/patents/custom/Home'

import Institutionssystem from './pages/institutions/system/Home'

import Rankfield from './pages/rank/field/Home'

function App() {
  return (
    <div className="App" className='background'>
        <Header/>

        <div style={{width:'100%',padding:'0 0 20px 0 '}} >
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/" component={Home} />*/}
                    <Route path="/patents/specialist" component={Patentspecialist} />
                    <Route path="/patents/system" component={Patentsystem} />
                    <Route path="/patents/custom" component={Patentcustom} />

                    <Route path="/institutions/system" component={Institutionssystem} />
                    <Route path="/rank/field" component={Rankfield} />


                </Switch>
            </BrowserRouter>
        </div>

        <Footer/>
    </div>
  );
}

export default App;
