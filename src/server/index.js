import Express from 'express';
const app = Express();

export default class Server {
  constructor() {
    app.use(Express.static('app/renderer'));

    app.listen(8000, '127.0.0.1', err => {
      if (err)
        throw err;

      console.log('listen http://localhost:8000');
    });
  }
}
