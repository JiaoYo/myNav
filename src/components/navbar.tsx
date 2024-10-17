import SettingIcon from '../assets/svg/nav-setting.svg'
import BlogIcon from '../assets/svg/nav-blog.svg'
import AdminIcon from '../assets/svg/nav-admin.svg'
import ToolsIcon from '../assets/svg/nav-tools.svg'
import Return from '../assets/svg/nav-return.svg'
import SvgIcon from './svg/svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function navbar() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const targgle = () => {
    setShow(!show)
  }

  return (
    <div style={{
      height: '40px',
      position: 'fixed',
      borderRadius: show ? '20px' : '50%',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      cursor: 'pointer',
      zIndex: 999,
      transition: 'all 0.3s',
      backgroundColor: 'transparent',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
    }}>
      <div style={{
        color: '#fff',
        width: show ? '160px' : '0px',
        transition: 'all 0.3s',
        overflow: 'hidden',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <SvgIcon onClick={() => navigate('/')} src={Return} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => navigate('/blog')} src={BlogIcon} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => navigate('/V3admin')} src={AdminIcon} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => navigate('/Methods')} src={ToolsIcon} width={'30px'} height={'30px'}></SvgIcon>
      </div>
      <SvgIcon onClick={() => targgle()} src={SettingIcon} width={'40px'} height={'40px'}></SvgIcon>
    </div>
  )
}
