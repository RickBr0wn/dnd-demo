import React from 'react'
import Modal from 'react-modal'

Model.setAppElement('#app')

const Window = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="model"
      overlayClassName="overlay">
      <div className="close-btn-ctn">
        <h1 style={{ flex: '1 90%' }}>{item.title}</h1>
        <button className="close-btn" onCLick={onClose}>
          ❌
        </button>
      </div>
      <div>
        <h2>Description</h2>
        <p>{item.content}</p>
        <h2>Status</h2>
        <p>
          {item.icon}
          {`${item.status.charAt().toUpperCase()}${item.status.slice(1)}`}
        </p>
      </div>
    </Modal>
  )
}

export default Window
