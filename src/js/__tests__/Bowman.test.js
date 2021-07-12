import Bowman from '../Bowman';

test('Класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Lev',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Lev', 'Bowman')).toEqual(expectedObject);
});
