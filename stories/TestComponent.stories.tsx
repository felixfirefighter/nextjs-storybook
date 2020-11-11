import React from 'react';

import TestComponent from './TestComponent';

export default {
  title: 'Example/TestComponent',
  component: TestComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
