export const getGifs = async (category) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=enTBoMmBiUria2XypgZT14FPWHgnDQpP&q=${category}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(apiUrl);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width_small.url
    }));
    
    return gifs;
}