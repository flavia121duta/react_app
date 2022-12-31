import classes from './StartingPageContent.module.css';

import Title from '../UI/Title';
import ImageSlider from '../UI/ImageSlider';
import ImageScroll from '../UI/ImageScroll';
import dummy_images from '../../assets/dummy_images';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <Title />
      <ImageSlider slides={dummy_images} />
      <ImageScroll />
    </section>
  );
};

export default StartingPageContent;
