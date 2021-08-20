import React from 'react';
import Header from './Header';
import Hero from './Block-hero';
import Partners from './Block-partners';
import Features from './Block-features';

import './style.css';

export default class App extends React.Component {
    render() {

        return (
            <React.Fragment>

                <Header />
                <Hero />
                <Partners />
                <Features />

            </React.Fragment>
        )
    }
}