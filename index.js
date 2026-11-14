let stock = 8;
let productPrice = 1200;

let orders = [
    { id: 101, quantity: 2, status: "new", customerLevel: "silver", delivery: "standard" },
    { id: 102, quantity: 3, status: "cancelled", customerLevel: "gold", delivery: "express" },
    { id: 103, quantity: 5, status: "new", customerLevel: "gold", delivery: "express" },
    { id: 104, quantity: 2, status: "new", customerLevel: "basic", delivery: "pickup" },
    { id: 105, quantity: 1, status: "new", customerLevel: "platinum", delivery: "standard" },
    { id: 106, quantity: 1, status: "new", customerLevel: "silver", delivery: "express" }
];

function calculateSubtotal(quantity) {
    return quantity * productPrice;
}

function calculateDiscount(customerLevel) {
    switch (customerLevel) {
        case 'basic':
            return 0;
        case 'silver':
            return 200;
        case 'gold':
            return 500;
        case 'platinum':
            return 800;
        default:
        console.log ("Неизвестный уровень");
        return 0;
    }
}

function calculateDelivery(delivery) {
    switch (delivery) {
        case 'standard':
            return 250;
        case 'express':
            return 500;
        case 'pickup':
            return 0;
        default:
        console.log ("Неизвестный тип");
        return 0;
    }
}

for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "cancelled") {
        console.log ("Заказ №" + orders[i].id + " отменён");
        continue;
    } 
    if (stock === 0) {
        console.log ("Склад пуст. Обработка остановлена");
        break;
    }
    if (orders[i].quantity > stock) {
        console.log ("Заказ №"+ orders[i].id + " недостаточно товара");
        continue;
    }
    stock -= orders[i].quantity;
    console.log ("Заказ №" + orders[i].id + " передан на проверку");
    let subtotal = calculateSubtotal(orders[i].quantity);
    console.log("Стоимость заказа: " + subtotal);
    let discount = calculateDiscount(orders[i].customerLevel);
    console.log ("Скидка: " + discount);
    let delivery = calculateDelivery(orders[i].delivery);
    console.log ("Доставка: " + delivery);
    let orderTotal = subtotal - discount + delivery;
    console.log ("Итого: " + orderTotal + " Заказ успешно оформлен");
    console.log("Остаток на складе: " + stock);
} 
