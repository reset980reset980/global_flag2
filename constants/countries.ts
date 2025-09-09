import { Continent } from '../types.ts';
import type { Country } from '../types.ts';

export const COUNTRIES: Country[] = [
  // Africa
  { name: '나이지리아', code: 'ng', continent: Continent.Africa, capital: '아부자' },
  { name: '이집트', code: 'eg', continent: Continent.Africa, capital: '카이로' },
  { name: '남아프리카 공화국', code: 'za', continent: Continent.Africa, capital: '케이프타운' },
  { name: '케냐', code: 'ke', continent: Continent.Africa, capital: '나이로비' },
  { name: '가나', code: 'gh', continent: Continent.Africa, capital: '아크라' },
  { name: '모로코', code: 'ma', continent: Continent.Africa, capital: '라바트' },
  { name: '에티오피아', code: 'et', continent: Continent.Africa, capital: '아디스아바바' },
  { name: '알제리', code: 'dz', continent: Continent.Africa, capital: '알제' },
  { name: '탄자니아', code: 'tz', continent: Continent.Africa, capital: '도도마' },
  { name: '세네갈', code: 'sn', continent: Continent.Africa, capital: '다카르' },

  // Asia
  { name: '대한민국', code: 'kr', continent: Continent.Asia, capital: '서울' },
  { name: '중국', code: 'cn', continent: Continent.Asia, capital: '베이징' },
  { name: '일본', code: 'jp', continent: Continent.Asia, capital: '도쿄' },
  { name: '인도', code: 'in', continent: Continent.Asia, capital: '뉴델리' },
  { name: '베트남', code: 'vn', continent: Continent.Asia, capital: '하노이' },
  { name: '태국', code: 'th', continent: Continent.Asia, capital: '방콕' },
  { name: '사우디아라비아', code: 'sa', continent: Continent.Asia, capital: '리야드' },
  { name: '이스라엘', code: 'il', continent: Continent.Asia, capital: '예루살렘' },
  { name: '필리핀', code: 'ph', continent: Continent.Asia, capital: '마닐라' },
  { name: '싱가포르', code: 'sg', continent: Continent.Asia, capital: '싱가포르' },

  // Europe
  { name: '독일', code: 'de', continent: Continent.Europe, capital: '베를린' },
  { name: '프랑스', code: 'fr', continent: Continent.Europe, capital: '파리' },
  { name: '영국', code: 'gb', continent: Continent.Europe, capital: '런던' },
  { name: '이탈리아', code: 'it', continent: Continent.Europe, capital: '로마' },
  { name: '스페인', code: 'es', continent: Continent.Europe, capital: '마드리드' },
  { name: '러시아', code: 'ru', continent: Continent.Europe, capital: '모스크바' },
  { name: '네덜란드', code: 'nl', continent: Continent.Europe, capital: '암스테르담' },
  { name: '스위스', code: 'ch', continent: Continent.Europe, capital: '베른' },
  { name: '스웨덴', code: 'se', continent: Continent.Europe, capital: '스톡홀름' },
  { name: '폴란드', code: 'pl', continent: Continent.Europe, capital: '바르샤바' },

  // North America
  { name: '미국', code: 'us', continent: Continent.NorthAmerica, capital: '워싱턴 D.C.' },
  { name: '캐나다', code: 'ca', continent: Continent.NorthAmerica, capital: '오타와' },
  { name: '멕시코', code: 'mx', continent: Continent.NorthAmerica, capital: '멕시코시티' },
  { name: '쿠바', code: 'cu', continent: Continent.NorthAmerica, capital: '아바나' },
  { name: '자메이카', code: 'jm', continent: Continent.NorthAmerica, capital: '킹스턴' },
  { name: '코스타리카', code: 'cr', continent: Continent.NorthAmerica, capital: '산호세' },
  { name: '파나마', code: 'pa', continent: Continent.NorthAmerica, capital: '파나마시티' },
  { name: '과테말라', code: 'gt', continent: Continent.NorthAmerica, capital: '과테말라시티' },
  { name: '엘살바도르', code: 'sv', continent: Continent.NorthAmerica, capital: '산살바도르' },
  { name: '온두라스', code: 'hn', continent: Continent.NorthAmerica, capital: '테구시갈파' },

  // South America
  { name: '브라질', code: 'br', continent: Continent.SouthAmerica, capital: '브라질리아' },
  { name: '아르헨티나', code: 'ar', continent: Continent.SouthAmerica, capital: '부에노스아이레스' },
  { name: '콜롬비아', code: 'co', continent: Continent.SouthAmerica, capital: '보고타' },
  { name: '페루', code: 'pe', continent: Continent.SouthAmerica, capital: '리마' },
  { name: '칠레', code: 'cl', continent: Continent.SouthAmerica, capital: '산티아고' },
  { name: '베네수엘라', code: 've', continent: Continent.SouthAmerica, capital: '카라카스' },
  { name: '에콰도르', code: 'ec', continent: Continent.SouthAmerica, capital: '키토' },
  { name: '볼리비아', code: 'bo', continent: Continent.SouthAmerica, capital: '수크레' },
  { name: '파라과이', code: 'py', continent: Continent.SouthAmerica, capital: '아순시온' },
  { name: '우루과이', code: 'uy', continent: Continent.SouthAmerica, capital: '몬테비데오' },

  // Oceania
  { name: '호주', code: 'au', continent: Continent.Oceania, capital: '캔버라' },
  { name: '뉴질랜드', code: 'nz', continent: Continent.Oceania, capital: '웰링턴' },
  { name: '피지', code: 'fj', continent: Continent.Oceania, capital: '수바' },
  { name: '파푸아뉴기니', code: 'pg', continent: Continent.Oceania, capital: '포트모르즈비' },
  { name: '솔로몬 제도', code: 'sb', continent: Continent.Oceania, capital: '호니아라' },
  { name: '바누아투', code: 'vu', continent: Continent.Oceania, capital: '포트빌라' },
  { name: '사모아', code: 'ws', continent: Continent.Oceania, capital: '아피아' },
  { name: '통가', code: 'to', continent: Continent.Oceania, capital: '누쿠알로파' },
  { name: '미크로네시아 연방', code: 'fm', continent: Continent.Oceania, capital: '팰리키르' },
  { name: '팔라우', code: 'pw', continent: Continent.Oceania, capital: '니모코' },
];