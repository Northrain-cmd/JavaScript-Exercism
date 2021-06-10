export class GradeSchool {
  _roster = { };
  roster() {
   return JSON.parse(JSON.stringify(this._roster));
  }

  add(name, gradeNumber) {
   this._roster[gradeNumber] = this.grade(gradeNumber)
    .concat(name)
    .sort();
  }
  
  grade(gradeNumber) {
      return [...(this._roster[gradeNumber] || [])]
    }
 
}
