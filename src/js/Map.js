export default class ErrorRepository {
  constructor() {
    this.code = new Map();
  }

  translate(code) {
    return this.code.get(code) || "Unknown error";
  }
}
