
import Bowman from '../Bowman';

test('levelUp', () => {
  const bowman = new Bowman('test');
  bowman.levelUp();
  expect([bowman.health, bowman.level, bowman.attack, bowman.protection]).toEqual([100, 2, 30, 30]);
});

test('levelUp error', () => {
  const bowman = new Bowman('test');
  bowman.damage(101);
  expect(() => bowman.levelUp()).toThrow('Перснаж мертв');
});
