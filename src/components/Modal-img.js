import React from 'react'
import ReactDOM from 'react-dom'


const ModalImg = (props) => {
    return ReactDOM.createPortal((
        props.children
    ), document.getElementById("modal-img"))
}

export default ModalImg
