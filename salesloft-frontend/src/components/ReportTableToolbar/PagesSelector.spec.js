import React from 'react';
import { mount } from 'enzyme';
import PagesSelector from './PagesSelector';

describe('PagesSelector rendering', () => {
  let wrapper;
  let wrapperLoading;

  beforeEach(() => {
    wrapper = mount(
      <PagesSelector
        loading={false}
        metadata={{
          total_count: 1,
          current_page: 1,
          next_page: null,
          prev_page: null,
          total_pages: 1
        }}
      />
    );

    wrapperLoading = mount(
      <PagesSelector
        loading={true}
        metadata={{ total_count: 1 }}
      />
    );
  });

  it('should render defined sections', () => {
    expect(wrapper.find('div.pages-selector-container')).toHaveLength(1);
    expect(wrapperLoading.find('div.pages-selector-container')).toHaveLength(1);
  });

  it('should render loading if loading prop is passed', () => {
    expect(wrapperLoading.find('div.pages-selector-container').text()).toEqual('Loading...');
  });

  it('should not show prev page button if prev_page prop is null', () => {
    wrapper.setProps({ metadata: { prev_page: null } });
    expect(wrapper.find('button[data-increment="decrement"]').hasClass('disabled')).toEqual(true);
  });

  it('should not show next page button if next_page prop is null', () => {
    wrapper.setProps({ metadata: { next_page: null } });
    expect(wrapper.find('button[data-increment="increment"]').hasClass('disabled')).toEqual(true);
  });

  it('should show prev page button if prev_page prop is not null', () => {
    wrapper.setProps({ metadata: { prev_page: 2 } });
    expect(wrapper.find('button[data-increment="decrement"]').hasClass('disabled')).toEqual(false);
  });

  it('should show next page button if next_page prop is not null', () => {
    wrapper.setProps({ metadata: { next_page: 2 } });
    expect(wrapper.find('button[data-increment="increment"]').hasClass('disabled')).toEqual(false);
  });
});
