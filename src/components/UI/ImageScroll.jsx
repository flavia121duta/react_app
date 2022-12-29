import styles from "./ImageScroll.module.css";

const ImageScroll = (props) => {
    return <div className={styles.wrapper}>
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
}

export default ImageScroll;