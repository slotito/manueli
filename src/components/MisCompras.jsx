import { getFirestore, collection, getDocs } from "firebase/firestore/lite"
import { db }  from "../config/firebase.config"
import { useEffect, useState } from "react"

const MisCompras = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "orders"));
          const ordersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("ordersData", ordersData);
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching orders: ", error);
        }
      };
  
      fetchOrders();
    }, []);

    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
    };
    return date.toLocaleString('es-ES', options);
};

  return (
    <>
    <div>
      <h1>Mis Compras</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <strong>Fecha:</strong> {formatDateTime(order.fecha)}<br />
            <strong>Cliente:</strong> <br />
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
        ))}
      </ul>
    </div>
    </>
  )
}

export default MisCompras