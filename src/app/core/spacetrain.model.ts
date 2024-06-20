export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public buchungen: Buchung[],
  ) {
  }
}

export class Buchung {
  constructor(
    public id: number,
    public tour: Tour,
    public preis: number,
    public besitzer: User,
  ) {
  }
}

export class Tour  {
  constructor(
    public id: number,
    public name: string,
    public rocket: Rocket,
    public crew: Crewmember[],
  ) {
  }
}

export class Rocket {
  constructor(
    public name: string,
    public hoehe: string,
    public durchmesser: string,
    public schiffvolumen: string,
    public traegervolumen: string,
    public startnutzlastmasse: string,
    public rueckkehrnutzlastmasse: string,
  ) {
  }
}

export class Crewmember {
  constructor(
    public id: number,
    public name: string,
  ) {
  }
}
