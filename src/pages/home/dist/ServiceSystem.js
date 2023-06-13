"use client";
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var serviceSystem_bg_svg_1 = require("@/assets/image/svg/serviceSystem-bg.svg");
var planning_bg_svg_1 = require("@/assets/image/svg/planning-bg.svg");
var teaching_bg_svg_1 = require("@/assets/image/svg/teaching-bg.svg");
var service_bg_svg_1 = require("@/assets/image/svg/service-bg.svg");
var ServiceSystemBox = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 1200px;\n    padding-top: 120px;\n    height: 1050px;\n    background: url(", ");\n"], ["\n    width: 1200px;\n    padding-top: 120px;\n    height: 1050px;\n    background: url(", ");\n"])), serviceSystem_bg_svg_1["default"].src);
var PlanningBox = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 540px;\n    display: flex;\n    padding:  53px 64px 38px 73px;\n    margin: 0 auto;\n    background: url(", ");\n    mix-blend-mode: difference;\n"], ["\n    width: 540px;\n    display: flex;\n    padding:  53px 64px 38px 73px;\n    margin: 0 auto;\n    background: url(", ");\n    mix-blend-mode: difference;\n"])), planning_bg_svg_1["default"].src);
var TeachingBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    padding:  60px 28px 61px 20px;\n    background: url(", ");\n    mix-blend-mode: difference;\n"], ["\n    display: flex;\n    padding:  60px 28px 61px 20px;\n    background: url(", ");\n    mix-blend-mode: difference;\n"])), teaching_bg_svg_1["default"].src);
var EducationalBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    padding:  40px 28px 36px 12px;\n    background: url(", ");\n    mix-blend-mode: difference;\n    transform: matrix(-1, 0, 0, 1, 0, 0);\n"], ["\n    display: flex;\n    padding:  40px 28px 36px 12px;\n    background: url(", ");\n    mix-blend-mode: difference;\n    transform: matrix(-1, 0, 0, 1, 0, 0);\n"])), teaching_bg_svg_1["default"].src);
var ServiceBox = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 300px;\n    height: 210px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: url(", ");\n    mix-blend-mode: difference;\n"], ["\n    width: 300px;\n    height: 210px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: url(", ");\n    mix-blend-mode: difference;\n"])), service_bg_svg_1["default"].src);
function ServiceSystem() {
    return (React.createElement("div", { className: " flex mt-[198px] items-center justify-center px-[120px]" },
        React.createElement(ServiceSystemBox, null,
            React.createElement(PlanningBox, null,
                React.createElement("p", { className: "text-[32px] mr-[45px] mt-[3px] font-extrabold leading-[100%] text-[#0000ff]" }, "\u89C4\u5212\u7AEF"),
                React.createElement("div", { className: "flex gap-[28px]" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-[18px] leading-[160%] font-normal text-[#1a1a1a]" }, "\u5165\u5B66\u57FA\u7840\u8BC4\u4F30"),
                        React.createElement("p", { className: "text-[18px] leading-[160%] my-4 font-normal text-[#1a1a1a]" }, "\u7559\u5B66\u65F6\u95F4\u89C4\u5212"),
                        React.createElement("p", { className: "text-[18px] leading-[160%] font-normal text-[#1a1a1a]" }, "\u4F5C\u54C1\u96C6\u8BFE\u7A0B\u89C4\u5212")),
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-[18px] leading-[160%] font-normal text-[#1a1a1a]" }, "\u80CC\u666F\u63D0\u5347\u89C4\u5212"),
                        React.createElement("p", { className: "text-[18px] leading-[160%] my-4 font-normal text-[#1a1a1a]" }, "\u672A\u6765\u5C31\u4E1A\u6307\u5BFC")))),
            React.createElement("div", { className: "flex mt-[90px] justify-between" },
                React.createElement(TeachingBox, null,
                    React.createElement("div", { className: "flex" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u4E3B\u9879\u76EE\u5BFC\u5E08"),
                            React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u8F85\u4FEE\u8BFE\u7A0B\u5BFC\u5E08"),
                            React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u97F3\u4E50\u542F\u8499\u5BFC\u5E08"),
                            React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u8DE8\u754C\u827A\u672F\u5BFC\u5E08"),
                            React.createElement("p", { className: "text-[18px] leading-[160%] font-normal text-[#1a1a1a]" }, "\u7EFC\u5408\u5BA1\u6838\u5BFC\u5E08")),
                        React.createElement("p", { className: "text-[32px] ml-[48px] mt-[14px] font-extrabold leading-[100%] text-[#0000ff]" }, "\u6559\u5B66\u7AEF"))),
                React.createElement(ServiceBox, null,
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-[54px] font-normal leading-[120%] font-['FusionPixel']" }, "\u670D\u52A1\u4F53\u7CFB"),
                        React.createElement("p", { className: "text-[24px] font-normal leading-[160%] mt-[18px] uppercase tracking-[0.17em] font-['GuanZhi']" }, "Service system"))),
                React.createElement(EducationalBox, { className: "relative" },
                    React.createElement("div", { className: "w-[30px] h-[30px] absolute top-0 left-[50%] bg-[#FF4B00]" }),
                    React.createElement("div", { style: { transform: " matrix(-1, 0, 0, 1, 0, 0)" }, className: "flex" },
                        React.createElement("p", { className: "text-[32px] mr-[38px] mt-[34px] font-extrabold leading-[100%] text-[#0000ff]" }, "\u89C4\u5212\u7AEF"),
                        React.createElement("div", { className: "flex gap-[28px]" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u5408\u7406\u5B89\u6392\u8BFE\u7A0B"),
                                React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u5B66\u4E60\u8FDB\u5EA6\u53CD\u9988"),
                                React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u5B66\u4E60\u8BFE\u65F6\u8BB0\u5F55"),
                                React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u5B63\u5EA6\u4E00\u5BF9\u4E00\u7EA6\u8C08"),
                                React.createElement("p", { className: "text-[18px] leading-[160%] mb-4 font-normal text-[#1a1a1a]" }, "\u9009\u6821\u6307\u5BFC"),
                                React.createElement("p", { className: "text-[18px] leading-[160%] font-normal text-[#1a1a1a]" }, "\u5FC3\u7406\u8F85\u5BFC")))))))));
}
exports["default"] = ServiceSystem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
