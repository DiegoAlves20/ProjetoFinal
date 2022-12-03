
import { View } from "react-native";
import LoginUsuario from "./src/Frames/Login/LoginU";
import { TabsStacks } from "./src/routes/Tbs";
import { Logi } from "./src/routes/Stacks";
 import ContextProvider from "./src/context/createContext"




export default function App(){
  return ( 
      <>
      <ContextProvider>
                <TabsStacks />
      </ContextProvider>

      </>
)}