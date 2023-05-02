// 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
// 이렇게 상단에 선언한다음 가져다가 사용
import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import data from './data.json';

// App.js는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일
export default function App() {
  console.disableYellowBox = true;
  let box = data.box;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  // 화면을 반환
  // HTML 태그 같이 생긴 문법은 JSX이고, 실제 화면을 그리는 문법
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>모바일 어플</Text>
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition}</Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>즐겨찾기</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View. */}
        {
          box.map((content,i)=>{
            return (<View style={styles.card} key={i}>
              <Image style={styles.cardImage} source={{url:content.image}}/>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
              </View>
            </View>)
          })
        }
      </View>
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
  weather: {
    alignSelf: "flex-end",
    paddingRight: 20
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  middleContainer: {
    marginTop: 20,
    marginLeft:10,
    height: 60,
  },  
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderRadius: 15,
    margin: 7,
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderRadius: 15,
    margin: 7,
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderRadius: 15,
    margin: 7,
  },
  middleButtonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15
  },
  cardDate: {
    fontSize:10,
    color:"#A6A6A6",
  }
});
