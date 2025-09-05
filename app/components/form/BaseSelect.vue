<template>
  <div class="base-select">
    <label v-if="label" class="block text-sm font-semibold text-gray-700 mb-3">
      {{ label }}
    </label>
    <div class="relative">
      <select 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
        class="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none transition-all duration-200 text-gray-900 font-medium cursor-pointer hover:border-purple-300"
      >
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <!-- Custom dropdown arrow -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon name="heroicons:chevron-down" class="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  options: Array,
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
