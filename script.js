const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let selectPrice = document.querySelectorAll(".price");
    let totalSum = 0;
	selectPrice.forEach(p => {
		totalSum += Number(p.innerText);
		
	});
	let NewRow = document.createElement("tr");
	let NewCell = document.createElement("td");
	NewCell.setAttribute("id", "ans")
	 
	NewCell.innerText = `Total Price: ${totalSum}`;
	NewRow.appendChild(NewCell);
  document.getElementById("list").appendChild(NewRow);
	
	
	
  
};

getSumBtn.addEventListener("click", getSum);

