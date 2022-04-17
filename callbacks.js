const posts = [
    {
        title: 'post1',
        body: 'This is post one'
    },
    {
        title:'post2',
        body:'This is post two'
    }
]
//Getting the post and putting them on a page
function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}<li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
createPost({title:"post3", body:"this is post three"}, getPosts)