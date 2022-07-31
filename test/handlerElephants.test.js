const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1 - Testa o valor de retorno p/ parametro "count".', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('2 - Testa o valor de retorno p/ parametro "names".', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('3 - Testa o valor de retorno p/ parametro "averageAge".', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('4 - Testa o valor de retorno p/ sem parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('5 - Testa o valor de retorno p/ parametro "location".', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('6 - Testa o valor de retorno p/ parametro "popularity".', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('7 - Testa o valor de retorno p/ parametro "averageAge".', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('8 - Testa o valor de retorno p/ parâmetro desconhecido', () => {
    expect(handlerElephants('teste')).toBe(null);
  });
  it('9 - Testa o valor de retorno p/ parâmetro não string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
