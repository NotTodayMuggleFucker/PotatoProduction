import logo from '../../logo_catapulta.svg';
import { Anchor } from 'antd';

const { Link } = Anchor;




function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
            {/* Ajuste para el logo 
             <div className="logo"/>*/} 
            <a href="http://www.catapultadesign.com">           
            <img src={logo} className="logo" alt="logo"/></a>
               <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#features" title="Features" />
                    <Link href="#works" title="How it Works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />        
                </Anchor>
            </div>
        </div>
    );
}

export default AppHeader;