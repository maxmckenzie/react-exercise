import Request from 'requestify';
import logger from './logger';

function Parser(src) {
  Request.get(src)
    .then((responce) => {
      logger.info(responce.getBody);
    });
}

export default Parser;
