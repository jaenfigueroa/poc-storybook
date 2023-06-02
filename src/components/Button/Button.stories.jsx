import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Mi Boton',
    type: 'primary'
  }
}

const Template = (args) => <Button {...args} />

/* BOTON PRIMARIO */
export const Primary = Template.bind({})

/* BOTON SECUNDARIO */
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Mi boton secondario',
  type: 'secondary'
}

/* BOTON TERCIARIO */
export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Mi boton terciario',
  type: 'tertiary'
}

