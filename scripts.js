let Auto = function(type, brand, number, selector) {
    this.brand = brand;
    this.number = number;
    this.selector = selector;
    this.type = type;
    this.showType = function() {
        alert(this.type);
    };
    this.trans = function() {
        this.tr = prompt('Какая передача: вперёд, назад, нейтральная?');
    };
    this.move = function() {
        this.direct = prompt('Выберите направление движения автомобиля: вперёд, назад');
    };
    this.speed = function(){
        this.sp = +prompt('С какой скоростью движется автомобиль (км/ч)?');
    };
    this.time = function() {
        this.t = +prompt('Какое время автомобиль находился в пути (ч)?');
    };
    this.distance = function() {
        this.result = this.sp * this.t;
        alert ('Пройденный путь = ' + this.result + ' км');
    };
};

let Truck = function(type) {
    Auto.apply(this, arguments);
    this.type = type;
    this.showType = function() {
        alert('Тип авто ' + this.type);
    };
    this.create = function() {
       let div = document.createElement('div');
       div.classList.add('card-info');
       div.style.cssText = `border-radius: 5px;
                            width: 400px;
                            height: 250px;
                            background: #8F75BE;
                            padding: 10px`;
       document.body.appendChild(div);
       let h1 =  document.createElement('h1');
       h1.innerHTML = this.brand;
       h1.style.cssText = `margin-left: 20px;
                            color: #fff;`;
       div.appendChild(h1);
       let p1 = document.createElement('p');
        p1.innerHTML = this.number;
        p1.style.cssText = `color: #fff;
                            margin-left: 20px;
                            font-weight: bold;
                            font-size: 20px;`;
        div.appendChild(p1);
        let p2 = document.createElement('p');
        p2.innerHTML = this.type;
        p2.style.cssText = `color: #fff;
                            margin-left: 20px;
                            font-weight: bold;
                            font-size: 20px;`;
        div.appendChild(p2);
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.style.cssText = `margin-left: 20px;`;
        div.appendChild(input);
    };
    let selectorType = this.selector;
    this.on = function() {
        if(selectorType) {alert('Транспорт заведен') }
        else {
            alert('Транспорт не заведен');
        }
    };
    
};

let car = new Auto ('Машина', 'Audi', 3400, true);
let bus = new Truck ('Автобус', 'BMW', 5500, false);
console.log(car);
console.log(bus);
bus.create();
bus.on();