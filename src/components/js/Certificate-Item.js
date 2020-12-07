import '../css/Certificate-Item.css';

function CertificateItem(props) {
    return(
        <a href={props.link} className="certificate-item">
            <div className="icon">
                <img src={props.image} alt="Certificate Icon"/>
            </div>
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="provider">{props.provider}</div>
            </div>
        </a>
    );
}

export default CertificateItem;