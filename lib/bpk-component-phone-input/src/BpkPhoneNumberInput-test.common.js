/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
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

/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from 'react-native';

import BpkPhoneNumberInput from './BpkPhoneNumberInput';

const onPressFn = jest.fn();

const commonTests = () => {
  describe('BpkPhoneNumberInput', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(
          <BpkPhoneNumberInput
            label="Phone number"
            value=""
            dialingCode={{
              id: 'UK',
              dialingCode: '+44',
              name: 'United Kingdom',
            }}
            onDialingCodePress={onPressFn}
            renderFlag={() => <Image />}
            editable
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render correctly with `editable` false', () => {
      const tree = renderer
        .create(
          <BpkPhoneNumberInput
            label="Phone number"
            value=""
            dialingCode={{
              id: 'UK',
              dialingCode: '+44',
              name: 'United Kingdom',
            }}
            onDialingCodePress={onPressFn}
            renderFlag={() => <Image />}
            editable={false}
          />,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
};

export default commonTests;
