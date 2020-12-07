import '../css/Apple-Card.css';

function AppleCard(props) {
    return(
        <div className={'apple-card '+props?.className}>
            <div className="content">{props.children}</div>
        </div>
    );
}

export default AppleCard;