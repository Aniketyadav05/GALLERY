window.onload = function() {
    const location = window.location.href;
    const url = new URL(location);
    const search_params = new URLSearchParams(url.search);

    if(!search_params.has('id') || search_params.get('id') == "") {
        window.location.href = './';

    }
    fetch(`https://api.unsplash.com/photos/${search_params.get('id')}?client_id=${API_KEY}`).then(convert_to_json)
    .then(function (data) {
        logDetail(data);

        document.getElementById('image_id').innerText = search_params.get('id');

    });
}
    function logDetail(data){
        console.log(data);
        document.getElementById('detail_img').src = data.urls.regular;
        document.getElementById('detail_img').style.borderColor = data.color;
        document.getElementById('desc_text').innerText = data.description;
        document.getElementById('username').innerText = data.user.username;
        
        
        
        const date = new Date(data.created_at);
        const upload_date = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
        document.getElementById('Date').innerText = upload_date;

        document.getElementById('Like').innerText = data.likes;
        document.getElementById('view').innerText = data.views;
        document.getElementById('alt_desc').innerText = data.alt_description;
        document.getElementById('img_color').style.backgroundColor = data.color;
        document.getElementById('color_text').innerText = data.color;
        document.getElementById('download_link').href = data.links.download;
        
    }
