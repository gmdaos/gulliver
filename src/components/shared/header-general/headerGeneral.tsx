import { Slot, component$ } from '@builder.io/qwik';
import style from './headerGeneral.module.scss';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class={style.headerGeneral__ontent}>
        <div class={style.btn__brandSection}>
          <Link href='/'>
            <span class={[style.home,'icon icon-house']}></span>
          </Link>
          <Link href='/'>
          <span class={[style.brand,'x1-5','font-b','line-h']}>Gulliver</span>
          </Link>
        </div>
        <Slot />
      </div>
    </>
  );
});
