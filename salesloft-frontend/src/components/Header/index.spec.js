import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';

it('Should render defined sections', () => {
  const wrapper = mount(
    <Header />
  );

  expect(wrapper.find('header')).toHaveLength(1);

  expect(wrapper.find('div.title-section')).toHaveLength(1);
  expect(wrapper.find('div.author-section')).toHaveLength(1);
  expect(wrapper.find('div.links-section')).toHaveLength(1);
});
