"use strict";

class Car {
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
    constructor({
        speed = 0,
        price,
        maxSpeed,
        isOn = false,
        distance = 0
    }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    turnOn() {
        if (' ') {
            this.isOn = true;
            console.log(this.isOn);
        }
    }

    turnOff() {
        if (' ') {
            this.isOn = false;
            console.log(this.isOn);
            this.speed = 0;
        }
    }

    accelerate(value) {
        if (this.speed < this.maxSpeed) {
            this.speed += value;
            console.log('speed: ', this.speed);
        };
    }

    decelerate(value) {
        if (this.speed > 0) {
            this.speed -= value;
            console.log('speed: ', this.speed);
        };
    }

    drive(hours) {
        if (this.isOn === true) {
            this.distance = this.distance + (hours * this.speed)
            console.log(this.distance);
        }
    }
};

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);