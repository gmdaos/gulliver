/* eslint-disable qwik/jsx-img */
import { component$, $, useSignal, useContext } from '@builder.io/qwik';
import style from './storeCards.module.scss';
import type { Product } from '~/interfaces/product';
import { FavoriteItems } from '~/context';

interface Props {
  dataProduct: Product;
}

export default component$(
  ({ dataProduct }: // urlItem,
    Props) => {
    // const imgIsLoaded = useSignal(false);

    // const posterSizes = ['w92','w154','w185','w342','w500','w780','original',
    // ];
    // const baseURL = 'https://image.tmdb.org/t/p/';
    // const sizePoster = 'w185';
    // const fullUrl = `${baseURL}${sizePoster}${poster_path}`;

    const isFavorite = useSignal<boolean>(false)
    const favorites = useContext(FavoriteItems)
   
    
    const handlerClickFavorites = $((e: Event) => {
      isFavorite.value = !isFavorite.value
      e.stopPropagation()
      if (isFavorite.value) {
        favorites.array.push(dataProduct!)
      }
    });

    const handleClickShared = $((e: Event) => {
      e.stopPropagation()
    })

    return (
      <>
        <div class={style.store__card}>
          <div class={style.img__container}>
            <img
              // onLoad$={() => (imgIsLoaded.value = true)}
              class={style.image}
              src={dataProduct.image}
              alt={dataProduct.title}
            />
            <span onClick$={(e: any) => handlerClickFavorites(e)} class={[style.btn__favorite, 'icon', 'icon-heart', isFavorite.value ? style.active : '']}></span>
            <span onClick$={(e) => handleClickShared(e as any)} class={[style.btn__shared, 'icon', 'icon-share-nodes']}></span>
          </div>
          <div class={style.info__content}>
            <span class={style.price}>S/ {dataProduct.price}</span>
            <p class={style.info__category}>{dataProduct.category}</p>
            <p class={style.info__title}>{dataProduct.title}</p>
            <p class={style.info__desc}>{dataProduct.description}</p>
          </div>
          {/* <div class={style.card__btnContent}>
            <button onClick$={handlerClickFavorites}><span class='btn btn__primary icon icon-heart'></span></button>
            <button onClick$={() => { }}><span class='btn btn__primary icon icon-share-nodes'></span></button>
          </div> */}
        </div>
      </>
    );
  }
);
