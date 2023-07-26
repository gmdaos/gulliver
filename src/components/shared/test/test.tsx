/* eslint-disable qwik/jsx-img */
import { component$, $, useSignal } from '@builder.io/qwik';
import style  from './test.module.scss';

export default component$(() => {
  const activeItem = useSignal(0);

  const eventHandler = $((index: number) => {
    activeItem.value = index;
  });

  return (
    <>
      <div class={style.container} onClick$={() => eventHandler(0)}>
        Uno de los dos está: {activeItem.value === 0 ? 'Activo' : '....'}
      </div>
      <div onClick$={() => eventHandler(1)}>
        Uno de los dos está: {activeItem.value === 1 ? 'Activo' : '....'}
      </div>
      <div onClick$={() => eventHandler(2)}>
        Uno de los dos está: {activeItem.value === 2 ? 'Activo' : '....'}
      </div>
      <div onClick$={() => eventHandler(3)}>
        Uno de los dos está: {activeItem.value === 3 ? 'Activo' : '....'}
      </div>
      <div onClick$={() => eventHandler(4)}>
        Uno de los dos está: {activeItem.value === 4 ? 'Activo' : '....'}
      </div>
    </>
  );
});
