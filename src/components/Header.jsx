import { Email, Link, LinkedIn } from '@mui/icons-material';
import profilePhoto from '../assets/profile-photo.jpg';
import Button from './Button';

function Header() {
  return (
    <header>
      <img src={profilePhoto} alt="card--logo" />
      <h1 className="card--owner">Daniel B. Ezekiel</h1>
      <p className="card--title">Frontend Developer</p>
      <a className="card--url" href="https://danielezekiel.me" target="_blank">
        <Link />
        danielezekiel.me
      </a>

      <div className="header--btns">
        <Button
          className="btn--email"
          icon={<Email />}
          label="Email"
          url="mailto:dbezekiel77@gmail.com"
        />
        <Button
          className="btn--linkedin"
          icon={<LinkedIn />}
          label="LinkedIn"
          url="https://linkedin.com/in/db-ezekiel"
          target="_blank"
        />
      </div>
    </header>
  );
}

export default Header;
