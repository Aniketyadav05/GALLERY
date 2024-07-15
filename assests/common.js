const API_KEY = "WAzxXeh8EOjerTfiS3N2UU97NZODdeO-Zknp2_getDY";

function convert_to_json(data) {
    return data.json();
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[name="Q"]');
    const container = document.getElementById('image_container');

    if (searchInput && container) {
        searchInput.addEventListener('input', () => {
            container.classList.add('blur'); 
        });

        searchInput.addEventListener('blur', () => {
            container.classList.remove('blur'); 
        });
    }
});
