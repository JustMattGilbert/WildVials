import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 Wildvials</li>
        <li>
          An <a href="https://mdggrowth.com/">MDG Growth</a> Thing. 
          Built by <a href="https://everywaydesign.com">everyway.</a>
        </li>
      </ul>
    </footer>
  );
}
