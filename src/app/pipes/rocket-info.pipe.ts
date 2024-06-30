import { Pipe, PipeTransform } from '@angular/core';
import { RocketInfoType } from '../core/spacetrain.model';

@Pipe({
  name: 'rocketInfo',
  standalone: true
})
export class RocketInfoPipe implements PipeTransform {

  transform(value: unknown, rocketInfoType: RocketInfoType): unknown {
    switch (rocketInfoType) {
      case RocketInfoType.HOEHE:
        return value + ' m / ' + this.metersToFeet(value as number) + ' ft';
      case RocketInfoType.DURCHMESSER:
        return value + ' m / ' + this.metersToFeet(value as number) + ' ft';
      case RocketInfoType.SCHIFFVOLUMEN:
        return value + ' m³ / ' + this.squareMetersToSquareFeet(value as number) + ' ft³';
      case RocketInfoType.TRAEGERVOLUMEN:
        return value + ' m³ / ' + this.squareMetersToSquareFeet(value as number) + ' ft³';
      case RocketInfoType.STARTNUTZLASTMASSE:
        return value + ' kg' + ' / ' + this.kilogramsToPounds(value as number) + ' lbs';
      case RocketInfoType.RUECKKEHRNUTZLASTMASSE:
        return value + ' kg' + ' / ' + this.kilogramsToPounds(value as number) + ' lbs';
      default:
        return value;
    }
  }

  private metersToFeet(meters: number): string {
    return this.addDots((meters * 3.28084).toFixed(1).replaceAll('.', ','));
  }

  private squareMetersToSquareFeet(squareMeters: number): string {
    return this.addDots((squareMeters * 10.7639).toFixed(1).replaceAll('.', ','));
  }

  private kilogramsToPounds(kilograms: number): string {
    return this.addDots((kilograms * 2.20462).toFixed(1).replaceAll('.', ','));
  }

  private addDots(x: string) {
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
}
