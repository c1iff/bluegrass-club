export class Show {
  public postingDate: number = Date.now();

  constructor (public artistName: string, public date: string, public doorTime: string, public showTime: string, public location: string, public venue: string, public description: string, public overTwentyOne: boolean, public img: string) {

  }
}
