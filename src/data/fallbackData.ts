export interface Department {
  code: string;
  name: string;
  level: number;
}

export interface FallbackEmployee {
  departmentCode: string; // The code of their parents/leaf department
  department: string;     // Full display department name (e.g., "기획조정실 - 정책기획팀")
  team: string;           // Sub-team
  position: string;       // Position name with grade
  phone: string;          // Ext phone
  task: string;           // Detailed responsibilities
}

export const FALLBACK_DEPARTMENTS: Department[] = [
  // Level 1
  { code: "39904950000", name: "시민시장담당관", level: 1 },
  { code: "39904810000", name: "시민안전관", level: 1 },
  { code: "39904960000", name: "홍보담당관", level: 1 },
  { code: "39902380000", name: "감사관", level: 1 },
  { code: "39904830000", name: "기획조정실", level: 1 },
  // Level 2 (under 기획조정실)
  { code: "39904990000", name: "정책기획과", level: 2 },
  { code: "39905000000", name: "예산법무과", level: 2 },
  { code: "39905010000", name: "정보통신과", level: 2 },
  
  // Level 1
  { code: "39905350000", name: "행정국", level: 1 },
  // Level 2 (under 행정국)
  { code: "39905360000", name: "행정지원과", level: 2 },
  { code: "39905370000", name: "자치행정과", level: 2 },
  { code: "39905380000", name: "민원봉사과", level: 2 },

  // Level 1
  { code: "39905400000", name: "복지국", level: 1 },
  // Level 2 (under 복지국)
  { code: "39905410000", name: "복지정책과", level: 2 },
  { code: "39905420000", name: "노인복지과", level: 2 },
  { code: "39905430000", name: "장애인복지과", level: 2 },

  // Level 1
  { code: "39905040000", name: "교통국", level: 1 },
  // Level 2 (under 교통국)
  { code: "39905070000", name: "교통정책과", level: 2 },
  { code: "39905080000", name: "대중교통과", level: 2 },
  { code: "39905090000", name: "주차관리과", level: 2 },
  { code: "39905100000", name: "도로관리과", level: 2 },

  // Level 1
  { code: "39905120000", name: "도시국", level: 1 },
  // Level 2 (under 도시국)
  { code: "39905130000", name: "도시계획과", level: 2 },
  { code: "39905140000", name: "건축과", level: 2 },
  { code: "39905150000", name: "주택과", level: 2 },

  // Level 1
  { code: "39905200000", name: "세정국", level: 1 },
  // Level 2 (under 세정국)
  { code: "39905210000", name: "세정과", level: 2 },
  { code: "39905220000", name: "징수과", level: 2 },

  // Level 1
  { code: "39901500000", name: "다산1동 행정복지센터", level: 1 },
  { code: "39901100000", name: "화도읍 행정복지센터", level: 1 }
];

export const FALLBACK_EMPLOYEES: FallbackEmployee[] = [
  // 시민시장담당관 (39904950000)
  {
    departmentCode: "39904950000",
    department: "시민시장담당관",
    team: "시민소통팀",
    position: "지방행정주사 (소통팀장)",
    phone: "031-590-2031",
    task: "시민 시장실 운영 총괄 및 민원 소통, 건의 사항 접수 및 관리"
  },
  {
    departmentCode: "39904950000",
    department: "시민시장담당관",
    team: "시민소통팀",
    position: "지방행정서기 (주무관)",
    phone: "031-590-2032",
    task: "시장실 접수 정기 민원 처리 현장 방문 소통 및 건의 사항 관리"
  },
  {
    departmentCode: "39904950000",
    department: "시민시장담당관",
    team: "현답소통팀",
    position: "지방행정사무관 (담당관)",
    phone: "031-590-2041",
    task: "현문현답 민원 소통, 민생 현장 방문 및 주민 갈등 조정 총괄"
  },

  // 시민안전관 (39904810000)
  {
    departmentCode: "39904810000",
    department: "시민안전관",
    team: "안전기획팀",
    position: "지방행정주사",
    phone: "031-590-2111",
    task: "재난 및 안전 관리 조정 총괄 계획 수립, 재난 안전 인프라 구축"
  },
  {
    departmentCode: "39904810000",
    department: "시민안전관",
    team: "재난대응팀",
    position: "지방방재서기",
    phone: "031-590-2112",
    task: "여름철 태풍 호우 재난 대응 및 겨울철 폭설 한파 대응, 재난대책본부 운영"
  },

  // 홍보담당관 (39904960000)
  {
    departmentCode: "39904960000",
    department: "홍보담당관",
    team: "시정홍보팀",
    position: "지방행정주사 (홍보팀장)",
    phone: "031-590-2061",
    task: "시정 브리핑 및 언론 취재 지원, 보도자료 배포 총괄, 홍보 종합 계획"
  },
  {
    departmentCode: "39904960000",
    department: "홍보담당관",
    team: "미디어소통팀",
    position: "지방방송통신서기",
    phone: "031-590-2063",
    task: "시 공식 블로그, 페이스북, 인스타그램 및 SNS 마케팅 홍보 기획"
  },

  // 감사관 (39902380000)
  {
    departmentCode: "39902380000",
    department: "감사관",
    team: "감사행정팀",
    position: "지방행정주사",
    phone: "031-590-2081",
    task: "공직기강 확립 및 정기 종합 감사, 소속 기관 감사 실시"
  },
  {
    departmentCode: "39902380000",
    department: "감사관",
    team: "청렴팀",
    position: "지방행정주사보",
    phone: "031-590-2083",
    task: "공직자 행동강령 위반 신고 접수 및 반부패 청렴 시책 추진"
  },

  // 정책기획과 (39904990000)
  {
    departmentCode: "39904990000",
    department: "기획조정실 - 정책기획과",
    team: "정책기획팀",
    position: "지방행정주사 (기획팀장)",
    phone: "031-590-2101",
    task: "선도 사업 종합 계획 수립 및 시정 정책 조율, 의회 협력 업무"
  },
  {
    departmentCode: "39904990000",
    department: "기획조정실 - 정책기획과",
    team: "정책기획팀",
    position: "지방행정서기",
    phone: "031-590-2102",
    task: "정부 대외 평가 대응 및 시정 연구 지원, 인구 정책 수립"
  },

  // 예산법무과 (39905000000)
  {
    departmentCode: "39905000000",
    department: "기획조정실 - 예산법무과",
    team: "예산팀",
    position: "지방행정주사 (예산팀장)",
    phone: "031-590-2121",
    task: "시정 예산 총괄 편성 및 재정 투자 분석, 추가경정예산 편성 심의"
  },
  {
    departmentCode: "39905000000",
    department: "기획조정실 - 예산법무과",
    team: "법무팀",
    position: "지방행정주사보 (송무담당)",
    phone: "031-590-2125",
    task: "시 상대 소송 행정 심판 조정 및 자치 법규 제개정 심사, 조례 규칙 관리"
  },

  // 정보통신과 (39905010000)
  {
    departmentCode: "39905010000",
    department: "기획조정실 - 정보통신과",
    team: "정보보안팀",
    position: "지방전산주사",
    phone: "031-590-2141",
    task: "개인정보 보호 계획 수립 및 정보 보안 관리, 행정 전산망 보안 서버 운영"
  },
  {
    departmentCode: "39905010000",
    department: "기획조정실 - 정보통신과",
    team: "통신운영팀",
    position: "지방방송통신서기 (네트웍담당)",
    phone: "031-590-2145",
    task: "시 전산 네트웍 및 무선 인터넷 인프라 유지 보수, 행정 전화 통신망 운영"
  },

  // 행정지원과 (39905360000)
  {
    departmentCode: "39905360000",
    department: "행정국 - 행정지원과",
    team: "인사팀",
    position: "지방행정주사 (인사팀장)",
    phone: "031-590-2201",
    task: "지방공무원 승진 및 인사 발령 총괄, 복무 제도 관리 및 채용"
  },
  {
    departmentCode: "39905360000",
    department: "행정국 - 행정지원과",
    team: "총무팀",
    position: "지방행정서기",
    phone: "031-590-2203",
    task: "청사 방호 및 공무원 후생 복지 관리, 맞춤형 복지 카드 운영"
  },

  // 자치행정과 (39905370000)
  {
    departmentCode: "39905370000",
    department: "행정국 - 자치행정과",
    team: "자치행정팀",
    position: "지방행정주사",
    phone: "031-590-2221",
    task: "주민자치회 활성화 및 주민자치센터 운영 조향, 이통장단 운영"
  },

  // 민원봉사과 (39905380000)
  {
    departmentCode: "39905380000",
    department: "행정국 - 민원봉사과",
    team: "여권팀",
    position: "지방행정주사 (여권팀장)",
    phone: "031-590-2251",
    task: "외교부 여권접수 및 심사 교부 업무 총괄, 여권 민원실 환경 개선"
  },
  {
    departmentCode: "39905380000",
    department: "행정국 - 민원봉사과",
    team: "여권팀",
    position: "지방행정서기 (여권발급)",
    phone: "031-590-2253",
    task: "여권 발급 신규 신청서 접수, 수수료 수납 및 여권 분실 교부 처리"
  },
  {
    departmentCode: "39905380000",
    department: "행정국 - 민원봉사과",
    team: "민원행정팀",
    position: "지방행정서기 (주민등록)",
    phone: "031-590-2261",
    task: "주민등록 등초본 기본증명서 발급 대장 관리, 인감증명서 영문 등기"
  },

  // 복지정책과 (39905410000)
  {
    departmentCode: "39905410000",
    department: "복지국 - 복지정책과",
    team: "복지기획팀",
    position: "지방사회복지주사",
    phone: "031-590-2301",
    task: "지역 사회 복지 계획 수립 및 긴급 복지 지원 수집, 복지 사각지대 발굴"
  },
  {
    departmentCode: "39905410000",
    department: "복지국 - 복지정책과",
    team: "기초보장팀",
    position: "지방사회복지서기",
    phone: "031-590-2303",
    task: "국민기초생활보장 생계급여 심사 지급관리, 수급자 및 부양의무자 자격 변동"
  },

  // 노인복지과 (39905420000)
  {
    departmentCode: "39905420000",
    department: "복지국 - 노인복지과",
    team: "노인정책팀",
    position: "지방사회복지주사 (노인팀장)",
    phone: "031-590-2331",
    task: "노인 일자리 사업 계획 수립 및 경로 우대 정책 지원, 노인 대학 지원"
  },
  {
    departmentCode: "39905420000",
    department: "복지국 - 노인복지과",
    team: "경로당운영팀",
    position: "지방사회복지서기",
    phone: "031-590-2335",
    task: "경로당 난방비 지원 운영 및 유지 보수 공사 지원, 경로당 물품 공급"
  },

  // 장애인복지과 (39905430000)
  {
    departmentCode: "39905430000",
    department: "복지국 - 장애인복지과",
    team: "장애인정책팀",
    position: "지방사회복지주사",
    phone: "031-590-2351",
    task: "장애인 보조 수당 및 일자리 지원 수당 지급, 장애인 편의 시설 설치 기준 지도"
  },

  // 교통정책과 (39905070000)
  {
    departmentCode: "39905070000",
    department: "교통국 - 교통정책과",
    team: "교통기획팀",
    position: "지방행정주사 (교통기획팀장)",
    phone: "031-590-2401",
    task: "시정 교통 종합 개발 계획 수립 및 교통 안전 시설 확충, 도로망 정비 계획"
  },
  {
    departmentCode: "39905070000",
    department: "교통국 - 교통정책과",
    team: "광역교통팀",
    position: "지방시설주사 (광역철도)",
    phone: "031-590-2405",
    task: "지하철 8호선 별내선 연장, 9호선 지선 계획, 광역 철도망 유지 관리"
  },

  // 대중교통과 (39905080000)
  {
    departmentCode: "39905080000",
    department: "교통국 - 대중교통과",
    team: "버스노선팀",
    position: "지방행정주사 (노선팀장)",
    phone: "031-590-2431",
    task: "시내버스 광역버스 마을버스 노선 조정 수립, 대중교통 증차 및 배차 시간표 승인"
  },
  {
    departmentCode: "39905080000",
    department: "교통국 - 대중교통과",
    team: "택시행정팀",
    position: "지방행정서기",
    phone: "031-590-2435",
    task: "개인택시 면허 신규 인가, 법인택시 노무 관리 및 택시 승강장 관리"
  },

  // 주차관리과 (39905090000)
  {
    departmentCode: "39905090000",
    department: "교통국 - 주차관리과",
    team: "주차장조성팀",
    position: "지방시설주사 (주차장팀장)",
    phone: "031-590-2451",
    task: "공영 주차장 신축 설계 구축, 내 집 앞 주차장 가꾸기 지원 사업"
  },
  {
    departmentCode: "39905090000",
    department: "교통국 - 주차관리과",
    team: "불법주정차단속팀",
    position: "지방행정서기 (단속담당)",
    phone: "031-590-2455",
    task: "불법주정차 실시간 고정용 CCTV 단속 및 수동 단속 과태료 부과 징수, 이의 신청"
  },

  // 도로관리과 (39905100000)
  {
    departmentCode: "39905100000",
    department: "교통국 - 도로관리과",
    team: "도로유지팀",
    position: "지방시설주사",
    phone: "031-590-2481",
    task: "아스팔트 포장 파손 아스콘 보수 포트홀 정비, 교량 안전 점검 터널 점검"
  },
  {
    departmentCode: "39905100000",
    department: "교통국 - 도로관리과",
    team: "도로점용허가팀",
    position: "지방시설서기",
    phone: "031-590-2485",
    task: "도로 굴착 허가증 발급, 보도블록 굴착 점용 과태료 관리 및 시설물 불법 복구 단속"
  },

  // 도시계획과 (39905130000)
  {
    departmentCode: "39905130000",
    department: "도시국 - 도시계획과",
    team: "도시기획팀",
    position: "지방시설주사",
    phone: "031-590-2501",
    task: "2035년 도시 기본 계획 수립 및 국토계획법상 용도지역 변경 지정"
  },

  // 건축과 (39905140000)
  {
    departmentCode: "39905140000",
    department: "도시국 - 건축과",
    team: "건축허가팀",
    position: "지방시설주사 (허가팀장)",
    phone: "031-590-2521",
    task: "민간 대단지 상가 및 고정식 빌딩 건축 허가 신청 심의 수립"
  },
  {
    departmentCode: "39905140000",
    department: "도시국 - 건축과",
    team: "건축신고팀",
    position: "지방시설서기 (소형건축)",
    phone: "031-590-2525",
    task: "소규모 농가 주택 신축 증축 등 가설 건축물 신고 수납 및 용도 변경 인허가"
  },
  {
    departmentCode: "39905140000",
    department: "도시국 - 건축과",
    team: "위반건축물단속팀",
    position: "지방시설서기 (무허가단속)",
    phone: "031-590-2529",
    task: "무허가 패널 건축물 무단 가건물 설치 단속 및 이행강제금 부과 감정"
  },

  // 주택과 (39905150000)
  {
    departmentCode: "39905150000",
    department: "도시국 - 주택과",
    team: "주택행정팀",
    position: "지방행정주사",
    phone: "031-590-2551",
    task: "공동 주택 관리 조례 제정 및 입주민 분쟁 조정 위원회 소집, 청년 주거 안심 지원"
  },

  // 세정과 (39905210000)
  {
    departmentCode: "39905210000",
    department: "세정국 - 세정과",
    team: "도세팀",
    position: "지방세무주사 (취득세팀장)",
    phone: "031-590-2601",
    task: "부동산 취득세 취득 신고 가액 산정 및 상속세 자진 납부 검토 심사"
  },
  {
    departmentCode: "39905210000",
    department: "세정국 - 세정과",
    team: "도세팀",
    position: "지방세무서기 (취득세세율)",
    phone: "031-590-2603",
    task: "주택 단독 주거용 다주택 취득세 감면 조건 등록 검사, 등기용 등록세 부과"
  },
  {
    departmentCode: "39905210000",
    department: "세정국 - 세정과",
    team: "시세팀",
    position: "지방세무서기 (재산세부과)",
    phone: "031-590-2611",
    task: "건축물 재산세 및 주택분 토지분 재산세 고지서 발부, 주민세 균등분 단수 부과"
  },

  // 징수과 (39905220000)
  {
    departmentCode: "39905220000",
    department: "세정국 - 징수과",
    team: "체납징수팀",
    position: "지방행정주사 (징수팀장)",
    phone: "031-590-2631",
    task: "고액 상습 체납자 가압류 및 차량 번호판 영치 기획, 체납액 고지서 송달"
  },

  // 다산1동 행정복지센터 (39901500000)
  {
    departmentCode: "39901500000",
    department: "다산1동 행정복지센터",
    team: "주민생활지원과",
    position: "지방사회복지주사 (사회보장)",
    phone: "031-590-4821",
    task: "취약 계층 주소 전입 전출 긴급 복지 양육 수당 지급 소속 전담"
  },
  {
    departmentCode: "39901500000",
    department: "다산1동 행정복지센터",
    team: "정기행정과",
    position: "지방행정서기 (주민실무)",
    phone: "031-590-4811",
    task: "지방 행정 발급 전입 신고 처리 주민등록등본 일선 발급 창구 운영"
  },

  // 화도읍 행정복지센터 (39901100000)
  {
    departmentCode: "39901100000",
    department: "화도읍 행정복지센터",
    team: "행정지원과",
    position: "지방행정주사",
    phone: "031-590-3401",
    task: "화도읍 행정 총괄 및 전입 신고 등초본 일체 행정 서비스 주도"
  }
];
