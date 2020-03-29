import React from 'react';
import { mount } from 'enzyme';
import ReportTable, { ReportTableRow } from './';
import { LoadingIcon, Table } from '../Utils';

describe('ReportTable rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReportTable
        loading={false}
        people={
          [
            { id: '1', display_name: 'Ricardo', email_address: 'ricsasa201@gmail.com', title: 'Fullstack developer' },
            { id: '2', display_name: 'Ricardo', email_address: 'ricsasa201@gmail.com', title: 'Fullstack developer' },
            { id: '3', display_name: 'Ricardo', email_address: 'ricsasa201@gmail.com', title: 'Fullstack developer' },
            { id: '4', display_name: 'Ricardo', email_address: 'ricsasa201@gmail.com', title: 'Fullstack developer' },
            { id: '5', display_name: 'Ricardo', email_address: 'ricsasa201@gmail.com', title: 'Fullstack developer' },
          ]
        }
      />
    );
  });

  it('should render defined sections', () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it('should render loading if loading prop is passed', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(LoadingIcon)).toHaveLength(1);
  });

  it('should render 5 ReportTableRows', () => {
    expect(wrapper.find(ReportTableRow)).toHaveLength(5);
  });
});
