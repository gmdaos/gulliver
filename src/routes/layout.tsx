import { component$, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import type { SizeSelected} from '~/context';
import { SizeSelectedContext } from '~/context';
// import Navbar from '~/components/shared/nav-bar/navbar';
// import './style.scss'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  
//* select context: child context
const selectValue = useStore<SizeSelected>({ value: 'cargando...' });
  useContextProvider(SizeSelectedContext, selectValue);
//*
  return (
    <>
        <Slot />
    </>
  );
});
