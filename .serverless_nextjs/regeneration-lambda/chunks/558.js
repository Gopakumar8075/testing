"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 1109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropDownList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9285);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87780);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64745);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75857);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59127);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54364);
/* harmony import */ var _mui_icons_material_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26613);










function DropDownList({ sort , setSort , setPage  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onSelectChange = (e)=>{
        setSort({
            ...sort,
            sort: e.target.value
        });
        setPage(1);
        router.query.sortBy = e.target.value;
        router.push(router);
    };
    const { 0: asc , 1: SetAsc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Asc");
    const onArrowChange = ()=>{
        if (asc === "Asc") {
            SetAsc("Desc");
            setSort({
                ...sort,
                order: "desc"
            });
            setPage(1);
            delete router.query["asc"] ? router.query["asc"] : null;
            router.query.desc = "desc";
            router.push(router);
        } else {
            SetAsc("Asc");
            setSort({
                ...sort,
                order: "asc"
            });
            setPage(1);
            delete router.query["desc"] ? router.query["desc"] : null;
            router.query.asc = "asc";
            router.push(router);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sx: {
                    minWidth: 180,
                    border: 1,
                    borderColor: "#707070",
                    borderRadius: 2
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4___default()), {
                    fullWidth: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                color: "white"
                            },
                            id: "demo-simple-select-label",
                            children: "Sort"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
                            labelId: "demo-simple-select-label",
                            id: "demo-simple-select",
                            label: "Age",
                            onChange: (e)=>onSelectChange(e),
                            sx: {
                                color: "white"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    sx: {
                                        fontFamily: "Poppins"
                                    },
                                    value: "price",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-poppinsmedium",
                                        children: "Price"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    sx: {
                                        fontFamily: "Poppins"
                                    },
                                    value: "name",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-poppinsmedium",
                                        children: "Name"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "text-white",
                onClick: onArrowChange,
                children: asc === "Asc" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            })
        ]
    });
}; // import React from 'react';
 // import InputLabel from '@mui/material/InputLabel';
 // import MenuItem from '@mui/material/MenuItem';
 // import FormControl from '@mui/material/FormControl';
 // import Select from '@mui/material/Select';
 // const DropDownList = (props) => {
 //   const [age, setAge] = React.useState('');
 //   const handleChange = (event) => {
 //     setAge(event.target.value);
 //   };
 //   return (
 //     <>
 //       <select
 //         onChange={handleChange}
 //         className="bg-black text-gray-100  border border-[#707070]
 //          rounded lg:w-48 xl:w-52 2xs:w-52 "
 //       >
 //         <option value={10} disabled selected hidden>
 //           {props.type}
 //         </option>
 //         <option value={20}>Ten</option>
 //         <option value={30}>Twenty</option>
 //         <option value={40}>Thirty</option>
 //       </select>
 //     </>
 //   );
 // };
 // export default DropDownList;


/***/ }),

/***/ 16955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const NftCard = ({ mapitem  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: mapitem.metadata ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-[321px] border-2 border-[#4D5A74] bg-[#21252D] text-white p-4 rounded-xl ",
            children: [
                mapitem.metadata.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    height: 300,
                    width: 300,
                    src: mapitem.metadata.image
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    height: 300,
                    width: 300,
                    src: "/assets/profilePic.png"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-4 flex flex-col gap-2 ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "xl:h-5 lg:h-11 font-poppinsmedium",
                                    children: mapitem.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/more.png",
                                        height: 5,
                                        width: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-between ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#0088FF]",
                                children: mapitem?.price ? mapitem?.price : "0.00"
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-[321px] border-2 border-[#4D5A74] bg-[#21252D] text-white p-4 rounded-xl ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    height: 300,
                    width: 300,
                    src: "/assets/profilePic.png"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-4 flex flex-col gap-2 ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "xl:h-5 lg:h-11 font-poppinsmedium",
                                    children: mapitem.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/more.png",
                                        height: 5,
                                        width: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-between ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#0088FF]",
                                children: mapitem?.price ? mapitem?.price : "0.00"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NftCard);
{
/* <div className="xl:h-2 lg:h-3 md:h-0 text-sm text-[#a8a29e] ">
            {mapitem.description}
          </div> */ }

/***/ }),

/***/ 87503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);





let timer;



const SearchBox = ({ setSearch , setPage  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleChange = (e)=>{
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            setSearch(e.target.value);
            setCount(e);
            setPage(1);
            router.query.search = e.target.value;
            router.push(router);
        }, 1000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            className: "xl:w-[25rem] lg:w-[15rem] md:w-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "relative block",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "w-full md:h-[3.5rem] bg-black text-gray-100 font-poppinsmedium border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none opacity-80",
                        placeholder: "Enter your keyword to search",
                        type: "text",
                        onChange: (e)=>handleChange(e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute inset-y-0 right-0 flex items-center pr-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "h-5 w-5 fill-black",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: "0px",
                            y: "0px",
                            width: "30",
                            height: "30",
                            viewBox: "0 0 30 30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);


/***/ })

};
;