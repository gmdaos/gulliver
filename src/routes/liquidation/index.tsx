import { component$ } from '@builder.io/qwik';
import './liquidation.scss'
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
        <h1> Pagina de liquidación</h1>
        <Link href='/'>
          regresar a base
        </Link>
    </>
  )
});