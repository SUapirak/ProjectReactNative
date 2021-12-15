import React from "react";
import TextInputReview from "./components/TextInputReview";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import TextInputPractice1 from "./components/TextInputPractice1";
import TouchableExample from "./components/TouchableExample";
import TouchablePractice from "./components/TouchablePractice";
import Logo from "./components/Logo";

//import all use component
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  RefreshControl
} from "react-native";

//8/12/64
const App = () => {
  return (
    //<TextInputReview/>
    //<ImageWithTextInput/>
    //<ButtonExample/>
    //<TextInputPractice1/>
    //<TouchableExample/>
    //<TouchablePractice/>
    <Logo/>
  )
  
}

//1/12/64
/*const UselessTextInput = () => {
  const [text,onCheangeText] = useState("Useless Text: ");
  const [number,onChangeNumber] = useState(null);

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
        style = {styles.input}
        onChangeText = {onCheangeText}
        value = {text}
      />
      <Text>{text}</Text>

      <TextInput
        style = {styles.input}
        onChangeText = {(number)=>onChangeNumber(number)}
        value = {number}
        placeholder = "useless placeholders"
        keyboardType = "numeric"
      />
      <Text>{number}</Text>
    </SafeAreaView>
  )
}


const MyCustomTextWith = ({fname, lname}) => {
  return (
    /*<View>
      <Text>
        Your First Name is {fname1} and Last name is {lname1}{"\n"}
        Your First Name is {fname2} and Last name is {lname2}
      </Text>
    </View>*/

    /*<View>
    <Text>
      Your First Name is {fname} and Last name is {lname}
    </Text>
    </View>
  )
}

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve,timeout))
}

/*const App = () => {
  /*const [number,setNumber] = useState(0);
  const [random,setRandom] = useState(false);

  const randomWithoutMemo = Math.random();
  const randomNumber = useMemo(()=>{
    return Math.random();
  }, [random])*/

  /*const [refresh, setRefresh] = useState(false)
  const onRefresh = useCallback(() => {
      setRefresh(true);
      wait(2000).then(()=>setRefresh(false))
    },[],
  )*/

  /*const [inputValue, setInputValue] = useState('')

  const checkValueIsNumberOrNot = () =>{
    if(isNaN(inputValue))
    {
      alert("It is not a Number");
    }
    else
    {
      alert("It is a Number")
    }
  };

  return (
    /*<View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
      <MyCustomTextWith fname1 = "myname" lname1 = "mylast" fname2 = "hisname" lname2 = "hislast"/>
    </View>

    <View style = {{alignItems:"center", justifyContent:"center", flex:1}}>
      <MyCustomTextWith fname = "myname" lname = "mylast"/>
      <MyCustomTextWith fname = "hisname" lname = "hislast"/>
    </View>*/

    /*<View style = {styles.container}>
      <View style={styles.countContainer}>
        <Button title="down" onPress={()=>{setNumber(number-1)}}/>
        <Text style={styles.countNumber}>{number}</Text>
        <Button title="up" onPress={()=>{setNumber(number+1)}}/>
      </View>
      <Text>random without memo: {randomWithoutMemo}</Text>
      <Text>random with memo: {randomNumber}</Text>
      <Button
        title="random"
        onPress={()=>setRandom(!random)}
      />
    </View>*/

    /*<SafeAreaView style = {styles.container}>
      <ScrollView
        contentContainerStyle = {styles.scrollView}
        refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh}/>
      }>
        <Text>pull down to refresh</Text>
      </ScrollView>
    </SafeAreaView>*/

    /*<SafeAreaView style = {{flex:1}}>
      <View style = {styles.container}>
      <TextInput 
          placeholder = 'Enter Text'
          style = {styles.textInputStyle}
          onChangeText = {(inputValue) => {setInputValue(inputValue)}}
        />
        <Button
          title = "Check Value is number or not"
          color = "black"
          onPress = {checkValueIsNumberOrNot}
        />
      </View>
    </SafeAreaView>

    /*<SafeAreaView style={{flex:1}}>
      <View style = {styles.container}>
        <TextInput 
          placeholder = 'Enter Text'
          style = {styles.textInputStyle}
          onChangeText = {(inputValue) => {setInputValue(inputValue)}}
        />
        <Button
          title = "Check Value Is Number or Not"
          color = "#606070"
          onPress = {checkValueIsNumberOrNot}
        />
      </View>
    </SafeAreaView>*/
  //);
//}

/*const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  countContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }*/
     /*container: {
     flex: 1,
     alignItems:"center",
     marginTop:60
     },
     textInputStyle: {
       textAlign:"center",
       height:50,
       width:"70%",
       marginBottom:10,
       borderWidth:1,
       borderColor:"white"
     },
     scrollView: {
     flex: 1,
     backgroundColor: 'pink',
     alignItems: 'center',
     justifyContent: 'center'
     },
     input: {
      height:40,
      margin:12,
      borderWidth:1,
      padding:10
     }
 });*/

/*const Greeting = ({name}) => {
  return (
    <View style = {{alignItems:"center"}}>
      <Text>Hello {name}</Text>
    </View>
  )
}

/*const Greeting = (props) => {
  
  const {name} = props;
  return (
    <View style = {{alignItems:"center"}}>
      <Text>Hello {name}</Text>
    </View>
  )

  return (
    <View style = {{alignItems:"center"}}>
      <Text>Hello {props.name}</Text>
    </View>
  )
}*/

/*const LotsOfGreetings = () => {
  return (
    <View style = {{alignItems: "center", top:50}}>
      <Greeting name = "Merry Christmas"/>
      <Greeting name = "Happy New Year"/>
      <Greeting name = "Songkran Festival"/>
    </View>
  )
}

//24/11/64
/*const App = () =>{
  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>Apirak Suwan</Text>
      <Text>Multimedia Technology</Text>
      <Text style = {{color:"blue", fontSize:18}}>Thai - Nichi Institute of Technology</Text>
    </View>

    <View style = {styles.container}>
      <Text style = {styles.title}>React Native</Text>
    </View>

    <View style = {{padding:50}}>
      <View 
        style = {{
          flexDirection:"row", 
          justifyContent:"space-between",
          alignItems:"center"
        }}>
        <TextInput 
          placeholder="React Course"
          style = {{
            width:"80%",
            borderColor:"black",
            borderWidth:1,
            padding:10
          }}
        />
        <Button
          title="ADD"
        />
      </View>
    </View>
  );
};*/

/*const Cat = () =>{
  return(
    /*<View>
      <Text>I am also a cat</Text>
    </View>*/
    //<Text>getFullName = {getFullName("one", "two", "three")}</Text>
    
  //);
//};

/*const Cafe = () =>{
  return(
    <View>
      <Text>Welcome</Text>
      <Cat/>
      <Cat/>
      <Cat/>
    </View>
  );
};

const getFullName = (firstname, secondname, thirdname) =>{
  return(
    firstname + " " + secondname + " " + thirdname
  );
};

/*const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "red",
    alignItems : "center",
    justifyContent : "center"
  },
  title : {
    fontSize : 25,
    alignItems : "center",
    fontWeight : "bold",
    color : "black"
  }

  container : {
    backgroundColor : "gray",
    flex : 1,
    paddingHorizontal : 50
  },
  title : {
    fontSize : 25,
    backgroundColor : "lightblue",
    borderColor : "black",
    borderWidth : 2,
    paddingHorizontal : 50,
    paddingVertical : 10,
    marginTop : 50,
    color : "black",
    borderRadius : 5,
    textAlign : "center"
  }
});*/

export default App;