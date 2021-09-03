import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-ef66f-default-rtdb.firebaseio.com/'
})