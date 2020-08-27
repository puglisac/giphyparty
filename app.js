console.log("Let's get this party started!");
//add event listener for submit button and call getGiph
const submit = document.querySelector('form');
submit.addEventListener('submit', function(e) {
    e.preventDefault();
    searchIn = document.getElementById('search').value;
    getGiph(searchIn);
    searchIn.value = "";
});
//request sent to giphy api
async function getGiph(search) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: { q: search, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } });
    console.log(res.data.data[0].url);
    imageOnPage(res.data.data[0].images.original.url)
}
//adds the returned image to the html
function imageOnPage(src) {
    const images = document.getElementById('images');
    const img = document.createElement('IMG');
    img.src = src;
    img.classList.add('col-4');
    img.classList.add('m-2');
    images.append(img);
}
//deletes all the images on the page
const del = document.getElementById('delete');
del.addEventListener('click', function() {
    const imgs = document.querySelectorAll('IMG');
    for (allImg of imgs) {
        allImg.remove();
    }
})