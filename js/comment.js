function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
};

function displayComment(data){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of data){
        // console.log(comment);
        const postComment = document.createElement('div');
        postComment.classList.add('comment-class');
        postComment.innerHTML = `
        <h2> Id: ${comment.id}</h2>
        <h3> Name: ${comment.name}</h3>
        <h4> Email: ${comment.email}</h4>
        <h4> Comment: ${comment.body}</h4>
        `;
        commentContainer.appendChild(postComment);
    }
}

getComment();