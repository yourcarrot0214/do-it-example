import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input> Test', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  // 1. find() 함수로 엘리먼트 출력 검사하기
  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  // 2. prop(), props() 함수로 프로퍼티에 전달된 값 검증하기
  it('assigns the prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    expect(wrapper.find('input').prop('value')).toBe('123');
    expect(wrapper.find('input').prop('id')).toBe('input_test_name');
    const { type, value } = wrapper.find('input').props();
    expect(value).toBe('123');
    expect(type).toBe('text');
  });
});

describe('setProps() 함수로 변경된 프로퍼티값 전달하기', () => {
  it('renddders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });
});

describe('<Input> simulate()', () => {
  it('calls back onChange on input change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
  });
});

/*
  shallow() 함수로 컴포넌트를 검사할 수 있는 enzyme 객체를 얻었으며, enzyme에 포함되어 있는 find() 함수로 엘리먼트를 추출함.
  추출된 값은 배열ㅇ형이며, expect() 함수가 반환한 배열의 길이를 toHaveLength() 함수로 검사함.
  이렇게 하면 Input 컴포넌트가 출력하는 엘리먼트(label, input)의 개수를 검사할 수 있다.
*/
