const api_endpoint = process.env.NODE_ENV === 'production' ? "https://api.example.com" : "http://localhost:9696";
export default api_endpoint;
