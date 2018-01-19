import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;Pat Emery // Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and <a href="https://www.graphql.org/">GraphQL</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
