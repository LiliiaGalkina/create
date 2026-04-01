import style from "./clients.module.scss";
import { clients } from "../../data";

const Clients = () => {
    return ( <div className={style.clients}>
        {clients.map((client) => (<div key={client.id} className={style.client}><img src={client.image} alt={client.alt} /></div>))}
    </div> );
}
 
export default Clients;