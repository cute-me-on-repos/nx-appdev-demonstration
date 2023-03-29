import getHello from 'log-hello';
import http, { RequestListener } from 'http';

//create a server object:
http
  .createServer(<RequestListener>function (_req, res) {
    res.write(getHello()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080,()=>{
    console.log('listening on 8080')
  });
