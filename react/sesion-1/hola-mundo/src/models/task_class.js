import { LEVELS } from "./levels.enum";

export class Task {
  name = "";
  desc = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, desc, completed, level) {
    this.name = name;
    this.desc = desc;
    this.completed = completed;
    this.level = level;
  }
}
