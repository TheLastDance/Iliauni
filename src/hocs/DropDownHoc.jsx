import './DropDownHoc.css'
import { useToggle } from "../customHooks/useToggle";

function DropDownHoc({ children, name, icon }) {
  const [toggle, handleToggle] = useToggle();

  return <div className='dropDown_container'>
    <div className="dropDown" onClick={handleToggle}>
      <img src={icon} alt="dropdown icon" />
      <p>{name}</p>
    </div>
    {toggle ? children : null}
  </div>
}

export default DropDownHoc;