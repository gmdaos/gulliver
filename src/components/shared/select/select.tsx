import { component$, useSignal, $, useContext } from '@builder.io/qwik';
import Style from './select.module.scss';
import { SizeSelectedContext } from '~/context';

export interface SelectProps {
  sizeObject: any;
}
export default component$<SelectProps>((prop) => {
  const isShowOptions = useSignal(false);
  const optionSelected = useSignal(0);
  const refValueContent = useSignal<Element>();

  //* Actualizar los valores del SizeSelectedContext
  const sizeSelectContext = useContext(SizeSelectedContext);

  //*Click togle selected
  const toggleShowOptions = $(() => {
    isShowOptions.value = !isShowOptions.value;
  });

  //*Select a options item
  const handlerSelected = $((index: number, event: HTMLElement) => {
    optionSelected.value = index;
    isShowOptions.value = false;
    const valueSelectContent = event.parentElement?.previousElementSibling;
    valueSelectContent!.textContent = event.textContent!;
    sizeSelectContext.value = event.textContent!;
    sizeSelectContext.id = index;
  });
  
  //*Array de items Select
  const sizes = prop.sizeObject.allSize.map((item: any) => (
    <div
      onClick$={(event) =>
        handlerSelected(item.id, event.target as HTMLElement)
      }
      class={Style.items}
      key={item.id}
    >
      {item.size}
    </div>
  ));

  return (
    <>
      <div class={Style.Select__container}>
        <div
          ref={refValueContent}
          onClick$={() => toggleShowOptions()}
          class={Style.value__select}
        >
          Elige una talla
        </div>
        <div
          class={[
            Style.items__container,
            isShowOptions.value ? Style.show : '',
          ]}
        >
          {sizes}
        </div>
      </div>
    </>
  );
});
