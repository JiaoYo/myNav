import { renderCanvas } from '@/utils/canvas';
import { useEffect } from 'react'
import '@/assets/styles/home.css'
export default function home() {
  useEffect(() => {
    renderCanvas();
  })
  return (
    <div>
      <canvas id="canvas" className="canvas"></canvas>
      <div className="info">
        永远相信美好的事即将发生！
      </div>
    </div>
  )
}
