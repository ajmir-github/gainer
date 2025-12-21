class LocalToken {
  key: string = "AUTH_TOKEN";
  get() {
    const token = localStorage.getItem(this.key);
    if (!token) return "";
    return `Bearer ${token}`;
  }
  has() {
    return Boolean(this.get());
  }
  set(token: string) {
    localStorage.setItem(this.key, token);
  }
  clear() {
    localStorage.removeItem(this.key);
  }
}

export default new LocalToken();
