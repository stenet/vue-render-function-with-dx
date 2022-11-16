import { DxDataGrid } from 'devextreme-vue/data-grid';
import { h, ref } from 'vue';

export function useGrid() {
  const dataGridRef = ref();

  const TheGrid = (props: any, context: any) => {
    return h(
      DxDataGrid,
      {
        ref: dataGridRef,
        dataSource: [{ n: 'Dummy' }],
        ...context.attrs,
      },
      () => context.slots.default()
    );
  };

  return {
    dataGridRef,
    TheGrid,
  };
}
