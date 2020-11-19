/* eslint-disable class-methods-use-this */
class TestController {
  constructor(array = []) {
    this.data = array;
  }

  dispatch({ method, query, payload }) {
    if (method === 'GET') return this.getReqeust({ query, payload });
    if (method === 'POST') return this.postRequest({ query, payload });
    if (method === 'PUT' && query) return this.putRequest({ query, payload });
    if (method === 'DELETE' && query) return this.deleteRequest({ query, payload });

    return { status: 400, body: [] };
  }

  parseQuery(query) {
    return query.replace(/[?]/, '').replace(/[=]/, ' ').split(' ');
  }

  getReqeust({ query }) {
    const [attribute, search] = this.parseQuery(query);
    const response = query
      ? this.data.filter((dataPoint) => dataPoint[attribute].toString() === search)
      : null;
    return { status: 200, body: response || this.data };
  }

  postRequest({ payload }) {
    if (JSON.stringify(payload) === '{}') return { status: 400, body: [] };
    this.data.push(payload);
    return { status: 201, body: this.data.slice(-1) };
  }

  putRequest({ payload, query }) {
    const [attribute, search] = this.parseQuery(query);
    const found = this.data.findIndex((dataPoint) => dataPoint[attribute].toString() === search);
    if (found === -1) return { status: 400, body: [] };
    this.data[found] = payload;
    return { status: 202, body: [this.data[found]] };
  }

  deleteRequest({ query }) {
    const [attribute, search] = this.parseQuery(query);
    const found = this.data.filter((dataPoint) => dataPoint[attribute].toString() !== search);
    if (!(this.data.length - found.length)) return { status: 400, body: [] };
    this.data = found;
    return { status: 200, body: [] };
  }
}
