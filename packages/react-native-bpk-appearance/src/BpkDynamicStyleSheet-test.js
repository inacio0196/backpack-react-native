/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import BpkDynamicStyleSheet from './BpkDynamicStyleSheet';

const style = {
  shadowColor: { light: '#fff', dark: '#f0f' },
  backgroundColor: { light: '#fff', dark: '#f0f' },
  borderColor: { light: '#fff', dark: '#f0f' },
  borderBottomColor: { light: '#fff', dark: '#f0f' },
  borderEndColor: { light: '#fff', dark: '#f0f' },
  borderLeftColor: { light: '#fff', dark: '#f0f' },
  borderRightColor: { light: '#fff', dark: '#f0f' },
  borderStartColor: { light: '#fff', dark: '#f0f' },
  borderTopColor: { light: '#fff', dark: '#f0f' },
  color: { light: '#fff', dark: '#f0f' },
  textShadowColor: { light: '#fff', dark: '#f0f' },
  textDecorationColor: { light: '#fff', dark: '#f0f' },
  overlayColor: { light: '#fff', dark: '#f0f' },
  tintColor: { light: '#fff', dark: '#f0f' },
};

const colorProps = Object.keys(style);

describe('BpkDynamicStyleSheet', () => {
  const subject = BpkDynamicStyleSheet.create({
    view: {
      ...style,
      fontFamily: 'arial',
      resizeMode: 'contain',
      flex: 1,
    },
  });

  it.each(colorProps)('parses semantic colors for `%s` prop', colorProp => {
    expect(subject.light.view[colorProp]).toBe('#fff');
    expect(subject.dark.view[colorProp]).toBe('#f0f');
  });

  it('parses extra props', () => {
    expect(subject.light.view.fontFamily).toBe('arial');
    expect(subject.light.view.resizeMode).toBe('contain');
    expect(subject.light.view.flex).toBe(1);

    expect(subject.dark.view.fontFamily).toBe('arial');
    expect(subject.dark.view.resizeMode).toBe('contain');
    expect(subject.dark.view.flex).toBe(1);
  });
});