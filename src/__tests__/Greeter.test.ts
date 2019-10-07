import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Erik')).toBe('Hello Erik');
});