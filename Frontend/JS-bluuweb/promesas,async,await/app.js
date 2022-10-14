const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
            post ? resolve(post) : reject("No encontrado por id: " + id);
        }, 2000);
    });

// findPostById(1)
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e));

const buscar = async (id) =>{
    try {

        const rePosts = await Promise.all([findPostById(1), findPostById(2)]);
        // const post = await findPostById(id)
        console.log(rePosts)
    } catch (error) {
        console.log(error);
    }   
}
buscar(4)

console.log("Fin de todo");



// const findPostById = (id,callback)=>{
//     const post= posts.find(item=> item.id ===id)
//     if(post){
//         callback(null,post)
//     }else{
//         //en el error
//         callback("no se encontro el post con id " + id)
//     }
// }
// findPostById(4,(err,post)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(post);
// })

