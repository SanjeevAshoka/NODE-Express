
import {join} from 'path';

const studentController = (req, res) => {
    res.render(join(process.cwd(), '/views/index.ejs'), {}, (err, parsedHtml)=>{
        if(err) { 
            res.status(500).send("Error While Processing");
        }
        else{
            res.status(200).send(parsedHtml)
        }
    })
}

export default studentController
