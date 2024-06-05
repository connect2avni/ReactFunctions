import React from 'react'
import React,{ useState } from 'react'

export default function About() {
    const [mode,setMode]= useState('light')
    const toggleMode= () =>{
        if(mode==="light"){
            setMode('dark');
            document.body.Style.backgroundColor= 'black';
        }
        else{
            setMode('light');
        }
    }
    return (
        <div>

            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>
        </div>
    )
}
