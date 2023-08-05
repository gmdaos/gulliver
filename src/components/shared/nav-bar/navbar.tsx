/* eslint-disable qwik/valid-lexical-scope */
/* eslint-disable qwik/jsx-img */
import { component$, useSignal, $ } from '@builder.io/qwik';
import style from './navbar.module.scss';
import ProfileCard from '../profileCard/profileCard';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const isShow = useSignal(false);
  const toogleShow = $(() => {
    isShow.value = !isShow.value;
  });

  const activeItem = useSignal();

  const eventItemHandler = $((value: number) => {
    if (value !== 2 && isShow.value === true) {
      isShow.value = false;
    }
    activeItem.value = value;
  });

  return (
    <div class={style.nav__content}>
      <div class={style.wrap__welcom}>
        <h2 class={[style.brand, 'font-b', 'x2', 'line-h']}>Gulliver</h2>
        <ProfileCard></ProfileCard>
      </div>
      <ul class={style.wrap__menu}>
        <Link>
          <li
            onClick$={() => eventItemHandler(0)}
            class={[style.items, activeItem.value === 0 ? style.active : '']}
          >
            Inicio <span class="icon icon-house"></span>
          </li>
        </Link>
        <Link href="/account/">
          <li
            onClick$={() => eventItemHandler(1)}
            class={[style.items, activeItem.value === 1 ? style.active : '']}
          >
            Cuenta <span class="icon icon-chevronRight"></span>
          </li>
        </Link>
        <Link href="/favorites/">
          <li
            onClick$={() => eventItemHandler(1)}
            class={[style.items, activeItem.value === 1 ? style.active : '']}
          >
            Faboritos <span class="icon icon-chevronRight"></span>
          </li>
        </Link>
        <Link>
          <li
            class={[style.items, activeItem.value === 2 ? style.active : '']}
            onClick$={() => {
              toogleShow();
              eventItemHandler(2);
            }}
          >
            Categorias{' '}
            <span
              class={[
                'icon',
                'icon-chevronDown',
                isShow.value ? style.chevron : '',
              ]}
            ></span>
          </li>
        </Link>
        <ul class={[style.categories, isShow.value && style.show]}>
          <li class={style.menu__category}>Ropas</li>
          <li class={style.menu__category}>Calzados</li>
          <li class={style.menu__category}>Utincilios del hogar</li>
          <li class={style.menu__category}>Utincilios de aseo</li>
          <li class={style.menu__category}>otros</li>
        </ul>
        <li
          onClick$={() => eventItemHandler(3)}
          class={[style.items, activeItem.value === 3 ? style.active : '']}
        >
          Liquidación <span class="icon icon-chevronRight"></span>
        </li>
        <Link href='/shoppingCarrt/'>
          <li
            onClick$={() => eventItemHandler(4)}
            class={[style.items, activeItem.value === 4 ? style.active : '']}
          >
            Carrito <span class="icon icon-chevronRight"></span>
          </li>
        </Link>
      </ul>
      <footer class={style.footer}>
        <div class={style.foot__item}>Soporte</div>
        <div class={style.foot__item}>
          Wharsapp <bold>913268598</bold>
        </div>
        <span class={style.author}>Hecho con ❤ por gmDos</span>
      </footer>
    </div>
  );
});
