import { GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <a
        className="footer--url"
        href="https://github.com/daniel-ezekiel"
        target="_blank"
      >
        <GitHub />
      </a>
      <a
        className="footer--url"
        href="https://twitter.com/db_ezekiel"
        target="_blank"
      >
        <Twitter />
      </a>
    </footer>
  );
}

export default Footer;
