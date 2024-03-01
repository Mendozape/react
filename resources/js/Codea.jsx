import React from 'react';
import { createRoot } from 'react-dom/client'
export default function Codea(){
	return(
    	<div>ESTAMOS EN CODEA.APPxx</div>
	);
}
if(document.getElementById('codeareact')){
	createRoot(document.getElementById('codeareact')).render(<Codea/>)
}
