const assert = require('assert');

const { sumar, restar, multiplicar, dividir, modulo } = require('../funciones');

assert.strictEqual(sumar(2, 3), 5);

assert.strictEqual(restar(5, 3), 2);

assert.strictEqual(multiplicar(4, 3), 12);

assert.strictEqual(dividir(10, 2), 5);

assert.strictEqual(modulo(10, 3), 1);

console.log('Todos los tests pasan.');
