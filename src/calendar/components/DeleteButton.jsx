import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const DeleteButton = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore()

  const handleDelete = () => {
    startDeletingEvent()
  }

  return (
    <button 
      className='btn btn-danger fab-danger' 
      onClick={ handleDelete}
      style={{
          display: hasEventSelected ? "" : "none"
      }}
    >
        <i className='fas fa-trash-alt'></i>

    </button>
  )
}
