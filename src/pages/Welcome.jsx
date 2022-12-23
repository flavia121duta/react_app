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

  const dummy_images = [
    {
      id: 1,
      src: "https://www.pandora.net/-/media/Images/Consumer/campaigns/2021/CycleG_Nov_Dec/PLP_banners/NAVSpots/Brand_Site_NavSpots_Charms.jpg",
      alt: "talisman",
    },
    {
      id: 2,
      src: "https://www.pandora.net/-/media/Images/Consumer/campaigns/2021/CycleG_Nov_Dec/PLP_banners/NAVSpots/Brand_Site_NavSpots_rings.jpg",
      alt: "ring",
    },
    {
      id: 3,
      src: "https://www.pandora.net/-/media/Images/Consumer/campaigns/2021/CycleG_Nov_Dec/PLP_banners/NAVSpots/Brand_Site_NavSpots_bracelets.jpg",
      alt: "bracelets",
    },
    {
      id: 4,
      src: "https://www.pandora.net/-/media/Images/Consumer/campaigns/2021/CycleG_Nov_Dec/PLP_banners/NAVSpots/Brand_Site_NavSpots_necklaces.jpg",
      alt: "necklaces",
    },
    {
      id: 5,
      src: "https://www.pandora.net/-/media/Images/Consumer/campaigns/2021/CycleG_Nov_Dec/PLP_banners/NAVSpots/Brand_Site_NavSpots_earrings.jpg",
      alt: "earrings",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{message}</h1>
      <br />
      <br />

      <ImageSlider slides={dummy_images} />
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
          <h3>Here you cann see our new collection!</h3>
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
