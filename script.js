
// Calculates Deduction From Total Income
var btn = document.querySelector('#submitBtn');

btn.addEventListener('click',function(e){

	// grab monthly income and expenses
	var monthlyIncome = parseInt(document.querySelector('#income').value);
	var fixedExp = document.querySelectorAll('.fixedExpenses');
	var allFixedExp = Array.from(fixedExp);
	var varExp = document.querySelectorAll('.variableExpenses');
	var allVarExp = Array.from(varExp);



	// loop through fixedExpenses class to gather all input values
	var allFixedExpCounter = 0;
	for (var i = 0; i < allFixedExp.length; i++){
		allFixedExpCounter += parseInt(allFixedExp[i].value);
	}

	// Loop through Variable Expenses, gather all input values
	var allVariableExpCounter = 0;
	for(var i = 0; i < allVarExp.length; i++){
		allVariableExpCounter += parseInt(allVarExp[i].value);
	}

	// Calculate Total After Monthly Income
	var afterIncome;
	if(allFixedExpCounter > 0 && allVariableExpCounter > 0 ){
		afterIncome = monthlyIncome - allFixedExpCounter;
		afterIncome += -allVariableExpCounter;
	} else if(allFixedExpCounter > 0){
		afterIncome = monthlyIncome - allFixedExpCounter;
	} else if (allVariableExpCounter > 0) {
		afterIncome = monthlyIncome - allVariableExpCounter;
	} else{
		afterIncome = monthlyIncome;
	}


	// create element to output
	var div = document.querySelector('.output');
	var p = document.createElement('p');

	p.innerHTML = afterIncome;
	div.appendChild(p);

})

// Prevents form from submitting
var form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
})

// Adding more fixed Expenses
var fixedBtn = document.querySelector('#fixedExpBtn');

fixedBtn.addEventListener('click',function(e){
	// Create Fixed Expense Element
	var fixedValue = document.createElement('input');
	var fixedExp = document.createElement('input');
	var fixDiv = document.createElement('div');
	fixedValue.type = "text";
	fixedExp.type = "number";
	fixedValue.setAttribute("placeholder","Name of Expense");
	fixedExp.setAttribute("placeholder","$");
	fixedValue.className = "form-control";
	fixedExp.className = "form-control fixedExpenses ";
	fixDiv.className = "form-group col-4"

	var addExp = document.querySelector('.addExp');

	fixDiv.appendChild(fixedValue);
	fixDiv.appendChild(fixedExp);

	addExp.appendChild(fixDiv);


})

// Add More Variable expenses
var varBtn = document.querySelector('#varExpBtn');

varBtn.addEventListener('click',function(e){
	// Create Variable Elements
	function createEle(ele){
		return document.createElement(ele);
	}
	var varValue = createEle('input');
	var varExp = createEle('input');
	var varDiv = createEle('div');
	varValue.type = "text";
	varExp.type = "number";
	varValue.setAttribute("placeholder","Name of Expense");
	varExp.setAttribute("placeholder","$");
	varValue.className = "form-control";
	varExp.className = "form-control variableExpenses";
	varDiv.className = "form-group col-4";

	var addVarExp = document.querySelector(".addVarExp");
	varDiv.appendChild(varValue);
	varDiv.appendChild(varExp);

	addVarExp.appendChild(varDiv);

})
