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
    })
    
}
//createPost({title:'post3', body:"This is postthree"})
//.then(getPosts)

//promise.all
const promise1 = Promise.resolve("Hello World")
const promise2 = 10;
const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>
    res.json()
);


Promise.all([promise1, promise2, Promise3, promise4])
.then((values)=>{
    console.log(values)
})