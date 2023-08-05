import { component$, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import { SizeSelectedContext, type SizeSelected, FavoriteItems } from '~/context';
import type{ ListProducts } from '~/interfaces/product';


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
  const selectValue = useStore<SizeSelected>({ value: '', id: 0 });
  useContextProvider(SizeSelectedContext, selectValue);
  //*

  //*Lista de favoritos
  const favorites = useStore<ListProducts>({ array: [] })
  useContextProvider(FavoriteItems, favorites)
  //*fin lista de favoritos
  return (
    <>
      <Slot />
    </>
  );
});
