<template>
  <v-pagination 
  :length="3" 
  :start="startPage"
  v-model="currentPage"
  >
 <template #prev="{disabled}">
    <div class="prev-btn basic center" @click="clickPrevNext('prev')" >
      <img :src="PrevIcon" alt="prev" :class="[disabled?'inactive':'']">
    </div>
  </template>
    <template #item="{isActive,page}">
     <div class="paginator-item basic center" :class="[isActive?'active':'']">{{ page }}</div>
    </template>
    <template #next="{disabled}">
    <div class="next-btn basic center" @click="clickPrevNext('next')">
      <img :src="NextIcon" alt="next" :class="[disabled?'inactive':'']">
    </div>
  </template>
  </v-pagination>
</template>
<script setup>
import {ref, defineProps, computed, toRaw} from 'vue'
import PrevIcon from "../assets/prev-arrow.svg"
import NextIcon from "../assets/next-arrow.svg"

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

const maxPage = computed(()=>{
  const pageCounts = props.dataLength/props.dataPerPage
  const ceil = Math.ceil(props.dataLength/props.dataPerPage)
  if (ceil - pageCounts) return ceil 
  else {
    return Math.floor(props.dataLength/props.dataPerPage)
  }
})

const startPage = computed(()=>{
  const currentPageNum = toRaw(currentPage.value)
  const maxPageNum = toRaw(maxPage.value)
  if (currentPageNum === 1) return 1
  else if (currentPageNum === maxPageNum) return maxPageNum - 2
  else return currentPageNum - 1

})

function  clickPrevNext(type) {
  if (type === 'prev') {
    if (currentPage.value === 1) return
    currentPage.value --
  } else {
    if (currentPage.value === maxPage.value) return
    currentPage.value ++
  }
}

</script>

<style scoped lang="scss">
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