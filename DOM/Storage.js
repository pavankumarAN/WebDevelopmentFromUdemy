localStorage.setItem('name', "Jeevan");
localStorage.setItem('job', "Developer");
localStorage.setItem('address', "BTM");


const name = localStorage.getItem('name');
console.log(name);


localStorage.removeItem('address');
localStorage.clear();

sessionStorage.setItem('user',"Pavan");