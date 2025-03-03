let blogcontainer=document.getElementById('blogcontainer')
const apikey="ba270cde3f0140a6afcc020e62243887";
let btn=document.getElementById('button')
btn.addEventListener('click', async ()=>{
    let query=document.getElementById('search').value.trim();
    const articals= await getnews(query);
   DisplayBlogs(articals)

})

  async function getnews(query){
    const apiurl=`https://newsapi.org/v2/everything?q=${query}&from=2025-02-03&sortBy=publishedAt&apiKey=${apikey}`
      try{
        let response=await fetch(apiurl);
        return (await response.json()).articles;   // ✅ Correct
    
      } catch(error){
        console.error("inavlid input")
        return []
      }

   }

   function DisplayBlogs(articals){
    blogcontainer.innerHTML="";
    articals.forEach((element) => {
        const blogCard=document.createElement('div');
        blogCard.classList.add('blogcard');
        const img=document.createElement('img');
        img.src=element.urlToImage;
        const title=document.createElement('h1')
        title.textContent=element.title;
        const discription=document.createElement('p');
        discription.textContent=element.decription;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(discription)
        blogcontainer.appendChild(blogCard)
    });

   }