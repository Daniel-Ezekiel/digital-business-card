import { GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <a className="footer--url" href="https://github.com/daniel-ezekiel">
        <GitHub />
      </a>
      <a className="footer--url" href="https://twitter.com/db_ezekiel">
        <Twitter />
      </a>
    </footer>
  );
}

export default Footer;
