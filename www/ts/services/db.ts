import { memoize } from "lodash"
let db = null;

const dbService = () => {
  return db;
}

const set = (database) => db = database;

export { set };


export default dbService;