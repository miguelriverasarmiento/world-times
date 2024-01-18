export const loadNews = async () => {
    try {
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_365401e7c93975223c596f47071491f511c7d&country=us&category=science')
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }   
}