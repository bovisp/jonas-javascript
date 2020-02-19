
//  BUDGET CONTROLLER
var budgetController = (
  function () {
    
  }
)()


// UI CONTROLLER
var UIController = (
  function () {
    
  }
)()


// GLOBAL APP CONTROLLER
var controller = (
  function (budgetCtrl, UICtrl) {
    var ctrlAddItem = function (e) {
      // 1. Get the field input data
      // 2. Add the item to the budgetController
      // 3. Add the item to the UI 
      // 4. Calculate the budget
      // 5. Display the budget on the UI
      console.log('It works.')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13|| e.which === 13) {
        ctrlAddItem(e)
      }
    })
    
  }
)(budgetController, UIController)