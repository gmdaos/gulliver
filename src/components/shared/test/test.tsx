/* eslint-disable qwik/jsx-img */
import { component$, $, useSignal, useStore } from '@builder.io/qwik';
import style from './test.module.scss';

export default component$(() => {
  const activeItem = useSignal(0);
  const allChecked = useSignal(0)
  
  const eventHandler = $((index: number) => {
    activeItem.value = index;
  });

  const container = useSignal<Element>()

  const arrInputsCrete = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const countCheckbox = useStore({ arrayIn: [] as any })

  const checkedCount = $(() => {
    const checkboxes = container.value?.querySelectorAll('input[type=checkbox]')
    const checkboxesArray = Array.from(checkboxes!)
    countCheckbox.arrayIn = checkboxesArray.filter((e: any) => e.checked)
    return countCheckbox
  })

  const handlerInput = $(async () => {
    const { arrayIn } = await checkedCount()
    allChecked.value = Object.keys(arrayIn).length;
  })
  return (
    <>
      <div>
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
      </div>
      <div ref={container} class={style.inputs}>
        <div class=''>
          {arrInputsCrete.map((item) => (
            <label key={item} form={item} class=''>
              <input onInput$={handlerInput} type="checkbox" name="" id={item} />
              <span class={style.check}></span>
              Item: {item}
            </label>
          ))}
        </div>
      </div>
    </>
  );
});
