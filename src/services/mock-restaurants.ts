export let RESTAURANTS = [
  {
    id: 1,
    name: "[커피 박물관] 커피커퍼",
    cost: "￦5,000",
    class: "e-티켓",
    location: {
      lat: 37.822498,
      lon: 128.885359,
    },
    rating: 5.0,
    scores: [
      {
        id: 1,
        name: "커플 여행",
        score: 80
      },
      {
        id: 2,
        name: "친구와 함께",
        score: 98
      },
      {
        id: 3,
        name: "나홀로 여행",
        score: 100
      },
      {
        id: 4,
        name: "가족 여행",
        score: 90
      },
      {
        id: 5,
        name: "비즈니스 여행",
        score: 30
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_7.jpg",
    reviews: [
      {
        id: 1,
        username: "배준영",
        avatar: "assets/img/user/adam.jpg",
        content: "영광스럽게도 에니코 말토니가 핸드드립으로 내려주는 맛난 커피를 맛볼 수 있는 기회가 생겼지 머에요^^",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "김원숙",
        avatar: "assets/img/user/ben.png",
        content: "많은 커피 유물들을 관람하고 커피농장에서 자라는 나무들과 커피 열매들을 볼수 있었네요..",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "유경애",
        avatar: "assets/img/user/mike.png",
        content: "커피커퍼는 커피 박물관이고 입장하시면 커피의 유래부터 다양한 커피기계등 커피에 관련된 다양한 것들이 전시되어있습니다. 되게 아늑하고 괜찮았어요 ㅎ 예쁜 찻잔도 전시되있어서 좋았고, 입장료는 5000원이고 커피값이 들어있는것 같습니다. 다 관람하고 5관에서 커피를 수령하시면 되요 아~! 로스팅 체험관은 미리 시간 맞춰서 신청을 해야 이용할 수 있다고 하니 입장할때 시간을 맞춰보세요 ㅜ 저는 체험하지 못했습니다...ㅜ",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "김삼식",
        avatar: "assets/img/user/perry.png",
        content: "강릉여행에서 빼놓을수 없는곳이다 산골짜기 안에 잇지만 가는길이 그렇게 험하지 않아 가볼만하다 직접 재배도하고 시음도 할수 잇고 우리나라 커피의 역사에 대해 나와잇다!!",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  },  
  
  {
    id: 2,
    name: "[커피명인] 박이추 커피공장",
    cost: "￦47,000",
    class: "가이드투어",
    location: {
      lat: 37.822498,
      lon: 128.885359,
    },
    rating: 3.0,
    scores: [
      {
        id: 1,
        name: "커플 여행",
        score: 80
      },
      {
        id: 2,
        name: "친구와 함께",
        score: 98
      },
      {
        id: 3,
        name: "나홀로 여행",
        score: 100
      },
      {
        id: 4,
        name: "가족 여행",
        score: 40
      },
      {
        id: 5,
        name: "비즈니스 여행",
        score: 30
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_2.jpg",
    reviews: [
      {
        id: 1,
        username: "배준영",
        avatar: "assets/img/user/adam.jpg",
        content: "날씨도 좋고~ 아내와 아이가 정말 좋아해서 넘 기쁩니다. ㅎㅎ 커피도 바로 만들어보고^^",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "김원숙",
        avatar: "assets/img/user/ben.png",
        content: "안녕 ㅎㅎㅎ 나는 강릉이라는 도시 자체를 굉장히 좋아하는 베일이야 직장때문에 강릉에서 3년정도 살았는데 너무 매력있는 도시라고 생각해서 기회가 되면 다시 살아보고 싶은 도시이기도 해 강릉에는 호수도 있고, 산도 있고, 바다도 있고, 그리고 가장 중요한 커피가 있지! 강릉을 한마디로 표현 하자면 낭만의 도시라고 생각해 커피하나 들고 바닷가를 걷거나 경포 호수를 걸으며 생각을 정리하는 시간이란.. 넘나 좋은 것.. ",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "유경애",
        avatar: "assets/img/user/mike.png",
        content: "머리 식히기에 좋았고.. 사진엔 없지만 밤바다보면서 요즘 힘든 일 있었던 나에게 조금의 힐링?이 되는것 같았어. 사실 바다 보자마자 울뻔함...ㅠㅋㅋㅋㅋ 그리고 아침 바다 좋았고... 생각만큼 강원도 사투리는 들리지 않았다!ㅋㅋㅋㅋ",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "김삼식",
        avatar: "assets/img/user/perry.png",
        content: "2003년 강릉 시내 임당동에 문을 연 테라로사는 작고 아늑한 분위기 속에 다양한 산지별 커피와 에스프레소 베리에이션 메뉴, 매일 굽는 빵과 몇 가지 디저트가 준비되어 있다. 브런치로는 하우스메이드 요거트와 부드러운 스크램블드에그, 구운 베이컨과 약간의 빵, 그리고 아메리카노 커피로 구성되어 있다.",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  },
 {
    id: 3,
    name: "[강릉 안목항] 산토리니",
    cost: "￦37,000",
    class: "e-티켓",
    location: {
      lat: 37.822498,
      lon: 128.885359,
    },
    rating: 5.0,
    scores: [
      {
        id: 1,
        name: "커플 여행",
        score: 98
      },
      {
        id: 2,
        name: "친구와 함께",
        score: 80
      },
      {
        id: 3,
        name: "나홀로 여행",
        score: 71
      },
      {
        id: 4,
        name: "가족 여행",
        score: 64
      },
      {
        id: 5,
        name: "비즈니스 여행",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_3.jpg",
    reviews: [
      {
        id: 1,
        username: "배준영",
        avatar: "assets/img/user/adam.jpg",
        content: "날씨도 좋고~ 아내와 아이가 정말 좋아해서 넘 기쁩니다. ㅎㅎ 커피도 바로 만들어보고^^",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "김원숙",
        avatar: "assets/img/user/ben.png",
        content: "안녕 ㅎㅎㅎ 나는 강릉이라는 도시 자체를 굉장히 좋아하는 베일이야 직장때문에 강릉에서 3년정도 살았는데 너무 매력있는 도시라고 생각해서 기회가 되면 다시 살아보고 싶은 도시이기도 해 강릉에는 호수도 있고, 산도 있고, 바다도 있고, 그리고 가장 중요한 커피가 있지! 강릉을 한마디로 표현 하자면 낭만의 도시라고 생각해 커피하나 들고 바닷가를 걷거나 경포 호수를 걸으며 생각을 정리하는 시간이란.. 넘나 좋은 것.. ",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "유경애",
        avatar: "assets/img/user/mike.png",
        content: "머리 식히기에 좋았고.. 사진엔 없지만 밤바다보면서 요즘 힘든 일 있었던 나에게 조금의 힐링?이 되는것 같았어. 사실 바다 보자마자 울뻔함...ㅠㅋㅋㅋㅋ 그리고 아침 바다 좋았고... 생각만큼 강원도 사투리는 들리지 않았다!ㅋㅋㅋㅋ",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "김삼식",
        avatar: "assets/img/user/perry.png",
        content: "2003년 강릉 시내 임당동에 문을 연 테라로사는 작고 아늑한 분위기 속에 다양한 산지별 커피와 에스프레소 베리에이션 메뉴, 매일 굽는 빵과 몇 가지 디저트가 준비되어 있다. 브런치로는 하우스메이드 요거트와 부드러운 스크램블드에그, 구운 베이컨과 약간의 빵, 그리고 아메리카노 커피로 구성되어 있다.",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  },
  {
    id: 4,
    name: "[최저가보장] 사천 커피 여행",
    cost: "￦57,000",
    class: "가이드투어",
    location: {
      lat: 37.822498,
      lon: 128.885359,
    },
    rating: 4.5,
    scores: [
      {
        id: 1,
        name: "커플 여행",
        score: 98
      },
      {
        id: 2,
        name: "친구와 함께",
        score: 80
      },
      {
        id: 3,
        name: "나홀로 여행",
        score: 71
      },
      {
        id: 4,
        name: "가족 여행",
        score: 64
      },
      {
        id: 5,
        name: "비즈니스 여행",
        score: 59
      }
    ],
    thumb: "assets/img/restaurant/thumb/img_1.jpg",
    reviews: [
      {
        id: 1,
        username: "배준영",
        avatar: "assets/img/user/adam.jpg",
        content: "날씨도 좋고~ 아내와 아이가 정말 좋아해서 넘 기쁩니다. ㅎㅎ 커피도 바로 만들어보고^^",
        rating: 4,
        recommended_for: [1, 3]
      },
      {
        id: 2,
        username: "김원숙",
        avatar: "assets/img/user/ben.png",
        content: "안녕 ㅎㅎㅎ 나는 강릉이라는 도시 자체를 굉장히 좋아하는 베일이야 직장때문에 강릉에서 3년정도 살았는데 너무 매력있는 도시라고 생각해서 기회가 되면 다시 살아보고 싶은 도시이기도 해 강릉에는 호수도 있고, 산도 있고, 바다도 있고, 그리고 가장 중요한 커피가 있지! 강릉을 한마디로 표현 하자면 낭만의 도시라고 생각해 커피하나 들고 바닷가를 걷거나 경포 호수를 걸으며 생각을 정리하는 시간이란.. 넘나 좋은 것.. ",
        rating: 5,
        recommended_for: [1, 2]
      },
      {
        id: 3,
        username: "유경애",
        avatar: "assets/img/user/mike.png",
        content: "머리 식히기에 좋았고.. 사진엔 없지만 밤바다보면서 요즘 힘든 일 있었던 나에게 조금의 힐링?이 되는것 같았어. 사실 바다 보자마자 울뻔함...ㅠㅋㅋㅋㅋ 그리고 아침 바다 좋았고... 생각만큼 강원도 사투리는 들리지 않았다!ㅋㅋㅋㅋ",
        rating: 5,
        recommended_for: [2, 3]
      },
      {
        id: 4,
        username: "김삼식",
        avatar: "assets/img/user/perry.png",
        content: "2003년 강릉 시내 임당동에 문을 연 테라로사는 작고 아늑한 분위기 속에 다양한 산지별 커피와 에스프레소 베리에이션 메뉴, 매일 굽는 빵과 몇 가지 디저트가 준비되어 있다. 브런치로는 하우스메이드 요거트와 부드러운 스크램블드에그, 구운 베이컨과 약간의 빵, 그리고 아메리카노 커피로 구성되어 있다.",
        rating: 4,
        recommended_for: [4, 3]
      }
    ]
  }
]
