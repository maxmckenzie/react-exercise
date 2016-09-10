import http from 'http';
import logger from './logger';

function Parser(src) {
  http.get(src, (res) => {
    let body = '';

    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', () => {
      const responce = JSON.parse(body);
      logger.info('Got a response: ', responce.picture);
    });
  }).on('error', (e) => {
    logger.info('Got an error: ', e);
  });
}

export default Parser;
