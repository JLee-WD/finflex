import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="text-white text-sm flex flex-row justify-around py-20 footer">
      <div className="">
        <div className="">
          {/* <Logo type="tertiaryDark" inheritedClassname={styles.logo} /> */}
          <p>Joost Pty Ltd</p>
          <p>Authorised and licensed by MIT.</p>
        </div>
        <div className="">
          <nav>
            <Link key="" to="">
              <span className="">About</span>
            </Link>
          </nav>
        </div>
      </div>
      <section className="">
        <span className="">
          © {new Date().getFullYear()} Joost Pty Ltd. All rights reserved.
        </span>
        <div className="">
          <nav className="">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms of Service</Link>
          </nav>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
