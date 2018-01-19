import React from 'react'
import Link from "gatsby-link";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>StarWars Wikipeda</h1>
                <p>An interactive wiki for StarWars fans </p>
            </div>
            <nav>
                <ul>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Films</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Planets</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Characters</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Vehicles</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
