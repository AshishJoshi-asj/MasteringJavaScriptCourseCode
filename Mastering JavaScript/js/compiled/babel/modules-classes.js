'use strict';

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
    value: true
});

var Auto = (function () {
    function Auto(make, model, engine) {
        _classCallCheck(this, Auto);

        this._make = make;
        this._model = model;
        this._engine = engine;
    }

    _createClass(Auto, [{
        key: 'make',
        get: function () {
            return this._make;
        },
        set: function (val) {
            this._make = val;
        }
    }, {
        key: 'model',
        get: function () {
            return this._model;
        },
        set: function (val) {
            this._model = val;
        }
    }, {
        key: 'engine',
        get: function () {
            return this._engine;
        },
        set: function (val) {
            this._engine = val;
        }
    }]);

    return Auto;
})();

var Car = (function (_Auto) {
    function Car(make, model, engine, isElectric) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this, make, model, engine);
        this._isElectric = isElectric;
    }

    _inherits(Car, _Auto);

    _createClass(Car, [{
        key: 'isElectric',
        get: function () {
            return this._isElectric;
        }
    }, {
        key: 'start',
        value: function start() {
            //Use a template string
            if (this._isElectric) {
                return this.make + ' ' + this.model + ' with a ' + this.engine + ' (electric) engine is started!';
            }
            return this.make + ' ' + this.model + ' with a ' + this.engine + ' engine is started!';
        }
    }]);

    return Car;
})(Auto);

exports.Car = Car;