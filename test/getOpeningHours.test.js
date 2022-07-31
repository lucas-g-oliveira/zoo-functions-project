const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  it('Teste case sentive', (() => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '09:00-PM')).toBe(closed);
    expect(getOpeningHours('MoNdAy', '09:00-AM')).toBe(closed);
    expect(getOpeningHours('MONDAY', '09:00-PM')).toBe(closed);
  }));
  it('Testes de AM-PM', (() => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('tuesday', '10:00-PM')).toBe(closed);
  }));
  it('Teste de casos e erros e mensagem deles', (() => {
    expect(() => getOpeningHours('Thursday', '10:00-XX')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
    expect(() => getOpeningHours('Thursday', 'e:00-PM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('domingo', '10:00')).toThrow(/^The day must be valid. Example: Monday$/);
    expect(() => getOpeningHours('Thursday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Thursday', '10:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
    expect(() => getOpeningHours('Thursday', '-3:60-AM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Thursday', '10:-15-AM')).toThrow(/^The minutes should represent a number$/);
  }));
});
