import ImageSlider from "../components/UI/ImageSlider";
import styles from "../components/UI/Welcome.module.css";

const Welcome = () => {
  const hour = new Date().getHours();
  let message = "";

  if (hour >= 0 && hour < 12) {
    message = "Good Morning";
  } else if (hour >= 12 && hour <= 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  const images = [
    {
      url: "https://atlanticstation.com/wp-content/uploads/2020/09/1-Pandora-Charm-Bracelet.jpg",
      title: "bracelet",
    },
    {
      url: "https://cms-live.pandora.net/resource/responsive-image/1717914/m37-hybrid-plp-hero-module-bvi21/xs/4/bracelets-hero.jpg",
      title: "magnetic-bracelet",
    },
    {
      url: "https://cms-live.pandora.net/resource/responsive-image/1391404/m52-explore-module-col-3/xs/5/2021-e-wearability-rotation2-model-26-rgb.jpg",
      title: "gift-for-woman",
    },
    {
      url: "https://m.media-amazon.com/images/I/812rIxG1GrL._AC_UY580_.jpg",
      title: "necklace",
    },
    {
      url: "https://zoff.ro/image/cache/catalog/01Mihai/PAS053-(4)-800x800.jpg",
      title: "bracelet-with-cats",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{message}</h1>
      <br />
      <br />

      <ImageSlider slides={images} />
      <br />
      <br />
      <div className={styles.wrapper}>
        <div className={styles.scroll}>
          <h3>
            Take a closer look at our products and see what fits you best!
          </h3>
        </div>

        <div className={`${styles.fixed} ${styles.one}`}></div>

        <div className={styles.scroll}>
          <h3>
            Here you cann see our new collection!
          </h3>
        </div>

        <div className={`${styles.fixed} ${styles.two}`}></div>

        <div className={styles.scroll}>
          <h3>
            Jewelry is a very personal thing that tell a story about the person
            who is wearing it.
          </h3>
        </div>

        <div className={`${styles.fixed} ${styles.three}`}></div>
      </div>
    </div>
  );
};

export default Welcome;
