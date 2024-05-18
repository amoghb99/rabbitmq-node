const amqp = require('amqplib');

async function processOrder(order) {
  // Simulate inventory update
  console.log("Updating inventory for order:", order);
}

async function receiveOrders() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'orders';

    await channel.assertQueue(queue, { durable: true });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, async (msg) => {
      const order = JSON.parse(msg.content.toString());
      await processOrder(order);
      channel.ack(msg);
    }, { noAck: false });

  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = { receiveOrders };
