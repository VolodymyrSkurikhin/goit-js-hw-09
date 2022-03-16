const formRef = document.querySelector("form");
const delayInput = formRef.elements.delay;
const stepInput = formRef.elements.step;
const amountInput = formRef.elements.amount;
console.log(amountInput);

formRef.addEventListener('click', executor);

function executor(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements.amount.value);
};



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
};
