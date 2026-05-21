import style from "./clients.module.scss";
import { clients } from "../../data";
import type React from "react";
import type { TPropsclientsCount } from "../../types";

const Clients:React.FC<TPropsclientsCount> = ({clientsCount}) => {
    return ( <div className={style.clients}>
        {clients.slice(0, clientsCount).map((client) => (<div key={client.id} className={style.client}><img src={client.image} alt={client.alt} /></div>))}
    </div> );
}
 
export default Clients;