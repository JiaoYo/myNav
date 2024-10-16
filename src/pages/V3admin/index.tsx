import { useNavigate } from 'react-router-dom'
export default function index() {
  const navigate = useNavigate()
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ position: 'absolute', 
        bottom: '10px', left: '10px', 
        cursor: 'pointer'}}
        onClick={() => navigate('/')} >返回</div>
      <iframe
        src="https://www.jy2002.love/"
        title="Blog"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  )
}
