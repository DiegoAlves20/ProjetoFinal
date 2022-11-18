import React,{useState}from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Button} from "react-native";
import styles from "./StylesCVPro";
import Icon from 'react-native-vector-icons/FontAwesome' 
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar, CalendarSaida, GoBack } from "../../../../Components/icons";


export const CvProf =  ({navigation}) => {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const showDatePicker = () => {
      setDatePickerVisible(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisible(false);
    };
    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };


    const [selectedDate2, setSelectedDate2] = useState(new Date());
    const [datePickerVisible2, setDatePickerVisible2] = useState(false);
    const showDatePicker2= () => {
        setDatePickerVisible2(true);
      };
      const hideDatePicker2 = () => {
        setDatePickerVisible2(false);
      };
    
    const handleConfirm2 = (date) => {
        setSelectedDate2(date);
        hideDatePicker2();
      };
      

    const [selectedDate3, setSelectedDate3] = useState(new Date());
    const [datePickerVisible3, setDatePickerVisible3] = useState(false);
    const showDatePicker3= () => {
        setDatePickerVisible3(true);
      };
    const hideDatePicker3 = () => {
        setDatePickerVisible3(false);
      };
    
    const handleConfirm3 = (date) => {
        setSelectedDate3(date);
        hideDatePicker3();
      };
    

    const [selectedDate4, setSelectedDate4] = useState(new Date());
    const [datePickerVisible4, setDatePickerVisible4] = useState(false);
    const showDatePicker4= () => {
        setDatePickerVisible4(true);
      };
      const hideDatePicker4 = () => {
        setDatePickerVisible4(false);
      };
    
    const handleConfirm4 = (date) => {
        setSelectedDate4(date);
        hideDatePicker4();
      };

    
        return(
        <ScrollView>
            <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      /> 
            <DateTimePickerModal
          date={selectedDate2}
          isVisible={datePickerVisible2}
          mode="date"
          onConfirm={handleConfirm2}
          onCancel={hideDatePicker2}
      /> 
        <DateTimePickerModal
          date={selectedDate3}
          isVisible={datePickerVisible3}
          mode="date"
          onConfirm={handleConfirm3}
          onCancel={hideDatePicker3}
      /> 
        <DateTimePickerModal
          date={selectedDate4}
          isVisible={datePickerVisible4}
          mode="date"
          onConfirm={handleConfirm4}
          onCancel={hideDatePicker4}
      /> 
        
            <View style={styles.goBack} >
                <Text style={{width:200,
    height:100,
    borderWidth:2}} 
                onPress={() =>{
                      navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
                      navigation.goBack()
                }}>
                    <GoBack/>
                </Text>
            </View>

            {/* Objetivo Profissional */}
                <Text style={styles.titulo}>Objetivo Profissional</Text>
            <View style={styles.container}>
               
                <View style={styles.form}>
                    <Text  style={styles.label}>Área de interesse</Text>
                        <TextInput style={styles.input} />

                    <Text style={styles.label}>Resumo das qualificações</Text>
                        <TextInput style={styles.input}/>
                </View>
            
               
            </View>
                    <TouchableOpacity style={styles.btnAdd}>
                        <Text style={styles.Textadd}>+</Text>
                    </TouchableOpacity>
            
                {/* Experiencia Profissional */}
                    <Text style={styles.titulo2}>Experiência Profissional</Text>
            <View style={styles.container}>
                
                 <View style={styles.form}>
                    <Text style={styles.label}>Nome Empresa</Text>
                        <TextInput style={styles.input}/>

                    <Text style={styles.label}>Cargo</Text>
                        <TextInput style={styles.input}/>
                    
                    <Text style={styles.label}>Área profissional</Text>
                        <TextInput style={styles.input}/>


                    <Text style={styles.label}>Cidade</Text>
                    <View style={styles.container2}>
                            <TextInput style={styles.input2}/>
                            <Text style={styles.label2}>UF</Text>
                            <TextInput style={styles.input3}/>
                    </View>

                    <TouchableOpacity  onPress={showDatePicker}><Text style={styles.label}>Data inicio </Text></TouchableOpacity>
                    
                    <View style={styles.container2}>

                        <TextInput editable={false} style={styles.input4}>{selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</TextInput>
                       
                        <TouchableOpacity onPress={showDatePicker2}><Text style={styles.label4}>Data Saída</Text></TouchableOpacity>
                        
                        <TextInput editable={false} style={styles.input5}>{selectedDate2 ? selectedDate2.toLocaleDateString() : 'No date selected'}</TextInput>
                    </View>
                    <Text>Emprego Atual</Text>
                    
                    <Text style={styles.label}>Principais Atividades</Text>
                    <TextInput  style={styles.input} 
                    multiline numberOfLines={10}/>

                </View>
                <TouchableOpacity style={styles.btnAdd2}>
                        <Text style={styles.Textadd}>+</Text>
                </TouchableOpacity>   
            </View>
                
                {/* Formação Acedimca  */}

                        <Text style={styles.titulo2}>Formação Academica</Text>
                    <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.label}>Nome do Curso</Text>
                        <TextInput style={styles.input}/>

                        <Text style={styles.label}>Cidade</Text>
                    <View style={styles.container2}>
                            <TextInput style={styles.input2}/>
                            <Text style={styles.label2}>UF</Text>
                            <TextInput style={styles.input3}/>
                    </View>
                            <Text style={styles.label}>Nome da instituição</Text>
                            <TextInput style={styles.input} />

                            <Text style={styles.label}>Estado do Curso</Text>
                            <TextInput style={styles.input} />

                            <Text style={styles.label}>Data inicio </Text>
                    <View style={styles.container2}>
                        <TextInput style={styles.input4} editable={false}> {selectedDate3 ? selectedDate3.toLocaleDateString() : 'No date selected'}</TextInput>


                        <TouchableOpacity style={styles.calendar} onPress={showDatePicker3}>
                             <Calendar />  
                        </TouchableOpacity>
                         
                        <Text style={styles.label4}>Data Saída</Text>
                         <TouchableOpacity style={styles.calendarSaida} onPress={showDatePicker4}>
                            <CalendarSaida />
                        </TouchableOpacity> 
                        <TextInput style={styles.input5} editable={false}>{selectedDate4? selectedDate4.toLocaleDateString() : 'No date selected'}</TextInput>
                    </View>


                    <TouchableOpacity style={styles.btnAdd3}>
                        <Text style={styles.Textadd}>+</Text>
                    </TouchableOpacity>
                    </View>

 

                </View>
                 
                <Text style={styles.titulo}>Linguagens</Text>
                <View style={styles.container}>

                    <View style={styles.form}>
                            <Text style={styles.label}>Idiomas</Text>
                            <View style={styles.container2}>
                                <TextInput style={styles.input4}/>
                                    <Text style={styles.label4}>Nivel            </Text>
                                <TextInput style={styles.input5}/>
                            </View>
                    </View>
                    <TouchableOpacity style={styles.btnAdd4}>
                        <Text style={styles.Textadd}>+</Text>
                    </TouchableOpacity>


                    
                </View><View style={styles.spam}></View>
                <TouchableOpacity style={styles.btnEnviarCv}>
                    <Text style={styles.btnEnviarTitle}>Salvar</Text>
                </TouchableOpacity>
                <View style={styles.spam}></View>
                <Text style={{width:'100%',padding:30,backgroundColor:'#427AAA',position:'absolute',bottom:0,zIndex:25,borderTopLeftRadius:8,borderTopRightRadius:8}}></Text>
                
                {/* button salvar */}

        </ScrollView>            
    )
}
