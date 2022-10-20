'use strict';
exports.id = 259;
exports.ids = [259];
exports.modules = {
  /***/ 83510: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: () => /* binding */ _app,
    });

    // EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
    var jsx_runtime = __webpack_require__(85893);
    // EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
    var lib = __webpack_require__(37424);
    // EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
    var redux_toolkit_cjs_production_min = __webpack_require__(47389);
    // EXTERNAL MODULE: ./src/store/services/marketplaceapi.js
    var marketplaceapi = __webpack_require__(1589); // CONCATENATED MODULE: ./src/store/slices/marketplace.slice.js
    /**
     * Initial state is the structure of the data
     * change data model if needed
     */ const initialState = {
      nftMarketPlacedata: [],
      pending: null,
      error: false,
    };
    /**
     * reducers are the action to update the current store data
     * add more reducers if needed
     */ const marketPlaceSlice = (0,
    redux_toolkit_cjs_production_min.createSlice)({
      name: 'marketPlace',
      initialState,
      reducers: {},
      extraReducers: {
        [marketplaceapi /* getMarketPlaceApiData.pending */.b.pending]: (
          state
        ) => {
          state.pending = true;
          state.error = false;
        },
        [marketplaceapi /* getMarketPlaceApiData.fulfilled */.b.fulfilled]: (
          state,
          action
        ) => {
          let payload = action.payload[0].results;
          let page = action.payload[1];
          state.pending = false;
          state.nftMarketPlacedata =
            page === 1 ? payload : [...state.nftMarketPlacedata, ...payload];
        },
        [marketplaceapi /* getMarketPlaceApiData.rejected */.b.rejected]: (
          state
        ) => {
          state.pending = false;
          state.error = true;
        },
      },
    });
    /**
     * Export every action created in reducers to access it from anywhere
     */ const { getMarketPlaceDataSuccess } = marketPlaceSlice.actions;
    /* harmony default export */ const marketplace_slice =
      marketPlaceSlice.reducer;

    // EXTERNAL MODULE: ./node_modules/axios/index.js
    var axios = __webpack_require__(9669);
    var axios_default = /*#__PURE__*/ __webpack_require__.n(axios); // CONCATENATED MODULE: ./src/store/services/singlenftapi.js
    const getSinglenftApiData = (0,
    redux_toolkit_cjs_production_min.createAsyncThunk)(
      'singlenft/getdata',
      async (id) => {
        const response = await axios_default().get(`/mockdb.json`);
        return response.data[0];
      }
    ); // CONCATENATED MODULE: ./src/store/slices/singlenft.slice.js

    const singlenft_slice_initialState = {
      data: [],
      pending: null,
      error: false,
    };
    /**
     * reducers are the action to update the current store data
     * add more reducers if needed
     * extrareducers is used for redux-thunk implementation
     */ const singleNftSlice = (0,
    redux_toolkit_cjs_production_min.createSlice)({
      name: 'singlenft',
      initialState: singlenft_slice_initialState,
      reducers: {
        getSingleNft: (state, action) => {
          let payload = action.payload;
          state.name = payload.name;
          state.description = payload.description;
          state.id = payload.id;
        },
      },
      extraReducers: {
        [getSinglenftApiData.pending]: (state) => {
          state.pending = true;
          state.error = false;
        },
        [getSinglenftApiData.fulfilled]: (state, action) => {
          let payload = action.payload;
          state.pending = false;
          state.data = payload;
        },
        [getSinglenftApiData.error]: (state) => {
          state.pending = false;
          state.error = true;
        },
      },
    });
    /**
     * Export every action created in reducers to access it from anywhere
     */ const { getSingleNft, buyButton } = singleNftSlice.actions;
    /* harmony default export */ const singlenft_slice = singleNftSlice.reducer; // CONCATENATED MODULE: ./src/store/slices/connectWallet.slice.js

    const connectWallet_slice_initialState = {
      alldata: [],
      wallet: [],
    };
    /**
     * reducers are the action to update the current store data
     * add more reducers if needed
     */ const walletSlice = (0, redux_toolkit_cjs_production_min.createSlice)({
      name: 'wallet',
      initialState: connectWallet_slice_initialState,
      reducers: {
        getConnectWalletData: (state, action) => {
          let payload = action.payload;
          state.alldata = payload;
          state.wallet = payload.library.connection.url;
        },
      },
    });
    const { getConnectWalletData } = walletSlice.actions;
    /* harmony default export */ const connectWallet_slice =
      walletSlice.reducer; // CONCATENATED MODULE: ./src/store/store.js

    /**
     * Add more slices if needed
     */ /* harmony default export */ const store = (0,
    redux_toolkit_cjs_production_min.configureStore)({
      reducer: {
        marketPlace: marketplace_slice,
        singlenft: singlenft_slice,
        wallet: connectWallet_slice,
      },
    }); // CONCATENATED MODULE: ./pages/_app.js

    function MyApp({ Component, pageProps }) {
      return /*#__PURE__*/ jsx_runtime.jsx(lib.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
          ...pageProps,
        }),
      });
    }
    /* harmony default export */ const _app = MyApp;

    /***/
  },

  /***/ 1589: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ b: () => /* binding */ getMarketPlaceApiData,
      /* harmony export */
    });
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(47389);
    /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(9669);
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

    const { NEXT_PUBLIC_BASE_URL } = process.env;
    const getMarketPlaceApiData = (0,
    _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(
      'marketplace/getdata',
      async ({ url }) => {
        console.log(url, 'reaapi');
        const newData = collectionId ? collectionId : '';
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(
          `${NEXT_PUBLIC_BASE_URL}api/v1/nft${url}`
        );
        return [response.data, page];
      }
    );

    /***/
  },

  /***/ 97020: /***/ (module) => {
    module.exports = JSON.parse(
      '{"polyfillFiles":["static/chunks/polyfills-0d1b80a048d4787e.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/izUntyrZGDA2YcVh_G2ML/_buildManifest.js","static/izUntyrZGDA2YcVh_G2ML/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/263-b0194e4689980ac6.js","static/css/0d2bb89a3412b18d.css","static/chunks/pages/index-fcbd7e88e080ce0d.js"],"/_app":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/css/2039247ce255a79c.css","static/chunks/pages/_app-751f5d346ff624d6.js"],"/_error":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/pages/_error-effe22be6ff34abe.js"],"/collections":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/207-34a3e48316b53757.js","static/chunks/263-b0194e4689980ac6.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/collections-e1a4b3b630380ad5.js"],"/marketplace":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/782-b1484366309cb9d5.js","static/chunks/853-6e220187a662b68c.js","static/chunks/263-b0194e4689980ac6.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/marketplace-b84cfe0e0287e923.js"],"/marketplace/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/782-b1484366309cb9d5.js","static/chunks/207-34a3e48316b53757.js","static/chunks/791-2a37cf50cea65e25.js","static/chunks/542-5110497329134a8d.js","static/chunks/263-b0194e4689980ac6.js","static/chunks/801-136eca7e6a490e3f.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/marketplace/[id]-c32fa70c380eabd2.js"],"/profile":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/782-b1484366309cb9d5.js","static/chunks/853-6e220187a662b68c.js","static/chunks/718-ff583ff815cbd03e.js","static/chunks/263-b0194e4689980ac6.js","static/css/b3b123d835495d10.css","static/chunks/pages/profile-aea1be7a656984b4.js"],"/profile/collected/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/782-b1484366309cb9d5.js","static/chunks/207-34a3e48316b53757.js","static/chunks/791-2a37cf50cea65e25.js","static/chunks/263-b0194e4689980ac6.js","static/chunks/801-136eca7e6a490e3f.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/collected/[id]-556a03420a57033b.js"],"/profile/sale/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/607-35f625a916a50564.js","static/chunks/782-b1484366309cb9d5.js","static/chunks/207-34a3e48316b53757.js","static/chunks/791-2a37cf50cea65e25.js","static/chunks/263-b0194e4689980ac6.js","static/chunks/801-136eca7e6a490e3f.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/sale/[id]-f67643fad2d5a4ee.js"],"/profile/sell":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/542-5110497329134a8d.js","static/chunks/263-b0194e4689980ac6.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/sell-c5c0ef17524e482d.js"],"/roadmap":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-7dd079f26dc14300.js","static/chunks/263-b0194e4689980ac6.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/roadmap-2c4f864c635a9e69.js"]},"ampFirstPages":[]}'
    );

    /***/
  },

  /***/ 73978: /***/ (module) => {
    module.exports = {};

    /***/
  },

  /***/ 59450: /***/ (module) => {
    module.exports = { Dg: [] };

/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-0d1b80a048d4787e.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/3m9Hkq8VtpvR5PseZDKtu/_buildManifest.js","static/3m9Hkq8VtpvR5PseZDKtu/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/773-cc3b4defd2e69514.js","static/css/0d2bb89a3412b18d.css","static/chunks/pages/index-190d8f4e8e82ffb4.js"],"/_app":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/css/052724803fe04558.css","static/chunks/pages/_app-b3d40dfdb600493c.js"],"/_error":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/pages/_error-effe22be6ff34abe.js"],"/collections":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/207-dfcd1a564a1a804d.js","static/chunks/773-cc3b4defd2e69514.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/collections-80fb2822f3cacb61.js"],"/makeoffer/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/542-5110497329134a8d.js","static/chunks/896-424fcbfe9b14ce32.js","static/chunks/773-cc3b4defd2e69514.js","static/css/5eb0e5e0d83a44e4.css","static/chunks/pages/makeoffer/[id]-95870f6ef53d586a.js"],"/marketplace":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/782-c93e510a802896ec.js","static/chunks/853-97aac5dac8de98ba.js","static/chunks/773-cc3b4defd2e69514.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/marketplace-fc3d42606f07bf36.js"],"/marketplace/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/782-c93e510a802896ec.js","static/chunks/207-dfcd1a564a1a804d.js","static/chunks/542-5110497329134a8d.js","static/chunks/671-f386da9d300ca3cc.js","static/chunks/773-cc3b4defd2e69514.js","static/chunks/839-e9839ba3679da846.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/marketplace/[id]-4726fa0306d11da2.js"],"/profile":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/782-c93e510a802896ec.js","static/chunks/853-97aac5dac8de98ba.js","static/chunks/718-40a3463f8a786155.js","static/chunks/773-cc3b4defd2e69514.js","static/css/b3b123d835495d10.css","static/chunks/pages/profile-575b44d783868256.js"],"/profile/collected/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/782-c93e510a802896ec.js","static/chunks/207-dfcd1a564a1a804d.js","static/chunks/671-f386da9d300ca3cc.js","static/chunks/773-cc3b4defd2e69514.js","static/chunks/839-e9839ba3679da846.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/collected/[id]-5e2bc074ffdb2bf6.js"],"/profile/sale/[id]":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/739-02901253d0318f36.js","static/chunks/782-c93e510a802896ec.js","static/chunks/207-dfcd1a564a1a804d.js","static/chunks/671-f386da9d300ca3cc.js","static/chunks/773-cc3b4defd2e69514.js","static/chunks/839-e9839ba3679da846.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/sale/[id]-3b6386992f90e79f.js"],"/profile/sell":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/856-1cc9ae1d7058ff90.js","static/chunks/542-5110497329134a8d.js","static/chunks/773-cc3b4defd2e69514.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/profile/sell-4d1a8b381866308d.js"],"/roadmap":["static/chunks/webpack-5761f3a204ffdf4a.js","static/chunks/framework-0ba0ddd33199226d.js","static/chunks/main-f283861dad537ff4.js","static/chunks/de297ff1-a13fd0c5ccf262f0.js","static/chunks/505-11960c11b6cb3265.js","static/chunks/773-cc3b4defd2e69514.js","static/css/63ee3b5144e20fe2.css","static/chunks/pages/roadmap-59f286c4a4d63ad4.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
