export class Member {

  public registrationDate: string;

  constructor (public name: string, public location: string, public introduction: string, public img: string) {
    var currentTime = new Date();
    this.registrationDate = currentTime.toDateString()
  }
}
