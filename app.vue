<script setup lang="ts">
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { ref } from 'vue';
import { useGrid } from './use-grid';

const { dataGridRef, TheGrid } = useGrid();

function handleClick() {
  dataGridRef.value.instance.option('dataSource', [
    { n: 'Max' },
    { n: 'Lukas' },
  ]);
}
</script>

<template>
  <ClientOnly>
    <div class="dx-viewport">
      <div>
        <TheGrid>
          <DxColumn caption="ABC" data-field="n" />
        </TheGrid>
      </div>
      <div>
        <button @click="handleClick()">do something</button>
      </div>
    </div>
  </ClientOnly>
</template>
