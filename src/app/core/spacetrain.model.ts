export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public buchungen: Buchung[],
  ) {
  }
}

export class Buchung {
  constructor(
    public id: string,
    public tour: Tour,
    public preis: number,
    public besitzer: User,
  ) {
  }

}

export class Tour  {
  constructor(
    public id: string,
    public name: string,
    public rocket: Rocket,
    public crew: Crewmember[],
  ) {
  }
}

export class Rocket {
  constructor(
    public id: string,
    public name: string,
  ) {
  }
}

export class Crewmember {
  constructor(
    public id: string,
    public name: string,
  ) {
  }
}
