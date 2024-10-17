import { ReactSVG } from "react-svg";
import './svg.css'
interface SvgIconProps {
  src: string; // 定义 src 为字符串类型
  width?: string; // 可选属性，默认为 '20px'
  height?: string; // 可选属性，默认为 '20px'
  className?: string; // 可选属性，默认为空字符串
  onClick?: () => void; // 可选属性，默认为空函数
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, width = '30px', height = '30px', className = 'svg-icon', onClick }) => {
  const beforeInjection = (svg: SVGSVGElement) => {
    svg.classList.add(className);
    svg.setAttribute('style', `width: ${width}; height: ${height};`);
  };
  return (
    <ReactSVG onClick={onClick} src={src} beforeInjection={beforeInjection} className="ReactSVG" />
  );
};

export default SvgIcon;
