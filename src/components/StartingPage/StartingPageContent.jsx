import classes from './StartingPageContent.module.css';

import Title from '../UI/Title';
import ImageSlider from '../UI/ImageSlider';
import ImageScroll from '../UI/ImageScroll';
import dummy_images from '../../assets/dummy_images';
import Newsletter from '../UI/Newsletter';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <Title />
      <ImageSlider slides={dummy_images} />
      <ImageScroll />
      <Newsletter />
    </section>
  );
};

export default StartingPageContent;
