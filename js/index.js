const postURL = "https://elise-aurtande.no/portfolio/wp-json/wp/v2/posts/?=&per_page=25";

const postContainer = document.querySelector(".all-projects-box");
const loader = document.querySelector(".loading-box");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    loader.style.display = "none";

    posts.forEach(function (post) {
        postContainer.innerHTML += `
            <article>
            <div class="image" style="background-image: url('${post.better_featured_image.source_url}')">
            </div>
                
                <div class="text">
                         <h3>${post.title.rendered}</h3>
                         ${post.content.rendered}
               </div>
            </article>`;
    });
}
