import React from 'react';
import { mount } from 'enzyme';
import PerPageSelector, { PerPageButton } from './PerPageSelector';

describe('PerPageSelector rendering', () => {
  let wrapper;
  let wrapperLoading;

  beforeEach(() => {
    wrapper = mount(
      <PerPageSelector
        metadata={{ perPage: 25 }}
      />
    );

    wrapperLoading = mount(
      <PerPageSelector
        loading={true}
        metadata={{ perPage: 25 }}
      />
    );
  });

  it('should render defined sections', () => {
    expect(wrapper.find('div.per-page-selector-container')).toHaveLength(1);
    expect(wrapperLoading.find('div.per-page-selector-container')).toHaveLength(1);
  });

  it('should render loading if loading prop is passed', () => {
    expect(wrapperLoading.find('div.per-page-selector-container').text()).toEqual('Loading...');
  });

  it('should render buttons if not loading', () => {
    expect(wrapper.find(PerPageButton)).toHaveLength(3);
  })
});

describe('PerPageButton rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <PerPageButton
        perPage={25}
        value={25}
      />
    );
  });

  it('should render selected class', () => {
    expect(wrapper.find('button').hasClass('selected')).toEqual(true);
  });

  it('should not render selected class', () => {
    wrapper.setProps({ value: 100 })
    expect(wrapper.find('button').hasClass('selected')).toEqual(false);
  });
});
