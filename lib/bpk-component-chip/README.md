# bpk-component-chip

> Backpack React Native chip component.

## Installation

Check the main [Readme](https://github.com/skyscanner/backpack-react-native#usage) for a complete installation guide.

## Usage

```js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';
import BpkChip, { BpkDismissibleChip } from 'backpack-react-native/bpk-component-chip';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacingBase,
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      flightsSelected: false,
      showHotels: true,
    };
  }

  dismiss = () => {
    this.setState({
      showHotels: false,
    });
  };

  toggle = () => {
    this.setState({
      flightsSelected: !this.state.flightsSelected,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <BpkChip
          accessibilityLabel="Toggle flights"
          label="Flights"
          onPress={this.toggle}
          selected={this.state.flightsSelected}
        />
        { this.state.showHotels &&
          <BpkDismissibleChip
            accessibilityLabel="Remove hotels"
            label="Hotels"
            onPress={this.dismiss}
          />
        }
      </View>
    );
  }
}
```

## Props

### BpkChip

| Property              | PropType                                                                  | Required | Default Value |
| --------------------- | ------------------------------------------------------------------------- | -------- | ------------- |
| accessibilityLabel    | string                                                                    | true     | -             |
| onPress               | func                                                                      | true     | -             |
| label                 | string                                                                    | true     | -             |
| disabled              | bool                                                                      | false    | false         |
| selected              | bool                                                                      | false    | false         |
| innerChipStyle        | ViewStyle                                                                 | false    | null          |
| type                  | oneOf(CHIP_TYPES)                                                         | false    | primary       |
| leadingAccessoryView  | element                                                                   | false    | null          |

**Note that on Android, `style` should be used for positional styling and `innerChipStyle` should be used for other styling.**
(On iOS, `style` and `innerChipStyle` are applied together so it doesn't matter which you use!)

## `leadingAccessoryView`

 The leading accessory view allows for icons to be placed in front of the text inside the Chip component.

#### Theme Props

* `chipSelectedBackgroundColor`
* `chipSelectedTextColor`
* `chipOutlineSelectedBackgroundColor`
* `chipOutlineSelectedTextColor`

### BpkDismissibleChip

| Property              | PropType                                                                  | Required | Default Value |
| --------------------- | ------------------------------------------------------------------------- | -------- | ------------- |
| accessibilityLabel    | string                                                                    | true     | -             |
| label                 | string                                                                    | true     | -             |
| onPress               | func                                                                      | true     | -             |
| disabled              | bool                                                                      | false    | false         |
| innerChipStyle        | ViewStyle                                                                 | false    | null          |
| type                  | oneOf(CHIP_TYPES)                                                         | false    | primary       |
| leadingAccessoryView  | element                                                                   | false    | null          |

**Note that on Android, `style` should be used for positional styling and `innerChipStyle` should be used for other styling.**
(On iOS, `style` and `innerChipStyle` are applied together so it doesn't matter which you use!)

## `leadingAccessoryView`

 The leading accessory view allows for icons to be placed in front of the text inside the Chip component.