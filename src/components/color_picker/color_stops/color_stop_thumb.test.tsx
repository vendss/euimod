import React from 'react';
import { render } from 'enzyme';

import { EuiColorStopThumb } from './color_stop_thumb';

import { requiredProps } from '../../../test';

jest.mock('../../portal', () => ({
  // @ts-ignore
  EuiPortal: ({ children }) => children,
}));

const onChange = jest.fn();

// Note: Unit/interaction tests can be found in ./color_stops.test

test('renders EuiColorStopThumb', () => {
  const thumb = render(
    <EuiColorStopThumb
      onChange={onChange}
      stop={0}
      color="#FF0000"
      localMin={0}
      localMax={24}
      globalMin={0}
      globalMax={100}
      colorPickerMode="default"
      isPopoverOpen={false}
      openPopover={() => {}}
      closePopover={() => {}}
      {...requiredProps}
    />
  );
  expect(thumb).toMatchSnapshot();
});

test('renders swatch-only EuiColorStopThumb', () => {
  const thumb = render(
    <EuiColorStopThumb
      onChange={onChange}
      stop={0}
      color="#FF0000"
      localMin={0}
      localMax={24}
      globalMin={0}
      globalMax={100}
      colorPickerMode="swatch"
      isPopoverOpen={false}
      openPopover={() => {}}
      closePopover={() => {}}
      {...requiredProps}
    />
  );
  expect(thumb).toMatchSnapshot();
});

test('renders picker-only EuiColorStopThumb', () => {
  const thumb = render(
    <EuiColorStopThumb
      onChange={onChange}
      stop={0}
      color="#FF0000"
      localMin={0}
      localMax={24}
      globalMin={0}
      globalMax={100}
      colorPickerMode="picker"
      isPopoverOpen={false}
      openPopover={() => {}}
      closePopover={() => {}}
      {...requiredProps}
    />
  );
  expect(thumb).toMatchSnapshot();
});

test('renders disabled EuiColorStopThumb', () => {
  const thumb = render(
    <EuiColorStopThumb
      onChange={onChange}
      stop={0}
      color="#FF0000"
      localMin={0}
      localMax={24}
      globalMin={0}
      globalMax={100}
      colorPickerMode="default"
      disabled={true}
      isPopoverOpen={false}
      openPopover={() => {}}
      closePopover={() => {}}
      {...requiredProps}
    />
  );
  expect(thumb).toMatchSnapshot();
});

test('renders readOnly EuiColorStopThumb', () => {
  const thumb = render(
    <EuiColorStopThumb
      onChange={onChange}
      stop={0}
      color="#FF0000"
      localMin={0}
      localMax={24}
      globalMin={0}
      globalMax={100}
      colorPickerMode="default"
      readOnly={true}
      isPopoverOpen={false}
      openPopover={() => {}}
      closePopover={() => {}}
      {...requiredProps}
    />
  );
  expect(thumb).toMatchSnapshot();
});
