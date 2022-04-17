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
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went Wrong')
            }
        },2000)
    });
}
    //Asyn Await
    async function init(){
        await createPost({title:'post3', body:"This is postthree"})

        getPosts();
    }
    init();

//Async |Await |Fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    console.log(data)
}
fetchUsers()
