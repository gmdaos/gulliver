/* eslint-disable qwik/use-method-usage */
/* eslint-disable no-undef */
// eslint-disable-next-line qwik/use-method-usage, no-undef

//*Uso correcto de Los custume HOOKS°°!!!
useHook(); // <-- ❌ No funcionará por estar fuera de component$
 
export default component$(() => {
  useCustomHook(); // <-- ✅ Dentro de component$ y en la raíz
  if (condition) {
    useHook(); // <-- ❌ Aunque esté dentro de component$, no está en la raíz
  }
  useTask$(() => {
    useNavigate(); // <-- ❌ No podemos usar un hook dentro de otro
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myQrl = $(() => useHook()); // <-- ❌ Debe de estar en la raíz
  return <button onClick$={() => useHook()}></button>; // <-- ❌ No se puede con acciones
});

// Dentro de una función denominada custom hook funciona como en component$
function useCustomHook() {
  useHook(); // <-- ✅ Funciona por estar en raíz
  if (condition) {
    useHook(); // <-- ❌ No está en la raíz, está dentro de condición
  }
}