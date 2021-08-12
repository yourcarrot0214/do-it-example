const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, x);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

//  => ((x * 2) * 3) + 4
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));

// console.log(formula(2));
// 16;

// compose() 함수 만들어 보기
const compose = (fns) =>
  fns.reduce(
    (prevFunc, nextFunc) => (value) => nextFunc(prevFunc(value)),
    (k) => k,
  );

const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);

// console.log(formulaWithCompose(2));
// console.log(formulaWithCompose(3));

// 실무에서 사용하는 함수 조합 기법 알아보기

//1 . arguments를 사용하여 배열 인자 대신 나열형 인자로 함수 구조를 유연하게 만들기

function compose1() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    function (k) {
      return k;
    },
  );
}

console.log(compose1(multiplyTwo, multiplyThree, addFour)(2));

// 2. arguments를 활용하여 하나의 실행 인자 value를 다중 인자로 사용 가능하게 확장하기
function compose2() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (k) {
      return k;
    },
  );
}

// 3. 전개연산자로 더 간결하게 만들기
function compose3(...funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formulaWithCompose3 = compose3(multiplyTwo, multiplyThree, addFour);
console.log(formulaWithCompose3(10));
