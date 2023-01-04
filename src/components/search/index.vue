<script>
import { onMounted, ref } from 'vue'
import { onClickOutside, useVModel } from '@vueuse/core'
/**
 * 定义type枚举
 */
const PRIMARY_INPUT = 'primary'
const LONG_INPUT = 'long'
const TYPE_ENUM = [PRIMARY_INPUT, LONG_INPUT]
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: PRIMARY_INPUT,
    validator(val) {
      if (TYPE_ENUM.includes(val)) {
        return true
      } else {
        throw new Error(`Search的类型必须是${TYPE_ENUM.join('、')}`)
      }
    },
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
  },
})

const emits = defineEmits(['update:modelValue', 'search', 'focus', 'blur', 'clear'])

const isTipsShow = ref(false)
const onFocusHandler = () => {
  isTipsShow.value = true
  emits('focus', inputValue.value)
}
const onBlurHandler = () => {
  isTipsShow.value = false
  emits('blur', inputValue.value)
}

const onClearHandler = () => {
  inputValue.value = ''
  emits('clear', inputValue.value)
}

/**
 * 处理输入框双向数据绑定
 */
const inputValue = useVModel(props)

/**
 * 设置长输入框默认显示
 */
onMounted(() => {
  if (props.type === LONG_INPUT) {
    isShow.value = true
  }
})

/**
 * 处理点击事件
 */
const isShow = ref(false)
const onClickHander = () => {
  if (isShow.value && inputValue.value.trim()) {
    emits('search')
  }
  isShow.value = true
}

/**
 * vueuse 点击指定容器外执行隐藏元素
 */
const containerTarget = ref(null)
onClickOutside(containerTarget, () => {
  if (props.type === 'primary' && !inputValue.value) {
    isShow.value = false
    inputValue.value = ''
  }
})
</script>

<template>
  <div
    ref="containerTarget"
    class="relative">
    <transition :name="type === PRIMARY_INPUT && 'input'">
      <input
        v-show="isShow"
        v-model="inputValue"
        :placeholder="placeholder"
        class="font-serif outline-none border-2px border-dark-900"
        :class="
          (type === PRIMARY_INPUT && 'pl-5 pr-17.75 w-90.75 h-11.5 rounded-xl text-xl') ||
          'w-176.75 h-15 pl-5.75 pr-24 py-5.25 rounded-6xl text-2xl'
        "
        type="text"
        @keyup.enter="onClickHander"
        @focus="onFocusHandler"
        @blur="onBlurHandler" />
    </transition>

    <m-svg-icon
      v-show="inputValue"
      name="x-circle"
      class="absolute cursor-pointer"
      :class="(type === PRIMARY_INPUT && 'w-4.75 h-4.75 top-3.5 right-12.5') || 'w-6 h-6 top-4.75 right-16'"
      @click="onClearHandler"></m-svg-icon>

    <m-svg-icon
      name="search"
      class="absolute w-7.5 h-7.5 cursor-pointer"
      :class="(type === PRIMARY_INPUT && 'top-2 right-3') || 'top-3.75 right-6.5'"
      @click="onClickHander"></m-svg-icon>

    <!-- <transition
      v-show="isTipsShow && type !== PRIMARY_INPUT"
      name="fade">
      <div class="absolute flex flex-col w-176.75 h-30 px-3 py-3 rounded-lg bg-light-100 border">
        <div class="flex items-center text-base mb-1 text-zinc-400">
          <span>最近搜索</span>
          <m-svg-icon
            name="trash"
            class="w-6 h-6 ml-1 p-0.5 cursor-pointer duration-300 rounded-sm hover:bg-zinc-100"
            fill-class="fill-zinc-400"
            @click="onDeleteAllClick"></m-svg-icon>
        </div>
        <div class="flex flex-wrap">
          <div
            class="mr-2 mb-1.5 flex items-center cursor-pointer bg-zinc-100 px-1.5 py-0.5 text-zinc-900 text-12xl font-bold rounded-sm duration-300 hover:bg-zinc-200">
            <span>111</span>
            <m-svg-icon
              name="x-circle"
              class="w-4 h-4 p-0.5 ml-1 duration-300 rounded-sm hover:bg-zinc-100"></m-svg-icon>
          </div>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<style scoped lang="scss">
.input-enter-active,
.input-leave-active {
  transition: all 0.25s;
}
.input-enter-from,
.input-leave-to {
  opacity: 0;
  width: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  transform: translateY(40px);
}
</style>
