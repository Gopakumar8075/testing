"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 76500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production","contents":"NEXT_PUBLIC_BASE_URL = https://ownnftapi.festivalnfts.xyz/\nNEXT_PUBLIC_POLYGON_TESTNET_CHAINID = 80001\nNEXT_PUBLIC_POLYGON_TESTNET_CHAINNAME = Polygon Test Net\nNEXT_PUBLIC_POLYGON_TESTNET_RPCURL= https://rpc-mumbai.maticvigil.com/\nNEXT_PUBLIC_POLYGON_TESTNET_BLOCKURL = https://polygonscan.com/\nNEXT_PUBLIC_BINANCE_MAINNET_CHAINID = 56\nNEXT_PUBLIC_BINANCE_MAINNET_CHAINNAME = Binance Smart Chain\nNEXT_PUBLIC_BINANCE_MAINNET_RPCURL= https://bsc-dataseed.binance.org/\nNEXT_PUBLIC_BINANCE_MAINNET_BLOCKURL = https://bscscan.com/\nNEXT_PUBLIC_POLYGON_MAINNET_CHAINID = 137\nNEXT_PUBLIC_POLYGON_MAINNET_CHAINNAME = Polygon\nNEXT_PUBLIC_POLYGON_MAINNET_RPCURL= https://polygon-rpc.com/\nNEXT_PUBLIC_POLYGON_MAINNET_BLOCKURL = https://polygonscan.com/\n\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(23105)

      const appMod = __webpack_require__(83510)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(51005)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? {
          afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        }
        : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: rewrites,
        i18n: undefined,
        page: "/profile/collected/[id]",
        buildId: "3m9Hkq8VtpvR5PseZDKtu",
        escapedBuildId: "3m9Hkq8VtpvR5PseZDKtu",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"b215484e85ed0412df50f90ed502f57c",previewModeSigningKey:"668bce126501dafe77e6cdec5bd2d5828dcc13a3dfc92647b91ba910b1650d6d",previewModeEncryptionKey:"0d047d5cd77a1eb67978a10b423bfee21acf735b5199c012e906556c04e8fd2e"}
      })
      
    

/***/ }),

/***/ 51005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _src_components_marketplace_details_MarketCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67618);
/* harmony import */ var _src_components_marketplace_details_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5357);
/* harmony import */ var _src_components_marketplace_details_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25949);
/* harmony import */ var _src_utilitis_BasicLayoutWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2640);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43047);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3283);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_nft_button_nft_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41540);
/* harmony import */ var _src_components_marketplace_details_SimilarProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1705);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_connect_wallet_useConnect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23942);












// import HistoryTable from '../../../src/components/marketplace-details/HistoryTable';


const { NEXT_PUBLIC_BASE_URL  } = process.env;
const Index = ({ name , photo , description  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const id = router.query.id;
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const { getProviders  } = (0,_src_components_connect_wallet_useConnect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const getdata = async ()=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_11___default().get(`${NEXT_PUBLIC_BASE_URL}api/v1/nft/${id}`);
        setData(response);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        getdata();
    }, [
        id
    ]);
    const handleclick = ()=>{
        router.push("/marketplace/");
    };
    const handleSell = (id)=>{
        router.push(`/profile/sell?id=${id}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Weapons Inc"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("metadata", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:image",
                                content: photo
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:name",
                                content: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: description
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-marketplacebackground bg-no-repeat relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_13__.Container, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:flex md:gap-[100px] md:flex-row 2xs:flex 2xs:flex-col ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:max-w-[50%]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_marketplace_details_MarketCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        image: data?.data?.metadata.image
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_marketplace_details_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            name: data?.data?.name,
                                            details: data?.data?.metadata.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_marketplace_details_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            contractaddress: data?.data?.collectionItem?.contractAddress
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mt-[15px] mb-4 md:gap-6 md:flex-row 2xs:flex-col 2xs:gap-2 2xs:items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[200px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_nft_button_nft_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        text: "SELL",
                                        bgcolor: "violet",
                                        onclick: ()=>handleSell(data.data.id)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[200px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_nft_button_nft_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        text: "Make Offer",
                                        bgcolor: "grey"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[200px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_nft_button_nft_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        text: "Share",
                                        bgcolor: "grey"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_marketplace_details_SimilarProducts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[150px] ml-[45%] mt-[30px] mb-[30px]",
                            onClick: ()=>handleclick(),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_nft_button_nft_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                text: "View More",
                                bgcolor: "violet"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    var id = context.query["id"];
    let photo = null;
    let name = null;
    let description = null;
    await axios__WEBPACK_IMPORTED_MODULE_11___default().get(`${NEXT_PUBLIC_BASE_URL}api/v1/nft/${id}`).then((response)=>{
        name = response?.data?.name;
        photo = response.metadata.image;
        description = response.metadata.description;
    }).catch((err)=>console.log(err));
    return {
        props: {
            photo,
            name,
            description
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_utilitis_BasicLayoutWrapper__WEBPACK_IMPORTED_MODULE_4__/* .BasicLayoutWrapper */ .e)(Index));


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 22057:
/***/ ((module) => {

module.exports = require("constants");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 67643:
/***/ ((module) => {

module.exports = require("diagnostics_channel");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 46281:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [850,476,362,938,414,129,501,772,881,259,318,839], () => (__webpack_exec__(76500)));
module.exports = __webpack_exports__;

})();