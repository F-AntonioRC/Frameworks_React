import React from 'react';
import MaterialCardPapeleria from "./MaterialCardPapeleria";
import Bootstrap from './Bootstrap';
import MaterialDrawer from './MaterialDrawer';
import NavegadorBar from './NavegadorBar';
import Dialogos from './Dialogos'

export default function MaterialUI(){
    return(
        <>
        {/* <h2>MATERIAL-UI</h2> */}
        
        <NavegadorBar/>
        <br />
        <h2><b>BIENVENIDO ADMINISTRADOR</b></h2>
        
        <br />
        <h4>¿NECESITA AYUDA?</h4>
        <Dialogos/>
        <br />
        <MaterialCardPapeleria/>






       
        {/* <MaterialDrawer/> */}
        </>
    )
}