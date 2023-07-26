/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import style from './storeCards.module.scss';
// import { Link } from '@builder.io/qwik-city';

interface Props {
  vote_average: string;
  poster_path: string;
  release_date: string;
  title: string;
  overview: string;
  urlItem?: string;
}

export default component$(
  ({vote_average,poster_path,release_date,title,overview}: // urlItem,
  Props) => {
    // const imgIsLoaded = useSignal(false);

    // const posterSizes = ['w92','w154','w185','w342','w500','w780','original',
    // ];
    // const baseURL = 'https://image.tmdb.org/t/p/';
    // const sizePoster = 'w185';
    // const fullUrl = `${baseURL}${sizePoster}${poster_path}`;

    return (
      <>
        <div class={style.store__card}>
          <div class={style.img__container}>          
            <img
              // onLoad$={() => (imgIsLoaded.value = true)}
              class={style.image}
              src={poster_path}
              alt={title}
            />
          </div>
          <div class={style.info__content}>
            <span class={style.price}>S/ {vote_average}</span>
            <p class={style.info__category}>{release_date}</p>
            <p class={style.info__title}>{title}</p>
            <p class={style.info__desc}>{overview}</p>
          </div>
        </div>
      </>
    );
  }
);
