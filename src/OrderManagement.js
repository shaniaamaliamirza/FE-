import React, { useState } from 'react';

// Komponen untuk mengelola pesanan
const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState('');
  const [status, setStatus] = useState('Pending');

  // Fungsi untuk menambahkan pesanan baru
  const addOrder = () => {
    const order = {
      id: orders.length + 1,
      name: newOrder,
      status: status
    };
    setOrders([...orders, order]);
    setNewOrder('');
  };

  // Fungsi untuk mengubah status pengiriman
  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h2>Manajemen Pesanan Toko Kue Kering</h2>

      <div>
        <input
          type="text"
          placeholder="Nama Pesanan"
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
        />
        <button onClick={addOrder}>Tambah Pesanan</button>
      </div>

      <h3>Daftar Pesanan</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.name} - Status: {order.status}
            <select
              value={order.status}
              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
