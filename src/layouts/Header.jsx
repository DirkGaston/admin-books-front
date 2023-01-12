import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

import './Header.scss'

const { Header } = Layout

const HeaderLayout = () => {
  const defaultSelectedKeys = ['home']

  const items = [
    {
      label: <Link to='/'>Home</Link>,
      key: 'home'
    }
  ]

  return (
    <Header className='site-layout-background'>
      <div className='logo'>
        Admin Books
      </div>
      <Menu
        theme='light'
        mode='horizontal'
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
      />
    </Header>
  )
}

export default HeaderLayout
