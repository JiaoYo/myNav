import SettingIcon from '../assets/svg/nav-setting.svg'
import BlogIcon from '../assets/svg/nav-blog.svg'
import AdminIcon from '../assets/svg/nav-admin.svg'
import ToolsIcon from '../assets/svg/nav-tools.svg'
import Home from '../assets/svg/nav-home.svg'
import SvgIcon from './svg/svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function navbar() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const targgle = () => {
    setShow(!show)
  }
  useEffect(() => {
    const listener = () => {
      if (document.activeElement?.tagName === 'IFRAME') {
        if (show) setShow(false);
      }
      window.removeEventListener('blur', listener);
    };
    if (show) {
      window.addEventListener('blur', listener);
    }
    return () => {
      window.removeEventListener('blur', listener);
    };
  }, [show]);
  return (
    <div style={{
      height: '40px',
      position: 'fixed',
      borderRadius: '20px',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      cursor: 'pointer',
      zIndex: 999,
      transition: 'all 0.3s',
      backgroundColor: 'transparent',
      // boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
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
        <SvgIcon onClick={() => { navigate('/'); setShow(!show) }} src={Home} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => { navigate('/blog'); setShow(!show) }} src={BlogIcon} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => { navigate('/V3admin'); setShow(!show) }} src={AdminIcon} width={'30px'} height={'30px'}></SvgIcon>
        <SvgIcon onClick={() => { navigate('/Methods'); setShow(!show) }} src={ToolsIcon} width={'30px'} height={'30px'}></SvgIcon>
      </div>
      <SvgIcon onClick={() => targgle()} src={SettingIcon} width={'40px'} height={'40px'}></SvgIcon>
    </div>
  )
}
