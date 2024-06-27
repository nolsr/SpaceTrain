export class User {
  constructor(
    public kundennr: number,
    public name: string,
    public email: string,
    public password: string,
    public buchungen: Buchung[],
  ) {
  }
}

export class Buchung {
  constructor(
    public buchungsnr: number,
    public tour: Tour,
    public preis: number,
    public besitzer: User,
  ) {
  }
}

export class Tour {
  constructor(
    public tournr: number,
    public name: string,
    public ort: string,
    public preisklasse: number,
    public beschreibung: string
  ) {
  }
}

export class Tourtermin {
  public rocket: Rocket;
  public crewmember: Crewmember;
  constructor(
    public tourterminnr: number,
    public datum: string,
    public personalnr: number,
    public raketennr: number,
    rockets: Rocket[],
    staff: Crewmember[]
  ) {
    this.datum = this.datum.substring(0, 10);
    this.rocket = rockets.find(r => r.raketennr == raketennr) || new Rocket(raketennr, '', '', '', '', '', '', '');
    this.crewmember = staff.find(s => s.personalnr == personalnr) || new Crewmember(personalnr, '');
  }
}

export class Rocket {
  constructor(
    public raketennr: number,
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
    public personalnr: number,
    public name: string,
  ) {
  }
}

export enum RocketInfoType {
  HOEHE,
  DURCHMESSER,
  SCHIFFVOLUMEN,
  TRAEGERVOLUMEN,
  STARTNUTZLASTMASSE,
  RUECKKEHRNUTZLASTMASSE
}