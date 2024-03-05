import { styles } from "./styles";
import { ScrollView } from "react-native";
import { Ingredient } from "../Ingredient";
import { useState } from "react";

export function IngredientsList(){
    const [ selected, setSelected ] = useState<string[]>([])

    function handleToggleSelected( value: string ) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [ ...state, value ])
        
    }

    return(
        <ScrollView 
            showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.container}
        >
        {Array.from({ length: 100 }).map
        (( item, index ) => (
            <Ingredient 
               key={index} 
               name="Maça"
               image=""
               selected={selected.includes(String(index))}
               onPress={() => handleToggleSelected(String(index))} 
            />

        ))}
        </ScrollView>
    )
}