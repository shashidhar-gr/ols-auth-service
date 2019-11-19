import express from 'express';

async function startServer() {
    const app = express();
    
    await require('./loaders').default({ expressApp: app});
    
    app.listen(3000, err => {
        if(err) {
            console.log('Error while starting server. '+err);
            process.exit(1)
        }
        console.log('Express server running at 3000');    
    })
}

startServer();