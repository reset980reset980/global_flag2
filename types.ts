
export enum Continent {
  Africa = '아프리카',
  Asia = '아시아',
  Europe = '유럽',
  NorthAmerica = '북아메리카',
  SouthAmerica = '남아메리카',
  Oceania = '오세아니아',
}

export enum GameMode {
  FLAG_TO_COUNTRY = 'flag_to_country',
  COUNTRY_TO_CAPITAL = 'country_to_capital'
}

export interface Country {
  name: string;
  code: string;
  continent: Continent;
  capital: string; // 수도 추가
}

export interface Option {
  name: string;
  code: string;
}

export interface Question {
  flagUrl?: string; // 국기 모드에서만 사용
  countryName?: string; // 수도 모드에서 사용
  options: Option[];
  correctAnswerCode: string;
  mode: GameMode;
}
