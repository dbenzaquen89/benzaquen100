const express = require('express');
const app      = express();
const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all books 
 *      responses:
 *          200:
 *              description: Success
 * 
 */



app.get('/books', (req,res) => {
    res.send([
        {
            isbn : '9781781100486',
            title: 'Harry Potter and the Sorcerer\'s Stone',
            author: 'J.K. Rowling',
            publisher: 'Scholastic'
        }
    ]);
});

app.listen(process.env.PORT || 5000)
    
})
