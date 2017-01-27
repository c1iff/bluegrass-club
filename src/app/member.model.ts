export class Member {
  public registrationDate: number = Date.now();

  constructor (public name: string, public location: string, public introduction: string, public img: string) {

  }
}
