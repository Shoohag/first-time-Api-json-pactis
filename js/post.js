function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        // console.log(post)
        const postdiv = document.createElement('div');
        postdiv.classList.add('post')
        postdiv.innerHTML = `
        <h4>User-${post.userId} </h4>
        <h5>Post: ${post.title} </h5>
        <p>Post Description: ${post.body} </p>
        `;
        postContainer.appendChild(postdiv);
    }
}


loadPost();



// PACTIS::::

// function getPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }

// function displayPost(data){
//     // console.log(data)
//     const postContainer = document.getElementById('post-container');
//     for(const post of data){
//         console.log(post);
//         const Postdiv = document.createElement('div');
//         Postdiv.classList.add('post');
//         Postdiv.innerHTML = `
//         <h2>Id:${post.id} </h2>
//         <h3>Title:${post.title} </h3>
//         <h4>Post Description:${post.body} </h4>
//         `;
//         postContainer.appendChild(Postdiv);
//     }
// }

// getPost();