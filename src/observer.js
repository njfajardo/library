function Shop() {
    this.handlers = [];  // observers
    this.items = [];
}

Shop.prototype = {
    additem: function(item) {
        this.items.push(item);
        this.fire();
    },
    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function() {
        this.handlers.forEach( (fn, i) => {
            fn.call(this, this.items);
        });
    }
}


var click = new Shop();
var observers = {
    cart: function (items) { 
        console.log(`El carrito tiene: ${items}`);
    },
    spy: function (items) {
        console.log(`El spy sabe que el carrito tiene: ${items}`);
    }
}

function subscribe1() {
    click.subscribe(observers.cart);
}

function subscribe2() {
    click.subscribe(observers.spy);
}

function add(item) {
    click.additem(item);
}

function unsubscribe(fn) {
    var func = fn === 'cart' ? observers.cart : observers.spy;
    click.unsubscribe(func);
}
// const $ = (element) => {
//     const lib = {
//         selector:  typeof element === 'string' ? document.querySelectorAll(element) : [element],
//         hi: (str, callback) => {
//             lib.selector.forEach(function(elem, i){
//                 var text = document.createTextNode(str);
//                 elem.appendChild(text)
//                 callback && callback.call(elem); 
//             });
//         },
//         color: (color, callback) => {
//             lib.selector.forEach(function(elem, i){
//                 elem.style.backgroundColor = color
//             });
//             callback && callback.call(elem);
//         },
//         each: (obj, callback) => {
//             console.log('Nelson')
//             callback && callback.call(elem);
//         }
//     }
//     return lib;
// };
// $('body').color('red');

// $('.hi').hi('Hola mundo', function(){
//     $(this).color('green', );
// });
// old interface