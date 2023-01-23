export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    if (this.members.has(item)) {
      throw new Error("Данный персонаж уже у вас в команде");
    }

    return this.members.add(item);
  }

  addAll(...item) {
    for (const elem of item) {
      this.members.add(elem);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
