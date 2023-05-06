// axios: a library to programmatically send and receive HTTP requests
import axios from 'axios';

// location of HTTP services
// Remote API: location of HTTP services from remote server on Render.com
// const TUITS_API = 'https://tuiter-node-server-app-u5q1.onrender.com/api/tuits';

// Local API
// const TUITS_API = 'http://localhost:4000/api/tuits';

// Auto switch API: Locally REACT_APP_API_BASE can be set to 'http://localhost:4000/api/tuits', but when the application runs remotely it can
// instead be set to 'https://tuiter-node-server-app-u5q1.onrender.com/api/tuits'
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
console.log(API_BASE);

// Services: encapsulate data fetching and communication with external APIs
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {
    // send HTTP GET request to TUITS_API
    const response = await axios.get(TUITS_API);
    // extract JSON array from response from server
    return response.data;
}

// send HTTP DELETE request to server
export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
