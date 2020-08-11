global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('./src/data/rickandmorty/rickandmorty.js');


	/*const show=[
	{
		"name": "Rick Sanchez",
		"status": "Alive"
	},
	{
		"name": "Retired General Rick",
		"status": "unknown"
	},
	{
		"name":"Gear Cop",
		"status":"Dead"
	},
		
	];*/

describe('showcard', () => {


  it('debería ser un funcion', () => {
    assert.equal(typeof showcard, 'function');
  });

  /*describe('workData.showcard', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.showcard, 'function');
    });

    it('debería retornar el objeto Alive al filtrar por "status"', ()=>{
      assert.deepEqual(window.showcard(show, "status"), status)
    });
    */
    
  //})
});