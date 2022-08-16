import shortId from "shortid";

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
    }, {
      src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjhfMjA3%2FMDAxNjM4MTAxNjQwMTc2.PEOUqBd2kzWagUkGBbAdEPCz6QB9Fmu2OzAOWFsbhDUg.fxtPS2U6S_T-90T5rs1Q7qJPhmuRPCkH0tM7r5VJ56Ug.JPEG.humanaut%2Faa_W1A0101-1.jpg&type=sc960_832"
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
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
};

const dummyPost = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "더미",
  },
  Images: [],
  Comments: [],
});

export const ADD_POST_REQUEST = 'ADD_POST_REQUSET';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUSET';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// action
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

// 동적 액션 크리에이터
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        // dummyPost를 앞에 추가해줘야 게시글 가장 위에 올라감
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      // action.data.content, postId, userId
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;