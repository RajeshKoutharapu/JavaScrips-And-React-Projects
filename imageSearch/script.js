const key = "u-8Wof8lvy9dGyk5KORRcy8hQPpI_OgTg_WT6z1XOwY";  // Use your actual key
const form = document.querySelector('form');
const input = document.getElementById('search');
const imagesdiv = document.getElementById('imagesdiv');
const showmore = document.getElementById('showmore');

let inputdata = "";
let page = 1;

async function searchImage() {
    console.log("Searching for images...");

    inputdata = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${key}`;

    console.log("Fetching URL:", url);

    const response = await fetch(url);
    if (!response.ok) {
        console.error("Failed to fetch:", response.statusText);
        return;
    }

    const jdata = await response.json();
    console.log("API Response:", jdata);

    const results = jdata.results;
    console.log("Number of results:", results.length);

    if (page === 1) {
        imagesdiv.innerHTML = ""; // Clear only on first page
    }

    results.forEach((photo) => {
        const imagecard = document.createElement('div');
        imagecard.classList.add('imagediv');

        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description;

        const link = document.createElement('a');
        link.href = photo.links.html;
        link.target = "_blank";
        link.textContent = photo.alt_description;

        imagecard.appendChild(img);
        imagecard.appendChild(link);
        imagesdiv.appendChild(imagecard);
    });

    page++;

    if (page > 1) {
        showmore.style.display = "block";
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submitted");
    page = 1;
    searchImage();
});

showmore.addEventListener("click", () => {
    console.log("Show more clicked");
    searchImage();
});
