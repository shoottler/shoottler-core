<template>
  <div :class="['spinner-container', { 'full-width': fullWidth || cover, 'full-height': fullHeight || cover}]">
    <component
      :is="cVariant"
      :size="cSize" ></component>
    <div class="spinner-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import * as Spinner from 'vue-loading-spinner'

export const COMPONENTS = _.mapKeys(Spinner, (value, key) => `Spinner${key}`)

export default {
  name      : 'LoadingSpinner',
  components: { ...COMPONENTS },
  props     : {
    variant: {
      type     : String,
      default  : 'rotate-square',
      validator: function (value) {
        return _.keys(Spinner).indexOf(_.pascalCase(value)) !== -1
      },
    },
    size: {
      type   : Number,
      default: 40,
    },
    fullWidth : Boolean,
    fullHeight: Boolean,
    cover     : Boolean,
  },
  computed: {
    cVariant () {
      return `Spinner${_.pascalCase(this.variant)}`
    },
    cSize () {
      return `${this.size}px`
    },
  },
}
</script>
