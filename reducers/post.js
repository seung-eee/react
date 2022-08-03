export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '황승이',
    },
    content: "첫 게시글~~~~! #리액트 #리덕스",
    Images: [{
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDRfMTk2%2FMDAxNjU0MzU0MTUyMjA4.U3xHLddRcq8_JEGqqljHbiqmf0TOF8fbLN--pjige6kg.-zb3h7Z6eV3A7ClQEECDsHT0Zqz73FoZFqArw2rSzWgg.PNG.reason315%2F%25B4%25D9%25B8%25A5%25C7%25B3%25B0%25E6%25B5%25E9-12.png&type=sc960_832"
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjhfMjA3%2FMDAxNjM4MTAxNjQwMTc2.PEOUqBd2kzWagUkGBbAdEPCz6QB9Fmu2OzAOWFsbhDUg.fxtPS2U6S_T-90T5rs1Q7qJPhmuRPCkH0tM7r5VJ56Ug.JPEG.humanaut%2Faa_W1A0101-1.jpg&type=sc960_832"
    }
    ]
  }],
  Comments: [{
    User: {
      nickname: "헤헷",
    },
    content: "축하합니다~~~",
  }, {
    User: {
      nickname: "마미무메모",
    },
    content: "지옥... 시작...",
  }],
  imagePaths: [],
  postAdded: false,
};

// action
const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: "더미",
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        // dummyPost를 앞에 추가해줘야 게시글 가장 위에 올라감
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;