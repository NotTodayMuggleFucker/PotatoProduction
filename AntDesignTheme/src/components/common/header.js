import logo from '../../logo_catapulta.svg';
import { Menu } from 'antd';




function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
            {/* Ajuste para el logo 
             <div className="logo"/>*/} 
            <a href="http://www.catapultadesign.com">           
            <img src={logo} className="logo" alt="logo"/></a>
               <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
                 <Menu.Item key="#home">Home</Menu.Item>
                 <Menu.Item key="#about">About</Menu.Item>
                 <Menu.Item key="#features">Features</Menu.Item>
                 <Menu.Item key="#howitworks">How it Works</Menu.Item>
                 <Menu.Item key="#faq">FAQ</Menu.Item>
                 <Menu.Item key="#pricing">Pricing</Menu.Item>
                 <Menu.Item key="#contact">Contact</Menu.Item>
               </Menu> 
            </div>
        </div>
    );
}

export default AppHeader;