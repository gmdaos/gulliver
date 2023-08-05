import { component$, type QRL } from '@builder.io/qwik';
import style from './header.module.scss';

// import { routeLoader$ } from '@builder.io/qwik-city';

export interface HeaderProps {
  toggleNav: QRL<() => void>;
  widthSize: number;
}

export default component$<HeaderProps>(({toggleNav,widthSize}) => {
  return (
    <div style={`width:${widthSize + 7}px`} class={style.header__content}>
      <div class={style.brand}>Gulliver</div>
      <div class={style.menu__search}>
        <input
          type="search"
          name="search"
          autoComplete="off"
          placeholder="Buscar"
        />
        <span class={[style.btn__search, 'icon', 'icon-search']}></span>
        <span
          onClick$={toggleNav}
          class={[style.btn__menu, 'icon', 'icon-menu']}
        ></span>
      </div>
    </div>
  );
});
