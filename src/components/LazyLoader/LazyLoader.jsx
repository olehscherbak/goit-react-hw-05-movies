import { ThreeCircles } from 'react-loader-spinner';
import css from './LazyLoader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <ThreeCircles
        outerCircleColor="#3a3afa"
        innerCircleColor="#177bdf"
        middleCircleColor="#4068c5"
      />
    </div>
  );
}
