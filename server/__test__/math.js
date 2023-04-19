function checkSafeNumber(n) {
  return Number(n) >= Number.MAX_SAFE_INTEGER === false;
}
function sum(a, b) {
  if (!checkSafeNumber(a) ||!checkSafeNumber(b)) {
    return Infinity;
  }
  return Number(a) + Number(b);
}

test('adds 10 + 20 to equal 30', () => {
  expect(sum(10, 20)).toBe(30);
});
test('adds 10:string + 20:string to equal 30:number', () => {
  expect(sum('10', '20')).toBe(30);
});

test('adds MAX_SAFE_INTEGER + MAX_SAFE_INTEGER to equal infinity', () => {
  expect(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(Infinity);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});