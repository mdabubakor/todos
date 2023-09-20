'use client'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from '@/redux/store'

const ProviderNan = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderNan
