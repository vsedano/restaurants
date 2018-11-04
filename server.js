import express from 'express'
import parser from 'body-parser'
import db from './models'
import routers from './routers'

const app = express();
const port = process.env.PORT || 8000 ;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use('/',routers)

app.listen(port,()=>{
    console.log(`Server start at port ${port}`)
})

export default app;