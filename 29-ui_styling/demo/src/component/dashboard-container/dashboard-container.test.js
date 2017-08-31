import React from 'react';
import {shallow} from 'enzyme';

import DashboardContainer from './index.js';
import createAppStore from '../../lib/store.js';

describe('Dashboard Container Component', () => {
  test('it should have a category props', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore} />);
    expect(wrapper.props().categories).toEqual([]);
  })

  test('it should be able to create categories', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore} />);

    expect(wrapper.props().categories).toEqual([]);
    wrapper.props().categoryCreate({ title: 'test category' });
    let {categories} = mockStore.getState();
    expect(categories[0].title).toEqual('test category');
  })
})
