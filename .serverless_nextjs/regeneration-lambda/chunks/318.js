exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 37906:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 37906;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 32114:
/***/ ((module) => {

// Exports
module.exports = {
	"headerMain": "basic-layout_headerMain__7Jimg",
	"title": "basic-layout_title__XqFD8"
};


/***/ }),

/***/ 27085:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal-popup_modal__uMaRg",
	"modalHeader": "modal-popup_modalHeader__Aq0fC",
	"modalFooter": "modal-popup_modalFooter__54QBK",
	"modalTitle": "modal-popup_modalTitle__J2sKi"
};


/***/ }),

/***/ 72633:
/***/ ((module) => {

// Exports
module.exports = {
	"borderTop": "nft-footer_borderTop__gjer_"
};


/***/ }),

/***/ 10462:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonUnderLine": "nft-button_buttonUnderLine__C0e87"
};


/***/ }),

/***/ 76207:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "socialshare_icon__nIth2",
	"facebookIcon": "socialshare_facebookIcon__xpaXj",
	"instagramIcon": "socialshare_instagramIcon__17gsi",
	"discordIcon": "socialshare_discordIcon__aBxBv",
	"messegerIcon": "socialshare_messegerIcon__h5ANj"
};


/***/ }),

/***/ 71667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const { NEXT_PUBLI_BASE_URL  } = process.env;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: NEXT_PUBLI_BASE_URL
});
axiosInstance.interceptors.request.use((config)=>{
    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        config.headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }
    return config;
}, (error)=>{
    console.log("some error occured", error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 23942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ connect_wallet_useConnect)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@coinbase/wallet-sdk/dist/index.js
var dist = __webpack_require__(45811);
// EXTERNAL MODULE: ./node_modules/@walletconnect/web3-provider/dist/cjs/index.js
var cjs = __webpack_require__(63984);
;// CONCATENATED MODULE: ./src/components/connect-wallet/providers.js


const APP_NAME = "My Demo App";
const APP_LOGO_URL = "https://example.com/logo.png";
const INFURA_ID = "209e68ee2afa408197de5d44e2feefa7";
const INFURA_RPC_URL = `https://goerli.infura.io/v3/209e68ee2afa408197de5d44e2feefa7`;
const DEFAULT_CHAIN_ID = 1;
const getCoinbaseWalletProvider = ()=>{
    const coinbaseWallet = new dist/* default */.ZP({
        appName: APP_NAME,
        appLogoUrl: APP_LOGO_URL,
        darkMode: false,
        overrideIsMetaMask: false
    });
    return [
        coinbaseWallet.makeWeb3Provider(INFURA_RPC_URL, DEFAULT_CHAIN_ID),
        "coinbase", 
    ];
};
const getMetaMaskProvider = ()=>{
    return [
        window.ethereum?.providers?.find((item)=>!!item.isMetaMask) ?? window.ethereum,
        "metamask", 
    ];
};
const getWalletConnectProvider = ()=>{
    return [
        new cjs/* default */.Z({
            infuraId: INFURA_ID
        }),
        "walletprovider", 
    ];
};


// EXTERNAL MODULE: ./src/helperfunctions/login.js
var login = __webpack_require__(39756);
;// CONCATENATED MODULE: ./src/components/connect-wallet/useConnect.js





const { NEXT_PUBLIC_POLYGON_MAINNET_CHAINID  } = process.env;
const { NEXT_PUBLIC_POLYGON_MAINNET_CHAINNAME  } = process.env;
const { NEXT_PUBLIC_POLYGON_MAINNET_RPCURL  } = process.env;
const { NEXT_PUBLIC_POLYGON_MAINNET_BLOCKURL  } = process.env;
const useConnect = ()=>{
    const { 0: providers , 1: setProvider  } = (0,react.useState)();
    const { 0: account , 1: setAccount  } = (0,react.useState)();
    const { 0: chainId , 1: setChainId  } = (0,react.useState)();
    const { 0: network , 1: setNetwork  } = (0,react.useState)();
    const connectWithProvider = async (provider)=>{
        try {
            setProvider(provider[0]);
            await provider[0].enable();
            localStorage.setItem("provider", provider[1]);
            const accounts = await provider[0].request({
                method: "eth_requestAccounts"
            });
            if (accounts) {
                setAccount(accounts[0]);
                (0,login/* default */.Z)(accounts[0]);
                const event = new Event("connected");
                document.dispatchEvent(event);
            }
            const chainId = await provider[0].request({
                method: "eth_chainId"
            });
            setChainId(Number(chainId));
        } catch (error) {
            console.log(error);
        }
    };
    const getProviders = ()=>{
        const data = localStorage.getItem("provider");
        if (data?.length > 0) {
            switch(data){
                case "metamask":
                    return getMetaMaskProvider()[0];
                case "coinbase":
                    return getCoinbaseWalletProvider()[0];
                case "walletprovider":
                    return getWalletConnectProvider()[0];
                default:
                    return null;
            }
        } else {
            return null;
        }
    };
    return {
        connectWithProvider,
        getProviders
    };
};
/* harmony default export */ const connect_wallet_useConnect = (useConnect);


/***/ }),

/***/ 41540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);



const NftButton = ({ text , bgcolor , icon , onclick , link  })=>{
    switch(bgcolor){
        case "violet":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: `text-white font-ralewaybold bg-[#9100FF] w-full rounded-lg py-2 font-bold`,
                    onClick: onclick ? onclick : null,
                    children: [
                        icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pr-6 pt-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: icon,
                                width: 40,
                                height: 40
                            })
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "mt-[-5px]",
                            children: text
                        })
                    ]
                })
            });
        case "grey":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: link,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: `text-white font-ralewaybold bg-[#291B33]  w-full rounded-lg py-4 font-bold`,
                        onClick: onclick ? onclick : null,
                        children: [
                            icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "pr-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: icon,
                                    width: 25,
                                    height: 25
                                })
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: text
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: `text-white font-ralewaybold bg-[#291B33]  w-full rounded-lg py-4 font-bold`,
                    onClick: onclick ? onclick : null,
                    children: [
                        icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pr-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: icon,
                                width: 25,
                                height: 25
                            })
                        }) : null,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: text
                        })
                    ]
                })
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftButton);


/***/ }),

/***/ 57113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ getCoinbaseWalletProvider),
/* harmony export */   "Lu": () => (/* binding */ getWalletConnectProvider),
/* harmony export */   "Q6": () => (/* binding */ getMetaMaskProvider)
/* harmony export */ });
/* harmony import */ var _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45811);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63984);


const APP_NAME = "My Demo App";
const APP_LOGO_URL = "https://example.com/logo.png";
const INFURA_ID = "209e68ee2afa408197de5d44e2feefa7";
const INFURA_RPC_URL = `https://goerli.infura.io/v3/209e68ee2afa408197de5d44e2feefa7`;
const DEFAULT_CHAIN_ID = 1;
const getCoinbaseWalletProvider = ()=>{
    const coinbaseWallet = new _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP({
        appName: APP_NAME,
        appLogoUrl: APP_LOGO_URL,
        darkMode: false,
        overrideIsMetaMask: false
    });
    return [
        coinbaseWallet.makeWeb3Provider(INFURA_RPC_URL, DEFAULT_CHAIN_ID),
        "coinbase", 
    ];
};
const getMetaMaskProvider = ()=>{
    return [
        window.ethereum?.providers?.find((item)=>!!item.isMetaMask) ?? window.ethereum,
        "metamask", 
    ];
};
const getWalletConnectProvider = ()=>{
    return [
        new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
            infuraId: INFURA_ID
        }),
        "walletprovider", 
    ];
};



/***/ }),

/***/ 39756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71667);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3283);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);


const login = async (address)=>{
    console.log("inside the login function");
    let convertTocheckSumAddress = web3__WEBPACK_IMPORTED_MODULE_1___default().utils.toChecksumAddress(address);
    const { NEXT_PUBLIC_BASE_URL  } = process.env;
    await _auth_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${NEXT_PUBLIC_BASE_URL}api/v1/user-auth/login`, {
        walletAddress: convertTocheckSumAddress
    }).then((response)=>{
        let token = response.data.token;
        if (response.status === 200) {
            localStorage.setItem("token", token);
            localStorage.setItem("walletAddress", address);
        }
        return response.data;
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);


/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ BasicLayoutWrapper)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/nft-button/nft-button.jsx
var nft_button = __webpack_require__(41540);
// EXTERNAL MODULE: ./src/components/modal-popup/modal-popup.module.scss
var modal_popup_module = __webpack_require__(27085);
var modal_popup_module_default = /*#__PURE__*/__webpack_require__.n(modal_popup_module);
;// CONCATENATED MODULE: ./src/components/modal-popup/modal-popup.jsx




const Modal = (props)=>{
    if (!props.show) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (modal_popup_module_default()).modal,
        onClick: props.onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: " xs:w-96 2xs:w-72   bg-black border-2 border-[#0080ff] rounded-3xl flex gap-6 flex-col p-8 ",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (modal_popup_module_default()).modalHeader + " h-12 bg-[#0080ff]  rounded-2xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: (modal_popup_module_default()).modalTitle + " text-white text-center font-ethnocentric   ",
                        children: "Connect Via"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex flex-col gap-4 xs:w-64 2xs:w-52 mx-auto ",
                    children: props.children
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (modal_popup_module_default()).ModalFooter + " w-40 pb-2",
                        onClick: props.onClose,
                        children: /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                            className: "text-white",
                            text: "CLOSE",
                            bgcolor: "violet"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const modal_popup = (Modal);

// EXTERNAL MODULE: ./src/components/testconnect-wallet/providers.js
var providers = __webpack_require__(57113);
// EXTERNAL MODULE: ./src/components/connect-wallet/useConnect.js + 1 modules
var useConnect = __webpack_require__(23942);
;// CONCATENATED MODULE: ./src/components/connect-wallet/connet-wallet.jsx






const ConnectWallet = ()=>{
    const { 0: show , 1: setShow  } = (0,react.useState)(false);
    const { connectWithProvider  } = (0,useConnect/* default */.Z)();
    const { 0: desktop , 1: setDesktop  } = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        document.addEventListener("connected", ()=>setShow(false));
        return document.removeEventListener("connected", ()=>setShow(false));
    }, []);
    (0,react.useEffect)(()=>{
        if (window.ethereum) {
            setDesktop(true);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "text-white flex 2xs:text-[14px] lg:text-[18px] font-ralewayregular",
                onClick: ()=>setShow(true),
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("object", {
                        className: "px-1 pt-1",
                        data: "/icons/account_balance_wallet_white_24dp.svg",
                        type: "image/svg+xml"
                    }),
                    "Connect"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(modal_popup, {
                show: show,
                onClose: ()=>setShow(false),
                children: [
                    desktop ? /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                        bgcolor: "grey",
                        text: "METAMASK",
                        onclick: ()=>{
                            connectWithProvider((0,providers/* getMetaMaskProvider */.Q6)());
                        }
                    }) : /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                        bgcolor: "grey",
                        text: "METAMASK",
                        link: `https://metamask.app.link/dapp/`,
                        onclick: ()=>{
                            connectWithProvider((0,providers/* getMetaMaskProvider */.Q6)());
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                        bgcolor: "grey",
                        text: "COINBASE",
                        onclick: ()=>{
                            connectWithProvider((0,providers/* getCoinbaseWalletProvider */.Bh)());
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                        bgcolor: "grey",
                        text: "WALLETCONNECT",
                        onclick: ()=>{
                            connectWithProvider((0,providers/* getWalletConnectProvider */.Lu)());
                        }
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const connet_wallet = (ConnectWallet);

// EXTERNAL MODULE: ./src/components/social-share-button/socialshare.module.scss
var socialshare_module = __webpack_require__(76207);
var socialshare_module_default = /*#__PURE__*/__webpack_require__.n(socialshare_module);
;// CONCATENATED MODULE: ./src/components/social-share-button/social-share-button.jsx



const SocialShareButton = ({ type  })=>{
    switch(type){
        case "message":
            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (socialshare_module_default()).twitterIcon,
                onClick: ()=>window.open("", "_blank")
            });
        case "discord":
            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (socialshare_module_default()).discordIcon,
                onClick: ()=>window.open("", "_blank")
            });
        case "instagram":
            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (socialshare_module_default()).instagramIcon,
                onClick: ()=>window.open("", "_blank")
            });
        case "facebook":
            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (socialshare_module_default()).facebookIcon,
                onClick: ()=>window.open("", "_blank")
            });
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
    }
};
/* harmony default export */ const social_share_button = (SocialShareButton);

// EXTERNAL MODULE: ./src/components/nft-footer/nft-footer.module.scss
var nft_footer_module = __webpack_require__(72633);
var nft_footer_module_default = /*#__PURE__*/__webpack_require__.n(nft_footer_module);
;// CONCATENATED MODULE: ./src/components/nft-footer/nft-footer.jsx




function NftFooter() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "pt-14 pb-8 " + (nft_footer_module_default()).borderTop,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-10 justify-evenly",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex justify-center text-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-[#C6C6C6] lg:w-2/3 font-ralewayregular lg:text-[17px] 2xs:w-[80%] 2xs:text-[14px]",
                            children: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eiu"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4 justify-center lg:flex-row 2xs:flex-col 2xs:items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    className: "w-80 2xs:w-64 h-10 rounded-lg bg-black text-[#D4D4D4] border-[#D4D4D4] border-[1px] pl-2",
                                    placeholder: "Email Address"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "lg:w-[10%] 2xs:w-[50%]",
                                children: /*#__PURE__*/ jsx_runtime.jsx(nft_button/* default */.Z, {
                                    text: "Subscribe",
                                    bgcolor: "violet"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex w-full justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-[24px] font-ethnocentric font-extrabold text-white ",
                                children: "OWN"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-[24px] font-ethnocentric font-extrabold text-headerorange",
                                children: "NFT"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "lg:w-1/2 mx-auto 2xs:w-[80%] ",
                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-[#C6C6C6] text-center font-ralewayregular lg:text-[17px] 2xs:text-[14px]",
                            children: "A personalized platform designed to bring digital creators, crypto natives, NFT enthusiasts, and collectors together to move the culture forward with limitless possibilities."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(social_share_button, {
                                type: "facebook"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(social_share_button, {
                                type: "instagram"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(social_share_button, {
                                type: "discord"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(social_share_button, {
                                type: "message"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./src/components/nft-nav-button/nft-button.module.scss
var nft_button_module = __webpack_require__(10462);
var nft_button_module_default = /*#__PURE__*/__webpack_require__.n(nft_button_module);
;// CONCATENATED MODULE: ./src/components/nft-nav-button/nft-nav-button.jsx




const NftNavbutton = ({ value , url  })=>{
    const router = (0,next_router.useRouter)();
    /**
   *  To update the url params
   */ const handleOnClick = ()=>{
        router.push(url);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
            onClick: handleOnClick,
            className: (router.route === url ? (nft_button_module_default()).buttonUnderLine : "") + " text-[18px] text-white pb-[2px] font-ralewayregular ",
            children: value
        })
    });
};
/* harmony default export */ const nft_nav_button = (NftNavbutton);

// EXTERNAL MODULE: ./src/components/basic-layout/basic-layout.module.scss
var basic_layout_module = __webpack_require__(32114);
var basic_layout_module_default = /*#__PURE__*/__webpack_require__.n(basic_layout_module);
;// CONCATENATED MODULE: ./src/components/basic-layout/routes.js
const routingData = [
    {
        route: "/",
        value: "Home"
    },
    {
        route: "/marketplace",
        value: "All NFTs"
    },
    {
        route: "/collections",
        value: "Collections"
    },
    {
        route: "/roadmap",
        value: "Roadmap"
    }, 
];
/* harmony default export */ const routes = (routingData);

// EXTERNAL MODULE: ./src/helperfunctions/login.js
var login = __webpack_require__(39756);
;// CONCATENATED MODULE: ./src/components/basic-layout/accountChainChange.js

const getAccountChainChange = (provider, setConnect, setWalletAdd, setChainId)=>{
    if (provider?.on) {
        const handleAccountsChanged = (accounts)=>{
            localStorage.setItem("walletAddress", accounts[0]);
            accounts.length > 0 ? (0,login/* default */.Z)(accounts[0]) : null;
            if (accounts?.length === 0) {
                localStorage.clear();
                setConnect(false);
                setWalletAdd("");
                const event = new Event("loggedOut");
                document.dispatchEvent(event);
            }
        };
        const handleChainChanged = (_hexChainId)=>{
            console.log("chain changed", _hexChainId);
            setChainId(_hexChainId);
        };
        const handleDisconnect = ()=>{
            localStorage.clear();
        };
        provider.on("accountsChanged", handleAccountsChanged);
        provider.on("chainChanged", handleChainChanged);
        provider.on("disconnect", handleDisconnect);
        return ()=>{
            if (provider.removeListener) {
                provider.removeListener("accountsChanged", handleAccountsChanged);
                provider.removeListener("chainChanged", handleChainChanged);
                provider.removeListener("disconnect", handleDisconnect);
            }
        };
    }
};
const disConnectRouteChange = (router)=>{
    document.addEventListener("loggedOut", ()=>handleDisconnectRoute(router));
    return document.removeEventListener("loggedOut", ()=>handleDisconnectRoute(router));
};
const handleDisconnectRoute = (router)=>{
    if (router.route === "/profile") {
        router.push("/");
    }
};


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/basic-layout/basic-layout.jsx














const BasicLayout = ({ children  })=>{
    const router = (0,next_router.useRouter)();
    const { 0: currentRoute , 1: setCurrentRoute  } = (0,react.useState)(router.route); //route state initializing
    const { 0: showMobileHamburger , 1: setShowMobileHamburger  } = (0,react.useState)(false);
    const mobileMenuRef = (0,react.useRef)();
    const { 0: connect , 1: setConnect  } = (0,react.useState)(false);
    const { 0: walletAdd , 1: setWalletAdd  } = (0,react.useState)("");
    const { 0: chainId , 1: setChainId  } = (0,react.useState)();
    const { 0: provider , 1: setProvider  } = (0,react.useState)();
    const { getProviders  } = (0,useConnect/* default */.Z)();
    /**
   * Function to update the url query params
   * @param {string} url
   */ const setRoute = (url)=>{
        setCurrentRoute(url);
    };
    const getProviderDetails = ()=>{
        setShowMobileHamburger(false);
        setConnect(true);
        let providerFromLocalStorage = getProviders();
        setProvider(providerFromLocalStorage);
    };
    const hanndleHamburgerMobile = ()=>{
        if (!showMobileHamburger) {
            setShowMobileHamburger(true);
        } else {
            setShowMobileHamburger(false);
        }
    };
    /**
   *  Function for handle hamburger menu outside click
   */ const handleHamburgerMobileOutsideClick = ()=>{
        document.addEventListener("click", handleClick);
        return ()=>document.removeEventListener("click", handleClick);
        function handleClick(e) {
            if (mobileMenuRef && mobileMenuRef.current) {
                const ref = mobileMenuRef.current;
                if (!ref.contains(e.target)) {
                    setShowMobileHamburger(false);
                }
            }
        }
    };
    (0,react.useEffect)(()=>{
        getAccountChainChange(provider, setConnect, setWalletAdd, setChainId);
    }, [
        provider,
        walletAdd
    ]);
    (0,react.useEffect)(()=>{
        handleHamburgerMobileOutsideClick();
        const data = getProviders();
        if (localStorage.getItem("provider")) {
            let newvalue = getProviders();
            if (newvalue._addresses?.length < 1) {
                localStorage.clear();
                const event = new Event("disconnected");
                document.dispatchEvent(event);
            }
        }
        setProvider(data);
        const getWalletAddressFromLocalStorage = ()=>{
            const walletAddress = localStorage.getItem("walletAddress");
            setWalletAdd(walletAddress);
        };
        getWalletAddressFromLocalStorage();
        disConnectRouteChange(router);
        document.addEventListener("connected", ()=>getProviderDetails());
        return document.removeEventListener("connected", ()=>getProviderDetails());
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: (basic_layout_module_default()).headerMain,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (basic_layout_module_default()).title,
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    onClick: ()=>setRoute("/"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "2xs:text-[20px] sm:text-[24px] font-extrabold text-white font-ethnocentric",
                                            children: "OWN"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "2xs:text-[20px] sm:text-[24px] font-extrabold font-ethnocentric text-headerorange",
                                            children: "NFT"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex w-[80%] justify-end 2xs:hidden lg:flex",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex px-1 gap-12",
                            children: [
                                routes.map((route, index)=>{
                                    return /*#__PURE__*/ jsx_runtime.jsx(nft_nav_button, {
                                        value: route.value,
                                        url: route.route
                                    }, index);
                                }),
                                connect || walletAdd?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(nft_nav_button, {
                                    value: "Profile",
                                    url: "/profile"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(connet_wallet, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        ref: mobileMenuRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "px-2 lg:hidden flex",
                                onClick: hanndleHamburgerMobile,
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    loading: "eager",
                                    src: "/icons/hamburger.svg",
                                    alt: "HamburgerIcon",
                                    layout: "intrinsic",
                                    width: 25,
                                    height: 25
                                })
                            }),
                            showMobileHamburger && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: " h-[250px] 2xs:w-64 flex flex-col absolute top-20 bg-[#010336] right-4 bg-opacity-95 rounded-md py-1",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "w-[100%] text-white font-ralewayregular text-[14px]",
                                    children: [
                                        routes.map((route, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                className: "text-center py-3",
                                                onClick: ()=>setShowMobileHamburger(false),
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: route.route,
                                                    children: route.value
                                                })
                                            }, index)),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: "flex justify-center",
                                            children: connect || walletAdd?.length > 0 ? /*#__PURE__*/ jsx_runtime.jsx(nft_nav_button, {
                                                value: "Profile",
                                                url: "/profile"
                                            }) : /*#__PURE__*/ jsx_runtime.jsx(connet_wallet, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(NftFooter, {})
        ]
    });
};
/* harmony default export */ const basic_layout = (BasicLayout);

;// CONCATENATED MODULE: ./src/utilitis/BasicLayoutWrapper.js


/**
 * This is higher order component, which takes a component as a parameter and returns new component with additional features
 * @param {jsx component} component
 * @returns jsx component
 */ function BasicLayoutWrapper(component) {
    const Component = component;
    return function(props) {
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ jsx_runtime.jsx(basic_layout, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...props
                })
            })
        });
    };
}


/***/ })

};
;