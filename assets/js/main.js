(function() {

  /**
   * Получаем из DOM форму,инпут с первым значения и вторым
   */
  let form = document.getElementById("calc"),
      firstNumber = document.getElementById("first-value"),
      secondNumber = document.getElementById("second-value");

  // фукнция для валидации инпутов с числами 
  function validationNumber(one, two) {
    return /\d+(\.\d+)?/g.test(one) && /\d+(\.\d+)?/g.test(two);
  }

  // функция обработки для вывода результата сложения чисел
  function submitHandler(e) {
    e.preventDefault();
    // получаем из инпутов значения и приводим их к численном виду
    let firstValue = +firstNumber.value;
    let secondValue = +secondNumber.value;
    
    if (validationNumber(firstValue,secondValue) && firstValue && secondValue){
      let result = firstValue + secondValue;
      // если число неточное, то округляем его
      if (!Number.isInteger(result)){
        result = +result.toFixed(10);
      }
      alert(`Результат \n\n ${result}`);
    }else{
      alert('Введите валидные значения в поля для чисел');
    }
  }

  form.addEventListener("submit", submitHandler);
})();
