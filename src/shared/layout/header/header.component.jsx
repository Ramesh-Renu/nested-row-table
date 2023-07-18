import { flushSession, get } from '@core/storage.utils';
import { NavLink,useNavigate } from 'react-router-dom';

const Header = ()=>{
  
  const className = 'icon-Euroland_logo';
  const navigate = useNavigate();

  const logOut = ()=>{
    // console.log('logOut',logOut);
    // navigate('/');
    // navigate(0);
    const userId = get();
    if(userId) {
      flushSession();
      navigate('/');
      navigate(0);
    } else {return}
  }
  return(
    <>
      <div className="nav-bar">
      <div className="company-logo">
        <span className="company-icon">
        <span className={className} aria-label={'author-icon'}><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
        </span>
        <span className="userName">Eurolandcom</span>
      </div>
      <p className='companyheader__name'>Resource Management</p>
          <ul>
              <li><span className="icon-cog"></span></li>
              <li><span className="icon-user-img" onClick={logOut}></span></li>
          </ul>
      </div>
    </>
  )
}

export default Header;