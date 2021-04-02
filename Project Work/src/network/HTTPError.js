/**
 *
 * Author: MEET SHAH
 * Email: meet2410shah@gmail.com
 * Website: meet2410shah.herokuapp.com
 *
 */

export default class HTTPError extends Error {
  constructor(err) {
    super(`${err.status} - ${err.statusText}`);
    this.status = err.status;
  }
}
