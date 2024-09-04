// src/pages/MyOrderPage.js
import React, { useState } from "react";
import styled from "styled-components";

const MyOrderContainer = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const EditButton = styled.button`
  background-color: lightblue;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: deepskyblue;
    color: white;
  }
`;

const StatusDropdown = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

const MyOrderPage = () => {
  const [orders, setOrders] = useState([
    { no: 1, id: "1234", status: "Completed" },
    { no: 2, id: "5678", status: "Pending" },
    // Add more orders as needed
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <MyOrderContainer>
      <h2>My Orders</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>No</TableHeader>
            <TableHeader>Id Pesanan</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Edit</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <TableCell>{order.no}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <StatusDropdown
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </StatusDropdown>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </MyOrderContainer>
  );
};

export default MyOrderPage;
