import { ref } from '@vue/reactivity';
import BlInput from './index';
import { Meta } from '@storybook/vue3'

export default {
  title: 'Components/BLInput',
  component: BlInput,
} as Meta;

console.warn(BlInput);

const Template = (args: any,) => ({
  components: { BlInput },
  template: '<bl-input v-bind="args" />',
  setup() {
    return { args };
  },
});

export const Input = Template.bind({});

Input.args = {
  placeholder: '',
  type: 'text',
  label: 'name',
  modelValue: '',
  disabled: false
}
