const postURL = "https://elise-aurtande.no/portfolio/wp-json/wp/v2/posts/?=&per_page=25";

const postContainer = document.querySelector(".all-projects-box");
const loader = document.querySelector(".loading-box");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
        // createSlider();
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    loader.style.display = "none";
    // const arrows = document.querySelectorAll(".slider-arrow");
    // arrows.forEach(function (arrow) {
    //     arrow.style.display = "flex";
    // });

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

// {/* <div>
//                     <img src="${post.better_featured_image.source_url}" alt="Image of me with yellow background and text that says CODE, LEARNING, DESIGN, CREATIVITY." class="" />
//                 </div> */}

// {/* <article>
//                 <div>
//                     <img src="${post.better_featured_image.source_url}" alt="Image of me with yellow background and text that says CODE, LEARNING, DESIGN, CREATIVITY." class="" />
//                 </div>
//                 <div class="text">
//                     <h3>${post.title.rendered}</h3>
//                     <p>I live in Oslo, I am educated as a teacher in science and mathematics and have been teaching in secondary school for the last ten years. Now I am excited about getting new skills in front-end development and I am hoping to work with this fulltime soon.</p>
//                     <div>
//                         <a href="#">Link to GitHub</a>
//                         <a href="#">Link to live site</a>
//                     </div>
//                 </div>
//             </article> */}

// posts.forEach(function (post) {
//     postContainer.innerHTML += `
//     <li class="post post-slider" id="post-slider">
//         <div class="post-image">
//             <a aria-label="Read more" href="post-details.html?id=${post.id}" class="image-link">
//                 <img src="${post.better_featured_image.source_url}" alt="" />
//             </a>
//         </div>
//         <div class="post-text">
//             <div class="post-bg-brown">
//                 <a aria-label="Read more" href="post-details.html?id=${post.id}" class="post-link">
//                     <h3>${post.title.rendered}</h3>
//                 </a>
//                 <p class="date">${post.date}</p>
//                 <p class="text">${post.excerpt.rendered}</p>
//             </div>
//         </div>
//         <a aria-label="Read more" href="post-details.html?id=${post.id}" class="cta cta_read-more cta-slider">Read more</a>
//     </li>`;
// });
