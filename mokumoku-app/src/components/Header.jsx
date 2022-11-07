import React from 'react'

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box'
}

export const Header = () => {
  return (
    <header style={headerStyle}>
        <h3>mokumoku App</h3>
        <div>
            <span className='m'>username</span>
            <button>ログイン</button>
        </div>
    </header>

  )
}
