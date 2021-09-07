const getGifs = async( category ) =>
{
	const key = 'TLh3XWFNQlyzPR5XSjNnCVkI7i6J05RK'
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${ key }`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(gif => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images?.downsized_medium.url,
		}
	});

	return gifs;
};

export default getGifs;
