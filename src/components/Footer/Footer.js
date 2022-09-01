import './Footer.css';

const Footer = () => {

    const date = new Date();
    const year  = date.getFullYear();

    return(
        <div className='footer'>
            <p className='copyright'>Copyright {year}</p>
        </div>
    );
}

export default Footer;