import React from 'react';
import './style.css';

const data = [
    'Home',
    'Features',
    'Pricing',
    'Solution',
    'Faq'
]
const Li = (props) => (
    <li className="menu__item" >
        <a href="#" className="menu__link">{props.item}</a>
    </li>
)

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container header__container">
                    <a href="/" className="header__logo">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.57143C0 2.0467 2.0467 0 4.57143 0H27.4286C29.9533 0 32 2.0467 32 4.57143V27.4286C32 29.9533 29.9533 32 27.4286 32H4.57143C2.0467 32 0 29.9533 0 27.4286V4.57143ZM5.02381 7.41125V25.1429H9.73377V14.8225H9.87229L13.8203 25.0043H16.6602L20.6082 14.8918H20.7468V25.1429H25.4567V7.41125H19.4654L15.3442 17.4545H15.1364L11.0152 7.41125H5.02381ZM15.2381 9.14286C16.9212 9.14286 18.2857 7.77839 18.2857 6.09524C18.2857 4.41208 16.9212 3.04762 15.2381 3.04762C13.5549 3.04762 12.1905 4.41208 12.1905 6.09524C12.1905 7.77839 13.5549 9.14286 15.2381 9.14286Z" fill="#005FEC" />
                        </svg>
                        <span className="logo__title">metting</span>
                    </a>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            {
                                data.map((item, i) => <Li item={item} key={item} />)
                            }
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <button className="button button--transparent">Sign in</button>
                        <button className="button button--blue">Download</button>
                    </div>
                    <div className="mobile__menu">
                        <svg height="12" width="28" className="mobile__logo">
                            <use href="image/icons.svg#mobile-menu"></use>
                        </svg>
                    </div>
                </div>
            </header>
        )
    }
}
