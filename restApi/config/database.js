import {config} from 'dotenv';
config();
import {createPool} from 'mysql2';
const pool = createPool({
    host: "localhost", 
    user: 'root',
    password: '17BCs3146@',
    database: 'blog-app',
    connectionLimit: 10
})
export default pool;


