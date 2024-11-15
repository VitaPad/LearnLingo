import { BeatLoader } from 'react-spinners';
import css from './Loading.module.css';

function Loading() {
  return (
    <div className={css.loading}>
      {' '}
      <BeatLoader />
    </div>
  );
}
export default Loading;
