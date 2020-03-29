import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import DuplicatesReport, { DuplicatesRow } from '../DuplicatesReport';
import { LoadingIcon, Table } from '../Utils';

jest.mock('../../data/useQueryForReports', () => ({
  useQueryForReports: jest.fn(() => [
    false,
    [
      {
        'id': '101694754',
        'display_name': 'Demond Weber',
        'email_address': 'camron.nisolac@harber.co',
        'title': 'Chief Accountability Representative',
      },
      {
        'id': '101694752',
        'display_name': 'Alene Gleason',
        'email_address': 'madison@dubuque.name',
        'title': 'Legacy Intranet Developer',
      },
      {
        'id': '101694750',
        'display_name': 'Jermey Bruen',
        'email_address': 'anesl.howe@padbergbins.info',
        'title': 'District Interactions Analyst',
      }
    ],
    null
  ])
}));

import { useQueryForReports } from '../../data/useQueryForReports';

jest.mock('../../data/dataProcessor', () => ({
  generateDuplicateReport: jest.fn(() =>
    new Map([['original1', 'duplicated1'], ['original2', 'duplicated2']])
  )
}));

import { generateDuplicateReport } from '../../data/dataProcessor';

describe('DuplicatesReport', () => {
  it('should render defined sections', () => {
    const wrapper = mount(
      <MockedProvider>
        <DuplicatesReport />
      </MockedProvider>
    );
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it('should render loading', () => {
    // loading state
    useQueryForReports.mockReturnValue([true, [], null]);

    const wrapper = mount(
      <MockedProvider>
        <DuplicatesReport />
      </MockedProvider>
    );

    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(LoadingIcon)).toHaveLength(1);
  });

  it('should render if duplicates exist', () => {

    useQueryForReports.mockReturnValue([false, [
      {
        'id': '101694754',
        'display_name': 'Demond Weber',
        'email_address': 'camron.nisolac@harber.co',
        'title': 'Chief Accountability Representative',
      },
      {
        'id': '101694752',
        'display_name': 'Alene Gleason',
        'email_address': 'madison@dubuque.name',
        'title': 'Legacy Intranet Developer',
      },
      {
        'id': '101694750',
        'display_name': 'Jermey Bruen',
        'email_address': 'anesl.howe@padbergbins.info',
        'title': 'District Interactions Analyst',
      }
    ], null]);

    const wrapper = mount(
      <MockedProvider>
        <DuplicatesReport />
      </MockedProvider>
    );

    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(LoadingIcon)).toHaveLength(0);
    expect(wrapper.find(DuplicatesRow)).toHaveLength(2);
  });

  it('should render error', () => {
    // error
    useQueryForReports.mockReturnValue([true, [], 'error']);

    const wrapper = mount(
      <MockedProvider>
        <DuplicatesReport />
      </MockedProvider>
    );

    expect(wrapper.find(DuplicatesReport).text()).toEqual('Error! error');
  });

  it('should render message if no duplicates found', () => {
    useQueryForReports.mockReturnValue([false, [], null]);
    generateDuplicateReport.mockReturnValue(new Map([]));

    const wrapper = mount(
      <MockedProvider>
        <DuplicatesReport />
      </MockedProvider>
    );

    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(LoadingIcon)).toHaveLength(0);
    expect(wrapper.find(DuplicatesRow)).toHaveLength(0);
    expect(wrapper.find('div.loading-container').text()).toEqual('No Duplicates Found!');
  });
});
