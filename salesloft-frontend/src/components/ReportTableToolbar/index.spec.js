import React from 'react';
import { mount } from 'enzyme';
import ReportTableToolbar from '../ReportTableToolbar';
import PagesSelector from './PagesSelector';
import PerPageSelector from './PerPageSelector';

describe('ReportTableToolbar rendering', () => {

  it('should render defined sections', () => {
    const wrapper = mount(
      <ReportTableToolbar 
        metadata={{total_count: 1}}
      />
    );

    expect(wrapper.find('div.report-table-toolbar')).toHaveLength(1);
    expect(wrapper.find(PagesSelector)).toHaveLength(1);
    expect(wrapper.find(PerPageSelector)).toHaveLength(1);
  });

  it('should render loading if loading prop is passed', () => {
    const wrapper = mount(
      <ReportTableToolbar
        loading={true}
        metadata={{total_count: 1}}
      />
    );

    expect(wrapper.find('span.total-results-container').text()).toEqual('Loading...');
  });
});
