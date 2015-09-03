import Express from 'express';
const app = Express();

export default class Server {
  constructor({port=0, path}) {
    console.log(`Port: ${port} Path: ${path}`);
    app.use(Express.static(path));
    this.context = app.listen(port, this.handleListen.bind(this));
  }

  handleListen(err) {
    if (err)
      throw err;

    const {port} = this.context.address();
    console.log(`listen: http://localhost:${port}`);
  }
}
