import React from 'react'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import rss from '../images/rss.svg'
import twitter from '../images/twitter.svg'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <hr style={{ maxWidth: '800px', margin: '16px auto' }} />
      <div className="social">
        <a href="https://twitter.com/real_jibin">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/jibin2706/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://github.com/jibin2706">
          <img src={github} alt="github" />
        </a>
        <a href="https://blog.jibin.tech/rss.xml">
          <img src={rss} alt="rss" />
        </a>
      </div>
      <div className="footer-info">
        <p>© - Coded by hand and headaches</p>
        <p>Powered by Gatsby.js</p>
      </div>
    </footer>
  )
}

export default Footer
