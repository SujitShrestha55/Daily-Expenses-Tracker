
let budget = "";
window.addEventListener('load',()=>{
    budget = JSON.parse(localStorage.getItem("budget")) || 0;
    document.querySelector('.budget').innerText='Rs'+budget;
    list=JSON.parse(localStorage.getItem("list")) || [] ;
    console.log(list);
    updateListDisplay();
    
});


function edit() {
    document.querySelector('.groupp').innerHTML=`
   <div class="group2"><div><input placeholder="Enter Budget" type="text" class="newBudgetInput" /></div>
    <div> <button class="inn" onclick="update();">Update</button><div>
    </div>
    `;
}
function update() {
    budget = Number(document.querySelector('.newBudgetInput').value);
    localStorage.setItem('budget', JSON.stringify(budget));
   
    console.log(budget);
    console.log(budget);
    c = budget;
    document.querySelector('.budget').innerText = 'Rs' + c;
    document.querySelector('.groupp').innerHTML="";
    autoDisplay();

    console.log(c);
}
let list = [];
let a = 0;
function add() {

    expenses = document.querySelector('.js-expenses').value;
    cost = document.querySelector('.js-cost').value;
    date = document.querySelector('.js-calender').value;
    if (expenses != '' && cost != '' && date != '') {

        list.push({ expenses, cost, date });
        localStorage.setItem("list", JSON.stringify(list)); // Save after update



        let textElement = '';
        let a = 0;
        list.forEach((item, index) => {


            textElement += `<p class="c${index}"></p>
            <div class="last"><div class="o"><strong>${item.expenses}</strong></div>
             <div class="o">Rs ${item.cost} </div>
             <div class="o">${item.date}</div> 
        <div class="o"><button class="bb" onclick="removeExpense(${index})">Remove</button></div></div>`;
            document.querySelector('.display').innerHTML = textElement;
            a += Number(`${item.cost}`);

            console.log(`this is b ${a}`);
        });
        let c = budget;
        c = c - a;
        console.log(c);
        document.querySelector('.budget').innerText = 'Rs' + c;
        document.querySelector('.js-expenses').value = "";
        document.querySelector('.js-cost').value = "";
        document.querySelector('.js-calender').value = "";
    }
    else {
        alert('pls enter the data');
    }


}
function updateListDisplay() {
    let textElement = '';
    let b = 0;
    list.forEach((item, index) => {
        textElement += `
        <p class="c${index}"></p>
            <div class="last"><div class="o"><strong>${item.expenses}</strong></div>
             <div class="o">Rs ${item.cost} </div>
             <div class="o">${item.date}</div> 
        <div class="o"><button class="bb" onclick="removeExpense(${index})">Remove</button></div></div>
        `;
        b += Number(`${item.cost}`);
    });
    let c = budget;
    c = c - b;

    document.querySelector('.budget').innerText = 'Rs' + c;
    document.querySelector('.display').innerHTML = textElement;
    localStorage.setItem('list', JSON.stringify(list));

}

function removeExpense(index) {
    list.splice(index, 1);
    updateListDisplay();

}
function autoDisplay() {
    let b = 0;
    list.forEach((item, index) => {
 
        b += Number(`${item.cost}`);
    });
    let c = budget;
    c = c - b;

    document.querySelector('.budget').innerText = 'Rs' + c;


}



