import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || "info"}`}>
           {props.children} {/* whatever you put between the MessageBox tags on HomeScreen.js is passed as children. */}
        </div>
    )
}
