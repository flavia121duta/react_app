import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
