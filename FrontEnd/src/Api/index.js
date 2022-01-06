import axios from "axios";

//router in the back
const url = 'http://localhost:5000/UserRouter';

export const fetchPosts = () => axios.get(url);