<template>
  <div class="paginator-container">
    <v-pagination
    :length="3"
    :total-visible="3"
    :start="startPage"
    @update:modelValue="(val)=>currentPage = val"
    ref="paginationRef"
    >
      <template #prev>
        <div class="prev-btn basic center" @click="clickPrevNext('prev')">
          <img :src="PrevIcon" alt="prev" :class="[disabledPrevBtn ? 'inactive' : '']">
        </div>
      </template>
      <template #item="{page}">
        <div class="paginator-item basic center" :class="[page == currentPage ? 'active' : '']">{{ page }}</div>
      </template>
      <template #next>
        <div class="next-btn basic center" @click="clickPrevNext('next')">
          <img :src="NextIcon" alt="next" :class="[disabledNextBtn ? 'inactive' : '']">
        </div>
      </template>
    </v-pagination>
  </div>

</template>
<script setup>
import {ref, defineProps, computed} from 'vue'
import PrevIcon from "../assets/prev-arrow.svg"
import NextIcon from "../assets/next-arrow.svg"
// styles
import './Paginator.styles.scss'; // 引入樣式文件

const props = defineProps({
  dataLength: {
    type: Number,
    default: 56
  },
  dataPerPage: {
    type: Number,
    default: 6
  }
})

const currentPage = ref(1)
const paginationRef = ref(null)
const maxPage = computed(()=>{
  const pageCounts = props.dataLength/props.dataPerPage
  const ceil = Math.ceil(props.dataLength/props.dataPerPage)
  if (ceil - pageCounts) return ceil
  else {
    return Math.floor(props.dataLength/props.dataPerPage)
  }
})

const startPage = computed(()=>{
  const currentPageNum = currentPage.value
  const maxPageNum = maxPage.value
  if (currentPageNum === 1) return 1
  else if (currentPageNum === maxPageNum) return maxPageNum - 2
  else return currentPageNum - 1

})

const disabledPrevBtn = computed(()=>{
  return currentPage.value === 1
})
const disabledNextBtn = computed(()=>{
  return currentPage.value === maxPage.value
})
function clickPrevNext(type) {
  if (type === 'prev' && currentPage.value > 1) {
    currentPage.value--;
  } else if (type === 'next' && currentPage.value < maxPage.value) {
    currentPage.value++;
  }
}

</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.basic {
  width: 40px;
  height: 40px;
  background: rgba(234, 243, 244, 1);
  cursor: pointer;
}


.paginator-item {
  color: rgba(87, 87, 87, 1);
  user-select: none;
  &.active {
    color: white;
    background: rgba(113, 175, 182, 1);

  }
}

.prev-btn,.next-btn {
  user-select: none;
}
.prev-btn {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.next-btn {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.inactive {
  opacity: 0.5;
}
</style>
