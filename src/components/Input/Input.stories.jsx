import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
  args:{
    placeholder: 'Mi Input'
  }
}


const Template = (args) => <Input {...args}></Input>

export const Primary = Template.bind({})