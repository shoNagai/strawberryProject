//
//  SearchTab.js
//  strawberryProject
//
//  Created by 永井翔 on 2017/05/05.
//  Copyright © 2017年 Facebook. All rights reserved.
//

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var SearchTab = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is SearchTab !!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = SearchTab;



