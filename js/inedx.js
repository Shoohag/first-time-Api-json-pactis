function loadusers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

// function displayUsers2(data){
//     // console.log(data)
//     for(const user of data){
//         console.log(user.email);
//     }
// }


function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function getMail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayMail(data))
}

function displayMail(data){
    for(const user of data){
        const ul = document.getElementById('mail');
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}