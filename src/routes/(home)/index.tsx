import {
  component$,
  useSignal,
  $,
  useStore,
  useVisibleTask$,
  useOnWindow,
} from '@builder.io/qwik';
import {
  routeLoader$,
  type DocumentHead,
  Link,
  useNavigate,
} from '@builder.io/qwik-city';
import Navbar from '~/components/shared/nav-bar/navbar';

import './style.scss';
import { getPopularMovies } from '~/helpers/getPopularMovies';
import StoreCard from '~/components/shared/storeCard/storeCard';
import { getAllProducts } from '~/helpers/getAllProducts';
import Test from '~/components/shared/test/test';
import Header from '~/components/shared/header/header';

export const useTheMovies = routeLoader$(async () => {
  const movies = await getPopularMovies();
  return movies;
});

export const useAllproducts = routeLoader$(async () => {
  const response = await getAllProducts();
  // console.log(response);
  return response;
});

export default component$(() => {
  // const urlItem = useSignal('/page');
  const navigate = useNavigate();
  // const data = useStore({value:''})

  const allProducts = useAllproducts();
  // const movies = useTheMovies();

  //*inicio click menu header
  const store = useStore({ isShowNav: false });

  const toggleNav = $(() => {
    store.isShowNav = !store.isShowNav;
  });
  //*fin click menu header

  const goToProduct = $((id: any) => {
    navigate(`/${id}/`);
  });

  //* Obtiene el ancho de header para asignarlo al child
  const width = useSignal(0);
  const refHeader = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    if (refHeader.value) {
      const size = refHeader.value.getBoundingClientRect();
      width.value = size.width;
    }
  });

  //* Detectar el redimencionamiento
  useOnWindow(
    'resize',
    $(() => {
      const resizeWidth = refHeader.value!.getBoundingClientRect();
      width.value = resizeWidth.width;
    })
  );

  return (
    <div class="qwik__main">
      <header ref={refHeader} class="header">
        <Header widthSize={width.value} toggleNav={toggleNav}></Header>
      </header>
      <main class="main">
        <section class="section__liquidation">
          <div class="header__liquidation">
            <h2 class="x1-2 font-b">Liquidación</h2>
            <Link class="go__offer" href="/liquidation">
              Ver todos
            </Link>
          </div>
          <div class="liquidation__containe">

            {/* {movies.value.map((movie: Movies) => {
              return (
                <Link key={movie.id} href="/productCounter/">
                  <StoreCard
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    title={movie.title}
                    overview={movie.overview}
                    vote_average={movie.vote_average.toString()}
                    urlItem={urlItem.value}
                  ></StoreCard>
                </Link>
              );
            })} */}

            {allProducts.value.map((product: any, index: number) => {
              return (
                <Link key={index} onClick$={() => goToProduct(product.id)}>
                  <StoreCard dataProduct={product}></StoreCard>
                </Link>
              );
            })}
          </div>
        </section>
        <Test></Test>
      </main>
      <nav class={['nav', store.isShowNav ? 'show' : '']}>
        <Navbar></Navbar>
      </nav>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
