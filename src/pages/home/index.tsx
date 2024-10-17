import { renderCanvas } from '../../utils/canvas';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/assets/styles/home.css'
export default function home() {
  const navigate = useNavigate()
  useEffect(() => {
    renderCanvas();
  })
  return (
    <div>
      <div style={{
        position: 'absolute',
        bottom: '10px', left: '10px',
        cursor: 'pointer',
        color: "#fff",
        zIndex: 999
      }}>
          <div onClick={() => navigate('/blog')} >博客</div>
          <div onClick={() => navigate('/V3admin')} >V3admin</div>
        </div>
      <canvas id="canvas" className="canvas"></canvas>
      <div className="info">
        永远相信美好的事即将发生！
      </div>
    </div>
  )
}
