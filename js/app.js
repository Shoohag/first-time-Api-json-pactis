function loadData2(){
    // const url = 'https://jsonplaceholder.typicode.com/todos/1'
    // fetch(url)
    // OR 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}




function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}



function apiData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(api => displayApi(api));
}

function displayApi(api){
    console.log(api)
}