import React, {useEffect, useState} from "react";
import { TouchableOpacity, View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/dist/MaterialCommunityIcons";

export const CheckBox = ({options = [], onChange, multiple = true}) => {
    const [selected, setSelected] = useState([])

    function toggle(id) {
        let index = selected.findIndex(i => i === id)
        let arrSelecteds = [...selected]

        if(index !== -1){
        arrSelecteds.splice(index, 1)
            
        }else{
            multiple ? arrSelecteds.push(id) : (arrSelecteds = (id))
        }
        setSelected(arrSelecteds);
    }

    /* useEffect(() => onChange(selected(), [selected]) */

    return(
        <View>
            { options.map((op, index) =>(
                    <View >
                        <TouchableOpacity onPress={() => toggle(op?.id)}>
                        <Icon name="check-bold" color={'black'} size={20} />
  

                           </TouchableOpacity>
                        <Text>{op?.text}ola</Text>
                    </View>

                ))
            }
        </View>
    )
}
