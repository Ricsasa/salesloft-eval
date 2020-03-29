import React from 'react';
import { mount } from 'enzyme';
import ButtonSection from '../ButtonSection';
import { ReportBehaviorButton } from '../Utils';

it('Should render 4 ReportBehaviorButton', () => {
  const buttonSection = mount(
    <ButtonSection />
  );

  expect(buttonSection.find(ReportBehaviorButton)).toHaveLength(4);
});
