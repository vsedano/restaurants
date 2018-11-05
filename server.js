import express from 'express'
import parser from 'body-parser'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import db from './models'
import routers from './routers'

const app = express();
const port = process.env.PORT || 8000 ;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const options = {
    swaggerDefinition: {
      info: {
        title: 'Restaurant Docs', 
        version: '1.0.0'
      }
    },
    securityDefinitions: {
      auth: {
        type: 'basic'
      }
    },
    apis: ['./routers/index.js'], 
  };

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/',routers)

app.listen(port,()=>{
    console.log(`Server start at port ${port}`)
})

export default app;