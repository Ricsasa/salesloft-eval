import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import ReportSection from '../ReportSection';
import ReportTable from '../ReportTable';
import ReportTableToolbar from '../ReportTableToolbar';

describe('ReportSection', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider>
        <ReportSection />
      </MockedProvider>
    );
  });

  it('should render defined sections', () => {
    expect(wrapper.find(ReportTableToolbar)).toHaveLength(1);
    expect(wrapper.find(ReportTable)).toHaveLength(1);
  });
});
