import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import Main from '../Main';
import { Card } from '../Utils';
import ButtonSection from '../ButtonSection';
import ReportSection from '../ReportSection';

it('Should render defined sections', () => {
  const wrapper = mount(
    <MockedProvider>
      <Main />
    </MockedProvider>
  );

  expect(wrapper.find('main')).toHaveLength(1);

  expect(wrapper.find(Card)).toHaveLength(2);
  expect(wrapper.find(ButtonSection)).toHaveLength(1);
  expect(wrapper.find(ReportSection)).toHaveLength(1);
});
