import Menu from './navbar';
import SideNav from './sidenav';
import MainSlider from './slider';


function Header() {
 return (
     <div>
          <Menu />
          <SideNav />
          <MainSlider />
     </div>     
    );
}
export default Header;