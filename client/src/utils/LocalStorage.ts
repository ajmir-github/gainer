export default class LocalStorage<T> {
  name: string;
  inital: T;
  constructor(name: string, inital: T) {
    this.name = name;
    this.inital = inital;
  }
  get(): T {
    const json = localStorage.getItem(this.name);
    if (!json) return this.inital;
    return JSON.parse(json) as T;
  }
  set(data: T) {
    const json = JSON.stringify(data);
    localStorage.setItem(this.name, json);
  }
  reset() {
    this.set(this.inital);
  }
}
