import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  name: 'bl-input',
  inheritAttrs: false,
  props: {
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    modelValue: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  setup (props, { emit }) {
    const focus = ref(false)

    function input(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return { input, focus }
  },
  render () {
    return h(
      'div',
      {
        class: 'bl-input-wrap relative h-10 mb-5'
      },
      [
        h(
          'input',
          {
            ...this.$attrs,
            type: this.type,
            name: 'name',
            disabled: this.disabled,
            value: this.modelValue,
            placeholder: this.placeholder,
            onInput: this.input,
            onFocus: this.focus = true,
            onBlur: this.focus = false,
            class: [
              'bl-input',
              'h-full',
              'w-full',
              'border-gray-300',
              'px-2',
              'transition-all',
              'border-blue',
              'rounded-sm',
              {
                'empty': !this.modelValue.length
              }
            ]
          }
        ),
        h(
          'label',
          {
            for: 'name',
            class: [
              'absolute',
              'left-2',
              'transition-all',
              'bg-white',
              'px-1'
            ],
          },
          {
            default: () => this.label
          }
        )
      ]
    )
  }
})
