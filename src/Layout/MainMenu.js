/*
 2021.02.19 | junghoon15 | created
*/

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

interface SubMenuList {
  name: string;
  icon: string;
}

const MainMenu = () => {
  // State ---------------------------------------------------------------------
  const [isExpanded, setIsExpanded] = useState(false);
  // Function ------------------------------------------------------------------
  // Main ----------------------------------------------------------------------
  return (
    <View>
      {/* 메뉴 헤더 시작 */}
      <View style={styles.headerView}>
        <Text>빌딩</Text>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={15} />
        </TouchableOpacity>
      </View>
      {/* 메뉴 헤더 끝 */}

      {/* 메뉴 목록 시작 */}
      {isExpanded && <Text>hi</Text>}
      {/* 메뉴 목록 끝 */}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default MainMenu;
