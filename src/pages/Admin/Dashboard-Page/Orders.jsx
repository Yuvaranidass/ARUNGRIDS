const orders = [
  { name: "Balaji", type: "Customer" },
  { name: "Barath", type: "Customer" },
  { name: "Ankit", type: "Customer" },
  { name: "Sam", type: "Customer" },
  { name: "John", type: "Customer" },
  { name: "Alice", type: "Customer" },
  { name: "Balaji", type: "Customer" },
  { name: "Barath", type: "Customer" },
  { name: "Ankit", type: "Customer" },
  { name: "Sam", type: "Customer" },
  { name: "John", type: "Customer" },
  { name: "Alice", type: "Customer" },
  // Add more orders as needed for testing scroll functionality
];

const styles = {
  ordersContainer: {
    width: "90%",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
  
  },
  title: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: "bold",
  },
  ordersList: {
    listStyleType: "none",
    padding: 0,
  },
  orderItem: {
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "2px solid #caced5",
  },
  orderAvatar: {
    position: "relative",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "12px",
  },
  orderAvatarIcon: {
    fontSize: "24px",
  },
  orderStatusDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "8px",
    height: "8px",
    backgroundColor: "#4caf50",
    borderRadius: "50%",
    border: "2px solid #fff",
  },
  orderInfo: {
    display: "flex",
    flexDirection: "column",
  },
  orderName: {
    margin: 0,
    fontSize: "16px",
  },
  orderType: {
    margin: 0,
    fontSize: "14px",
    color: "#777",
  },
};

const Orders = () => {
  return (
    <div style={styles.ordersContainer}>
      <div style={styles.ordersList}>
        {orders.map((order, index) => (
          <div style={styles.orderItem} key={index}>
            <div style={styles.orderAvatar}>
              <span style={styles.orderAvatarIcon}>👤</span>
              <span style={styles.orderStatusDot}></span>
            </div>
            <div style={styles.orderInfo}>
              <p style={styles.orderName}>{order.name}</p>
              <p style={styles.orderType}>{order.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
