import { getFirestore, collection, getDocs, where } from "firebase/firestore/lite"
import { db }  from "../config/firebase.config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const MisCompras = (props) => {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();  // para redireccionar en caso de error

    const userEmail = props.userMail?.email;  // previene null o undefined
    //console.log("userEmail", userEmail);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          if (userEmail) {
              const querySnapshot = await getDocs(collection(db, "orders"), where("userEmail", "==", userEmail));
              const ordersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setOrders(ordersData);
          } else {
              setOrders([]);
              navigate('/');
          }
        } catch (error) {
          console.error("Error fetching orders: ", error);
        }
      };
  
      fetchOrders();
    }, [userEmail]);

    const formatDateTime = (timestamp) => {  // para formatear la fecha
      return timestamp;
    };

  return (
    <>
    <div>
      <h3>Mis Compras: {userEmail}</h3>
      <h5>Otros datos: </h5>  {/* futuramente se pondran los datos del usuario */}

      <ul>
        {orders.map((order) => (
          order.userEmail === userEmail && (  // para que no se muestren los pedidos de otros usuarios, a veces falla el filtro inicial
          <li key={order.id}>
            <strong>Fecha:</strong> {formatDateTime(order.date)}<br />
            <strong>Id de la compra: {order.id}</strong> <br />
            <strong>email registro: {order.userEmail} </strong> <br />
            <strong>Items:</strong>
            <ul key={order.id}>
              {order.items.map((item) => (
                <li key={item.ide}>
                  Cod.:{item.ide} : {item.category} - {item.title} - Cantidad: {item.quanty} - Precio: {item.price} - Subtotal: {item.price * item.quanty }
                </li>
              ))}
            </ul>
            <strong>Total de la compra:</strong> {order.total}<br />
            <br />
          </li>
          )
        ))}
      </ul>
    </div>
    </>
  )
}

export default MisCompras