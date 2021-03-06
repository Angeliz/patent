import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'

import Patentspecialist from './pages/patents/specialist/Home'
import Patentsystem from './pages/patents/system/Home'
import Patentcustom from './pages/patents/custom/Home'

import Institutionssystem from './pages/institutions/system/Home'

import Rankfield from './pages/rank/field/Home'
import Rankapplicant from './pages/rank/applicant/Home'

import Dealpatent from './pages/deal/patentsearch/Home'

function App() {
  return (
    <div className="App" className='background'>
        <Header/>

        <div style={{width:'100%',padding:'0 0 20px 0 '}} >
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Patentsystem} />
                    <Route path="/patents/specialist" component={Patentspecialist} />
                    <Route path="/patents/system" component={Patentsystem} />
                    <Route path="/patents/custom" component={Patentcustom} />

                    <Route path="/institutions/system" component={Institutionssystem} />

                    <Route path="/rank/field" component={Rankfield} />
                    <Route path="/rank/applicant" component={Rankapplicant} />

                    <Route path="/deal/patentsearch" component={Dealpatent} />


                </Switch>
            </BrowserRouter>
        </div>

        <Footer/>
    </div>
  );
}

export default App;
