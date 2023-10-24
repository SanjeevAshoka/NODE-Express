import db from "../config/db.js";

class Post {
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
    async save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        const mm = d.getMonth() +1 ;
        const dd = d.getDate();
        let createddate = `${yyyy}-${mm}-${dd} 15:27:32`;
        let sql = `INSERT INTO POSTS(title, body, created_at) VALUES('${this.title}', '${this.body}', '2023-10-01 15:35:56')`;
        try {
            const newPost = await db.execute(sql);
            console.log("new=", newPost);
        } catch (error) {
            console.log("err: ", error);
        }
    }
    static findAll(){

    }
}
export default Post;