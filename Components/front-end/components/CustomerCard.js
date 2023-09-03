// import "../style.scss";
import Image from 'next/image';
import imgs from '../../../Assets/client pics.svg';

function CustomerCard({image, msg, name}){
 return(
        <div className="card-container">
            <div className="customer-img">
                <Image width={40} height={40} src={image || imgs}/>
            </div>
            <div className="feedbacks">
                <p>
                    {msg}
                </p>
            </div>
            <div className="card-footers">
                <h4>{name}</h4>
            </div>
        </div>
 );
}
export default CustomerCard;