import Character from '../Character';

test('Класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Lev',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Lev', 'Bowman')).toEqual(expectedObject);
});
test('Класс выбрасывает ошибку если имя содержит меньше 2 символов', () => {
  expect(() => new Character('L', 'Bowman')).toThrowError();
});
test('Класс выбрасывает ошибку если имя содержит больше 10 символов', () => {
  expect(() => new Character('LevLevLevLev', 'Bowman')).toThrowError();
});
test('Класс выбрасывает ошибку передать некорректный тип персонажа', () => {
  expect(() => new Character('Lev', 'Killer')).toThrowError();
});
