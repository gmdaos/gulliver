import { component$ } from '@builder.io/qwik';
import style from './profileCard.module.scss';


export default component$(() => {
  return (
    <>
      <div class={style.card}>
        <img
          class={style.card__img}
          // eslint-disable-next-line qwik/jsx-img
          src="/public/img/Jisoo.png"
          alt="foto de perfil"
        />
        <p>Bienvenid@</p>
        <p class={style.card__name}>Kim Ji-soo</p>
      </div>
    </>
  );
});
