import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer I6l9rxLVrMnNPCcuQoRUCqBiVxZ3u8Btsjs5bkcgLC1Ya-5llLovX8FX-P7x21eVHb2oXgP-fuljy13p1E9kRK5fpPE5Qp6zaiWwAQch1NRGltwE5NT-MY4MzAkxX3Yx'
    }
});
