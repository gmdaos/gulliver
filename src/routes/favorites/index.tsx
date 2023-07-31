import { component$, useStore } from '@builder.io/qwik';
import HeaderGeneral from '~/components/shared/header-general/headerGeneral';

export default component$(() => {
  const cloths = useStore(
    {
      array: ['shirt', 'pants', 'sweater', 'coat', 'cap', 'underwear'],
    },
    {
      deep: true,
    }
  );
  return (
    <>
      <div class="qwik__content">
        <header>
          <HeaderGeneral></HeaderGeneral>
        </header>
        <main class="main__favorites">
          <h1>My Faborits items</h1>
          <ul>
            {cloths.array.map((cloth) => (
              <div key={cloth}>{cloth}</div>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
});
