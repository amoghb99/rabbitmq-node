# Running the Application

1) Start the Order Service <br>
Navigate to the order-service directory and start the server: <br>
``` cd rabbitmq-node\order-service > node server.js ```

2) Start the Inventory Service <br>
Navigate to the inventory-service directory and start the server: <br>
``` cd rabbitmq-node\inventory-service > node server.js ```

3) Start the email Service <br>
Navigate to the email-service directory and start the server: <br>
``` cd rabbitmq-node\email-service > node server.js ```

4) POST request <br>
Make a post request to the server: <br>
``` http://localhost:3000/order ``` <br>
``` JSON Body:  { "orderId": 1, "product": "Widget", "quantity": 3} ``` <br> <br>


# What This Application Does
This application simulates a simple e-commerce platform, consisting of three microservices:

- Order Service: This service runs an HTTP server that accepts order details via a POST request. It then publishes these order details to a RabbitMQ queue named "orders".

- Inventory Service: This service listens to the "orders" queue in RabbitMQ. Upon receiving order details, it simulates the process of updating the inventory database to reflect the sale of products.

- Email Service: This service also listens to the "orders" queue. For each order it receives, it simulates sending a confirmation email to the customer.

# Common Problems We Face
- **Decoupling of Services**: Traditional monolithic architectures can lead to tightly coupled components, making it difficult to update, maintain, or scale parts of the system independently.

- **Asynchronous Processing**: Handling synchronous requests that depend on several slow operations (like database updates and email sending) can significantly degrade performance.

- **Reliability**: Ensuring that critical operations like orders are not lost in case of failures.

# How RabbitMQ Helps Us
RabbitMQ addresses these issues as follows:

- **Decoupling**: By using a message broker like RabbitMQ, services do not need to directly communicate with each other. This means they can be developed, deployed, and scaled independently.

- **Asynchronous Communication**: RabbitMQ allows services to communicate asynchronously by sending messages that are processed as they are received. This improves response times and overall efficiency.

- **Reliability**: RabbitMQ ensures messages are safely queued even if a consumer service is temporarily unavailable, thus enhancing the reliability of the system. It supports message acknowledgments to ensure messages are processed at least once.

- **Scalability**: RabbitMQ can handle a high volume of messages and has features to distribute messages across multiple consumers for load balancing, which is essential for scaling services.

By implementing RabbitMQ, our microservices architecture becomes more robust, flexible, and ready for real-world challenges in e-commerce operations.
