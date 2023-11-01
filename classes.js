class User {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!value) {
      console.log("You need to enter firstName");
      return;
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value) {
      console.log("You need to enter lastName");
      return;
    }
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get birthYear() {
    let today = new Date();
    let yearOfBirth = today.getFullYear();
    return yearOfBirth - this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

class Student extends User {
  static MIN_GRADE_FOR_SCHOLARSHIP = 4;

  constructor(firstName, lastName, age, group, averageGrade) {
    super(firstName, lastName, age);
    this.group = group;
    this.averageGrade = averageGrade;
  }

  get group() {
    return this._group;
  }

  set group(value) {
    this._group = value;
  }

  get averageGrade() {
    return this._averageGrade;
  }

  set averageGrade(value) {
    this._averageGrade = value;
  }

  isEligibleForScholarship() {
    // const minGradeForScolarship = Student.MIN_GRADE_FOR_SCHOLARSHIP;
    return this._averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP
      ? true
      : false;
  }
}

class Teacher extends User {
  constructor(firstName, lastName, age, groups = [], yearsOfExperience) {
    super(firstName, lastName, age);
    this.groups = groups;
    this.yearsOfExperience = yearsOfExperience;
  }

  get groups() {
    return this._groups;
  }

  set groups(value) {
    if (Array.isArray(value)) {
      this._groups = value;
    } else {
      this._groups = [value];
    }
  }

  get yearsOfExperience() {
    return this._yearsOfExperience;
  }

  set yearsOfExperience(value) {
    this._yearsOfExperience = value;
  }

  isGroupTeacher(groupName) {
    return this._groups.includes(groupName) ? true : false;
  }
}

const student1 = new Student("Tom", "Cruise", 60, "50b", 4.9);
const student2 = new Student("Leonardo", "DiCaprio", 48, "62c", 3.9);
const teacher1 = new Teacher("Brad", "Pitt", 59, ["50b", "51c"], 41);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4
