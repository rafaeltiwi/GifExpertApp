export const getGifs = async (categories) => {
    const url = `https://api.giphy.com/v1/stickers/search?limit=10&q=${encodeURI(categories)}&api_key=W6SHZFqQrCDUWTOQYX8jGjBATonF1Ozn`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gif = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gif;
    
  };
