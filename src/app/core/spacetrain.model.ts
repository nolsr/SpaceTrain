export class User {
  constructor(
    public kundennr: number,
    public name: string,
    public email: string,
    public password: string
  ) {
  }
}

export class Buchung {
  constructor(
    public buchungsnr: number,
    public tourtermin: Tourtermin,
    public preis: number,
    public besitzer: User,
  ) {
  }
}

export class Ticket {
  constructor(
    public ticketnr: number,
    public buchungsnr: number,
    public sitzplatznr: number,
    public tourterminnr: number
  ) {
  }
}

export class Sitzplatz {
  public selected: boolean = false;

  constructor(
    public sitzplatznr: number,
    public raketennr: number,
    public preis: number,
    public bezeichnung: string,
    public belegt: boolean
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
  public sitzplaetze: Array<Sitzplatz> = [];
  constructor(
    public raketennr: number,
    public name: string,
    public hoehe: string,
    public durchmesser: string,
    public schiffvolumen: string,
    public traegervolumen: string,
    public startnutzlastmasse: string,
    public rueckkehrnutzlastmasse: string
  ) {
  }

  public setSeats(sitzplaetze: Array<Sitzplatz>): void {
    this.sitzplaetze = sitzplaetze.filter(s => s.raketennr == this.raketennr);
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