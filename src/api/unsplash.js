import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1RmvjN-IFvIbU9gjwV6-gh6dt6PgnfTjZcO4nyY_PNw'
    }
})