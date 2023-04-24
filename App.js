// 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
// 이렇게 상단에 선언한다음 가져다가 사용
import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// App.js는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일
export default function App() {
  console.disableYellowBox = true;
  // 화면을 반환
  // HTML 태그 같이 생긴 문법은 JSX이고, 실제 화면을 그리는 문법
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>모바일 어플</Text>
    </ScrollView>
  );
}

// styles 변수 이름 답게 화면을 그려주는 역활
// 더 자세히는 JSX문법을 꾸며주는 내용
const styles = StyleSheet.create({
  container: {
    // 앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    // 폰트 사이즈
    fontSize: 20,
    // 폰트 두께
    fontWeight: '700',
    // 위 공간으로 부터 이격
    marginTop: 50,
    // 왼쪽 공간으로 부터 이격
    marginLeft: 20,
  },
});
