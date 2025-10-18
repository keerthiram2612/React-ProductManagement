// Simple localStorage-based order store simulation

export const getOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return orders;
};

export const addOrder = (order) => {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
};

export const updateOrderStatus = (orderId, newStatus) => {
  const orders = getOrders().map((o) =>
    o.id === orderId ? { ...o, status: newStatus } : o
  );
  localStorage.setItem("orders", JSON.stringify(orders));
};
