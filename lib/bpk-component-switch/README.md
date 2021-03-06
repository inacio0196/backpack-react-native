# bpk-component-switch

> Backpack React Native switch component.

## Installation

Check the main [Readme](https://github.com/skyscanner/backpack-react-native#usage) for a complete installation guide.

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BpkSwitch from 'backpack-react-native/bpk-component-switch';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacingBase,
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BpkSwitch />
        <BpkSwitch value />
      </View >
    );
  }
}
```

## Props

| Property            | PropType                              | Required | Default Value |
| -----------         | ------------------------------------- | -------- | ------------- |
| value               | bool                                  | false    | false         |
| theme               | See [Theme Props](#theme-props) below | false    | null          |

## Theme Props

* `switchPrimaryColor`
