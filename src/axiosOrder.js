import axios from 'axios';
const instace =axios.create({
    baseURL:'https://burger-builder-app-9f1f4.firebaseio.com/'
})

export default instace;