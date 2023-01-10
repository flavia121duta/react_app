import Card from "./Card";
import Button from "./Button";
import classes from "./JewelryCareModal.module.css";

const JewelryCareModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Keep Your Jewelry Looking Their Best</h2>
        </header>
        <main className={classes.content}>
          <ul className={classes.list}>
            <li>
              We always recommend storing your designs in a clean dry area.
              Linen pouches and tins are the perfect home for your pieces when
              they are not in use.
            </li>
            <li>
              Maintain your jewelry’s integrity by avoiding contact with hair
              products, lotions, makeup, perfumes, soaps, and cleaning products.
            </li>
            <li>
              Always remove your jewelry prior to washing your hands, apply any
              kind of personal body products, cleaning, working out, swimming,
              or sleeping.
            </li>
            <li>
              To keep your designs looking their best, avoid storing them in
              direct sunlight and humid environments. We always recommend
              storing your designs in a clean, dry area.
            </li>
          </ul>
        </main>
        <footer className={classes.actions} onClick={props.onConfirm}>
          <Button>Okey</Button>
        </footer>
      </Card>
    </>
  );
};

export default JewelryCareModal;
