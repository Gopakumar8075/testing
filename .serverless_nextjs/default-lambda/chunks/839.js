"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 25949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ marketplace_details_Details)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(7772);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(9669);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./src/auth/auth.js
var auth = __webpack_require__(71667);
;// CONCATENATED MODULE: ./src/components/marketplace-details/PriceHistory.js






const { NEXT_PUBLIC_BASE_URL  } = process.env;
const data = [
    {
        price: "Page A",
        createdat: 4000
    },
    {
        price: "Page A",
        createdat: 4000
    },
    {
        price: "Page A",
        createdat: 4000
    },
    {
        price: "Page A",
        createdat: 4000
    },
    {
        name: "Page E",
        uv: 1890
    },
    {
        price: "Page A",
        createdat: 4000
    },
    {
        price: "Page A",
        createdat: 4000
    }, 
];
function PriceHistory(history) {
    const router = useRouter();
    const { 0: data1 , 1: setData1  } = useState([]);
    const getdata1 = async ()=>{
        const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}api/v1/transaction?type=sell&nft=633eb0c58bcdf4324c627fce`);
        const NewData = response.data.results;
        let something = [];
        for(let i = 0; i < NewData.length; i++){
            something.push({
                data: `${new Date(NewData[i].createdAt).getDate()}/${new Date(NewData[i].createdAt).getMonth() + 1}`,
                value: NewData[i].price
            });
        }
        setData1(something);
        console.log(data1, "55555555555555555");
    // const data = response.data.results.map((item, index) => ({
    //   day: `${new Date(item.createdAt).getDate()}/${
    //     new Date(item.createdAt).getMonth() + 1
    //   }`,
    // }));
    // setData1(data1);
    // console.log(data, '3333333333333333333333333333333');
    };
    useEffect(()=>{
        if (router.isReady) {
            console.log("999999999999999999999999999999999");
            getdata1();
        }
    }, [
        router.isReady
    ]);
    return /*#__PURE__*/ _jsx(LineChart, {
        width: 500,
        height: 300,
        data: data1,
        margin: {
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        },
        children: /*#__PURE__*/ _jsx(Line, {
            type: "monotone",
            dataKey: "uv",
            stroke: "#82ca9d"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/marketplace-details/Details.js




const Details = ({ contractaddress  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(node.Grid, {
            container: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(node.Typography, {
                        variant: "h6",
                        sx: {
                            paddingTop: "10px",
                            color: "white",
                            fontFamily: "ralewaysemibold"
                        },
                        children: "Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
                        container: true,
                        spacing: 4,
                        sx: {
                            color: "white",
                            lineHeight: "2"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
                                item: true,
                                xs: 7,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "w-48 text-[#818181] font-ralewayregular",
                                        children: "Contract Address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "Token ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "w-48 text-[#818181] font-ralewayregular",
                                        children: "Token standard"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "Blockchain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "Creator Fees"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(node.Grid, {
                                item: true,
                                xs: 5,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "truncate w-24 text-[#818181] font-ralewayregular",
                                        children: contractaddress
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "Token ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "ERC-721"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "Ethereum"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: " text-[#818181] font-ralewayregular",
                                        children: "7.5%"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const marketplace_details_Details = (Details);


/***/ }),

/***/ 5357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7772);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91811);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36111);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71667);










const { NEXT_PUBLIC_BASE_URL  } = process.env;
const Heading = ({ name , details  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const id = router.query.id;
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isActive , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isFavourite , 1: setIsFavourite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: checkFavorite , 1: setCheckFavorite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.getItem("token") && localStorage.getItem("walletAddress")) {
            setCheckFavorite(true);
        }
        document.addEventListener("connected", ()=>setCheckFavorite(true));
        return document.removeEventListener("connected", ()=>setCheckFavorite(true));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("disconnected", ()=>setCheckFavorite(false));
        return document.removeEventListener("disconnected", ()=>{
            setCheckFavorite(false);
        });
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("loggedOut", ()=>setCheckFavorite(false));
        return document.removeEventListener("loggedOut", ()=>{
            setCheckFavorite(false);
        });
    }, []);
    const toggleClass = (e, id)=>{
        setIsFavourite(!isFavourite);
        setActive(!isActive);
        e.stopPropagation();
        checkLogin(id, isFavourite);
        setState(!state);
    };
    const checkLogin = async (id, isFavourite)=>{
        setIsFavourite(!isFavourite);
        if (localStorage.getItem("token") && localStorage.getItem("walletAddress")) {
            await _auth_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].post */ .Z.post(`${NEXT_PUBLIC_BASE_URL}api/v1/favourite/add-or-remove`, {
                isFavourite: isFavourite,
                nft: id
            }).then((res)=>{});
        } else {}
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-white flex gap-2 font-ralewaysemibold mt-[0px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                    variant: "h5",
                    component: "h2",
                    children: name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-10 py-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[#647AA7] font-popinsregular uppercase",
                                children: "Creator"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-ralewaysemibold uppercase",
                                children: "BIARC mena"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "align-middle text-white ",
                        children: checkFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            // className={isActive ? 'text-red-600' : null}
                            onClick: (e)=>toggleClass(e, id),
                            children: state ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_FavoriteBorder__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }) : null
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-left py-5 text-[#818181] font-ralewayregular lg:w-[740px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: details
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 67618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7772);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45111);




const MarketCard = ({ image , description , properties  })=>{
    const { 0: open1 , 1: setOpen1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: open2 , 1: setOpen2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    console.log(properties, "111111111111111111111111111111");
    const val = Object.keys({
        image
    });
    console.log({
        image
    }, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    console.log(val[0], "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                maxWidth: 500
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: ()=>setOpen1(true),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                            sx: {
                                width: {
                                    xs: 300,
                                    md: 300
                                },
                                borderRadius: "30px",
                                marginLeft: {
                                    xs: "12%",
                                    sm: "0px"
                                }
                            },
                            children: val[0] === "image" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                                component: "img",
                                src: image,
                                alt: "NFT",
                                height: 300
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                                component: "video",
                                src: image,
                                alt: "NFT",
                                height: 300
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                    open: open1,
                    onClose: ()=>setOpen1(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            width: {
                                md: "30%",
                                xs: "60%"
                            },
                            height: {
                                md: "30%",
                                xs: "60%"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                            sx: {
                                marginLeft: {
                                    lg: "115%",
                                    xs: "33%",
                                    md: "119%"
                                },
                                marginTop: {
                                    lg: "30%",
                                    xs: "127%",
                                    md: "73%",
                                    sm: "73%"
                                }
                            },
                            component: "img",
                            image: image,
                            alt: "NFT"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " p-4 text-white flex flex-col gap-4 mt-6 border rounded-lg height-[400px] bg-[#21252D] border-transparent",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " py-2 border-b height-[100px] ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "text-[#FEFEFE] font-ralewaysemibold",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-[#818181] font-[ ralewayregular]",
                                    children: description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " py-2 border-b flex justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-[#FEFEFE] font-ralewaysemibold",
                                    children: "About Owned NFT"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " text-[#FEFEFE] font-ralewaysemibold py-2 flex justify-between",
                            onClick: ()=>{
                                setOpen2(!open2);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Properties"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            ]
                        }),
                        open2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap gap-6 ",
                            children: properties?.length > 0 ? properties.map((prop, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "border w-32 rounded-lg py-2 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-center text-[#C7C7C7] font-ralewayregular",
                                            children: prop.traitType
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-center font-ralewaysemibold text-[#FEFEFE]",
                                            children: prop.value
                                        })
                                    ]
                                })) : null
                        }) : null
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketCard);


/***/ }),

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37424);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_services_marketplaceapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1589);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5991);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilitis_BasicLayoutWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);









const SimilarProducts = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handleNftCardClick = (id)=>{
        router.push(`/marketplace/${id}`);
    };
    const apiData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.marketPlace);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("load", dispatch((0,_store_services_marketplaceapi__WEBPACK_IMPORTED_MODULE_3__/* .getMarketPlaceApiData */ .b)()));
        return ()=>{
            document.removeEventListener("load", dispatch((0,_store_services_marketplaceapi__WEBPACK_IMPORTED_MODULE_3__/* .getMarketPlaceApiData */ .b)()));
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-[30px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-[30px] text-white font-ralewaysemibold",
                    children: "Similar Products"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2 justify-center gap-4 mt-[50px] ",
                    children: apiData.nftMarketPlacedata.results?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            onClick: ()=>{
                                handleNftCardClick(item._id);
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-w-[270px] max-h-[604px] border-1 border-[#4D5A74] bg-[#21252D] text-white p-2 rounded-[15px] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        component: "img",
                                        height: "100",
                                        image: item?.metadata?.image,
                                        alt: "green iguana",
                                        sx: {
                                            paddingLeft: "15px",
                                            paddingRight: "15px",
                                            paddingTop: "15px",
                                            width: "250px",
                                            height: "195px"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col items-center font-poppinsmedium ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "xl:h-10 lg:h-11 text-center mt-[28px] text-[20px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item.name
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-[5px] ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-[13px] text-[#0088FF] font-poppinsmedium",
                                                        children: "By NFT Artist"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimilarProducts);


/***/ })

};
;