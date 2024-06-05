import React, { useState } from 'react'

export default function About() {
    const [mode, setMode] = useState('light')
    const toggleMode = () => {
        if (mode === "light") {
            setMode('dark');
            document.body.Style.backgroundColor = 'black';
        }
        else {
            setMode('light');
            document.body.Style.backgroundColor = 'white';
        }
    }
    return (

        <div className="card">
            <div className="card-body">
                This is some text within a card body.
            </div>
            <div className="card-footer">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        defaultChecked
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                    >
                        Checked switch checkbox input
                    </label>
                </div>
            </div>
            <button type="button"  class="btn btn-primary">Primary</button>
        </div>
    

    );

}
