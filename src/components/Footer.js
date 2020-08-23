import React from 'react';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Hubstaff Talent</h3>
        <ul className="footer__list">
          <li className="footer__sub">Talent</li>
          <li className="footer__item">How it works</li>
          <li className="footer__item">Why we are free</li>
          <li className="footer__item">Agencies</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__sub">Hubstaff</li>
          <li className="footer__item">About</li>
          <li className="footer__item">Time tracking</li>
          <li className="footer__item">Developer</li>
          <li className="footer__item">Resources</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__sub">Support</li>
          <li className="footer__item">Help center</li>
          <li className="footer__item">Blog</li>
          <li className="footer__item">FAQ</li>
          <li className="footer__item">Email us</li>
          <li className="footer__item">Times</li>
          <li className="footer__item">Privacy</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__sub">Social</li>
          <li className="footer__social">
            <span >
              <FacebookFilled />
            </span>
            <span>
              <TwitterCircleFilled />
            </span>
            <span>
              <InstagramFilled />
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer;