import * as React from 'react'
import './App.css'

const App = () => {
  const [open, setOpen] = React.useState(false)

  const handleMenuOne = () => {
    console.log('clicked one')
    setOpen(false)
  }

  const handleMenuTwo = () => {
    console.log('clicked two')
    setOpen(false)
  }

  return (
    <Dropdown
      trigger={<button>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>
      ]}
    />
  )
}

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='dropdown'>
      {React.cloneElement(trigger, {
        onClick: handleOpen
      })}
      {open ? (
        <ul className='menu'>
          {menu.map((menuItem, index) => (
            <li key={index} className='menu-item'>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick()
                  setOpen(false)
                }
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default App
