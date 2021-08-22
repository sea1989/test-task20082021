import React from 'react';
import './style.css';

export default class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="page__content">
                        <div className="page__text-section">
                            <h1 className="page__title">The best video online meeting software.</h1>
                            <h4 className="page__subtitle">Many desktop publishing packages and web page editors now use Lorem
                                Ipsum as their default</h4>
                            <button className="button button--green">Start for free</button>
                        </div>
                        <div className="page__img-section">
                            <img src='./img/hero.png' alt="woman" className="hero__img" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
