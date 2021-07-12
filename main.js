(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajan/pro/route/eshwarssf/powdercoating/src/main.ts */"zUnb");


/***/ }),

/***/ "5YdD":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(); };
RequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], decls: 34, vars: 0, consts: [[1, "login-box"], [1, "user-box"], ["type", "text", "name", "", "required", ""], ["type", "number", "name", "", "required", ""], ["type", "text", "name", ""]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Phone NUmber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["HTML[_ngcontent-%COMP%]   CSSResult[_ngcontent-%COMP%]   Skip[_ngcontent-%COMP%]   Results[_ngcontent-%COMP%]   Iframe\nEDIT[_ngcontent-%COMP%]   ON\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin:0;\n  padding:0;\n  font-family: sans-serif;\n  background: linear-gradient(#141e30, #243b55);\n}\n.login-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 40px;\n  transform: translate(-50%, -50%);\n  background: rgba(0,0,0,.5);\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgba(0,0,0,.6);\n  border-radius: 10px;\n}\n.login-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 30px;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n}\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top:0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  pointer-events: none;\n  transition: .5s;\n}\n.login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .login-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 0;\n  color: #03e9f4;\n  font-size: 12px;\n}\n.login-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #03e9f4;\n  font-size: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: .5s;\n  margin-top: 40px;\n  letter-spacing: 4px\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #03e9f4;\n  color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px #03e9f4,\n              0 0 25px #03e9f4,\n              0 0 50px #03e9f4,\n              0 0 100px #03e9f4;\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #03e9f4);\n  animation: btn-anim1 1s linear infinite;\n}\n@keyframes btn-anim1 {\n  0% {\n    left: -100%;\n  }\n  50%,100% {\n    left: 100%;\n  }\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: -100%;\n  right: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(180deg, transparent, #03e9f4);\n  animation: btn-anim2 1s linear infinite;\n  animation-delay: .25s\n}\n@keyframes btn-anim2 {\n  0% {\n    top: -100%;\n  }\n  50%,100% {\n    top: 100%;\n  }\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 0;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, #03e9f4);\n  animation: btn-anim3 1s linear infinite;\n  animation-delay: .5s\n}\n@keyframes btn-anim3 {\n  0% {\n    right: -100%;\n  }\n  50%,100% {\n    right: 100%;\n  }\n}\n.login-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(360deg, transparent, #03e9f4);\n  animation: btn-anim4 1s linear infinite;\n  animation-delay: .75s\n}\n@keyframes btn-anim4 {\n  0% {\n    bottom: -100%;\n  }\n  50%,100% {\n    bottom: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztFQUdFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxPQUFPO0VBQ1AsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsT0FBTztFQUNQLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7QUFDRjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEI7OzsrQkFHNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELHVDQUF1QztBQUN6QztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1oseURBQXlEO0VBQ3pELHVDQUF1QztFQUN2QztBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCx5REFBeUQ7RUFDekQsdUNBQXVDO0VBQ3ZDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCx1Q0FBdUM7RUFDdkM7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuSFRNTCBDU1NSZXN1bHQgU2tpcCBSZXN1bHRzIElmcmFtZVxuRURJVCBPTlxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxNDFlMzAsICMyNDNiNTUpO1xufVxuXG4ubG9naW4tYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDI1cHggcmdiYSgwLDAsMCwuNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dpbi1ib3ggaDIge1xuICBtYXJnaW46IDAgMCAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tYm94IC51c2VyLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sb2dpbi1ib3ggLnVzZXItYm94IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4ubG9naW4tYm94IC51c2VyLWJveCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxuLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjMDNlOWY0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1ib3ggZm9ybSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICMwM2U5ZjQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAuNXM7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA0cHhcbn1cblxuLmxvZ2luLWJveCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAzZTlmNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDNlOWY0LFxuICAgICAgICAgICAgICAwIDAgMjVweCAjMDNlOWY0LFxuICAgICAgICAgICAgICAwIDAgNTBweCAjMDNlOWY0LFxuICAgICAgICAgICAgICAwIDAgMTAwcHggIzAzZTlmNDtcbn1cblxuLmxvZ2luLWJveCBhIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tYm94IGEgc3BhbjpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICMwM2U5ZjQpO1xuICBhbmltYXRpb246IGJ0bi1hbmltMSAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYnRuLWFuaW0xIHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICB9XG4gIDUwJSwxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5cbi5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogLTEwMCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IC4yNXNcbn1cblxuQGtleWZyYW1lcyBidG4tYW5pbTIge1xuICAwJSB7XG4gICAgdG9wOiAtMTAwJTtcbiAgfVxuICA1MCUsMTAwJSB7XG4gICAgdG9wOiAxMDAlO1xuICB9XG59XG5cbi5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0xMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCAjMDNlOWY0KTtcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTMgMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IC41c1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XG4gIDAlIHtcbiAgICByaWdodDogLTEwMCU7XG4gIH1cbiAgNTAlLDEwMCUge1xuICAgIHJpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5sb2dpbi1ib3ggYSBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIGJvdHRvbTogLTEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgdHJhbnNwYXJlbnQsICMwM2U5ZjQpO1xuICBhbmltYXRpb246IGJ0bi1hbmltNCAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogLjc1c1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltNCB7XG4gIDAlIHtcbiAgICBib3R0b206IC0xMDAlO1xuICB9XG4gIDUwJSwxMDAlIHtcbiAgICBib3R0b206IDEwMCU7XG4gIH1cbn1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = "#slider[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n    height: 900px;\n  }\n\n.carousel-caption[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n.carousel-item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    width: 100%\n  }\n\n#page-wrap[_ngcontent-%COMP%]{\n      width: 800px;\n      margin: 0 auto;\n  }\n\n\n\n\n\nbody[_ngcontent-%COMP%]{\n  font-family: 'Nunito', sans-serif;\n  padding: 50px;\n}\n\n.card[_ngcontent-%COMP%]{\n    border-radius: 4px;\n    background: #fff;\n    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);\n      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);\n  padding: 14px 80px 18px 36px;\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]:hover{\n     transform: scale(1.05);\n  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  max-height: 120px;\n}\n\n.card-1[_ngcontent-%COMP%]{\n  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);\n      background-repeat: no-repeat;\n    background-position: right;\n    background-size: 80px;\n}\n\n.card-2[_ngcontent-%COMP%]{\n   background-image: url(https://ionicframework.com/img/getting-started/components-card.png);\n      background-repeat: no-repeat;\n    background-position: right;\n    background-size: 80px;\n}\n\n.card-3[_ngcontent-%COMP%]{\n   background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);\n      background-repeat: no-repeat;\n    background-position: right;\n    background-size: 80px;\n}\n\n@media(max-width: 990px){\n  .card[_ngcontent-%COMP%]{\n    margin: 20px;\n  }\n}\n\n\n\n\n\n\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]{\n  text-align: center;\n  background: #F7F7F7;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n  padding-top: 80px; \n  padding-bottom: 100px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  text-decoration: none;\n  outline: none;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]{\n  background: #ffffff;\n  overflow: hidden;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.50);\n  border-radius: 5px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  -webkit-transition:all .9s ease; \n  -moz-transition:all .9s ease; \n  -o-transition:all .9s ease;\n  -ms-transition:all .9s ease; \n  width: 100%;\n  height: 200px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]:hover   .image-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  opacity: 0.7;\n  transform:scale(1.15);\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{\n  padding: 30px 18px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]{\n  background: #FFFFFF;\n  margin-top: 50px;\n  transition: all 0.2s ease-in;\n  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]:hover{\n  background: #fff;\n  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);\n  transition: all 0.2s ease-in;\n  margin-top: 50px;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  margin-bottom: 0px;\n  padding-bottom: 0px; \n  font-size: 14px;\n  letter-spacing: 1px;\n  color: #000000;\n}\n\n#cards_landscape_wrap-2[_ngcontent-%COMP%]   .card-flyer[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n  margin-top: 0px;\n  margin-bottom: 4px; \n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-family: 'Roboto Black', sans-serif;\n  letter-spacing: 1px;\n  color: #00acc1;\n}\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --red: hsl(0, 78%, 62%);\n  --cyan: hsl(180, 62%, 55%);\n  --orange: hsl(34, 97%, 64%);\n  --blue: hsl(212, 86%, 64%);\n  --varyDarkBlue: hsl(234, 12%, 34%);\n  --grayishBlue: hsl(229, 6%, 66%);\n  --veryLightGray: hsl(0, 0%, 98%);\n  --weight1: 200;\n  --weight2: 400;\n  --weight3: 600;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: 'Poppins', sans-serif;\n  background-color: var(--veryLightGray);\n}\n\n.attribution[_ngcontent-%COMP%] { \n  font-size: 11px; text-align: center; \n}\n\n.attribution[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \n  color: hsl(228, 45%, 44%); \n}\n\nh1[_ngcontent-%COMP%]:first-of-type {\n  font-weight: var(--weight1);\n  color: var(--varyDarkBlue);\n\n}\n\nh1[_ngcontent-%COMP%]:last-of-type {\n  color: var(--varyDarkBlue);\n}\n\n@media (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 0.8;\n  margin-bottom: 50px;\n  margin-top: 100px;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  line-height: 2;\n  color: var(--grayishBlue);\n}\n\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--grayishBlue);\n}\n\n.box[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0px 30px 40px -20px var(--grayishBlue);\n  padding: 30px;\n  margin: 20px;  \n}\n\nimg[_ngcontent-%COMP%] {\n  float: right;\n}\n\n@media (max-width: 450px) {\n  .box[_ngcontent-%COMP%] {\n      height: 200px;\n  }\n}\n\n@media (max-width: 950px) and (min-width: 450px) {\n  .box[_ngcontent-%COMP%] {\n      text-align: center;\n      height: 180px;\n  }\n}\n\n.cyan[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--cyan);\n}\n\n.red[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--red);\n}\n\n.blue[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--blue);\n}\n\n.orange[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--orange);\n}\n\nh2[_ngcontent-%COMP%] {\n  color: var(--varyDarkBlue);\n  font-weight: var(--weight3);\n}\n\n@media (min-width: 950px) {\n  .row1-container[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  }\n  \n  .row2-container[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  }\n  .box-down[_ngcontent-%COMP%] {\n      position: relative;\n      top: 150px;\n  }\n  .box[_ngcontent-%COMP%] {\n      width: 20%;\n   \n  }\n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      width: 30%;\n  }\n  \n}\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(\"http://andreeabunget.co.uk/Img/footer.jpg\");\n  background-size: cover;\n  \n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 50px;\n  color: rgb(206,206,206);\n  font-family: 'Poppins', sans-serif;\n}\n\n.first[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: 20px;\n      letter-spacing: 3px;\n      position: relative;\n      margin-bottom: 20px;\n      font-size: 1.6em;\n      color: #fff;\n      padding-bottom: 0.5em;\n  }\n\n.first[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n          content: '';\n          background: #66c83d;\n          width: 20%;\n          height: 2px;\n          position: absolute;\n          bottom: 0;\n          left: 0;\n      }\n\n.first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 14px;\n  }\n\n.second[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 50px;\n  color: rgb(206,206,206);\n  font-family: 'Poppins', sans-serif;\n  text-align: center;\n}\n\n.second2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 50px;\n  color: rgb(206,206,206);\n  font-family: 'Poppins', sans-serif;\n  text-align: center;\n}\n\n.second[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 3px;\n  position: relative;\n  margin-bottom: 20px;\n  font-size: 1.6em;\n  color: #fff;\n  padding-bottom: 0.5em;\n}\n\n.second[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n      content: '';\n      background: #66c83d;\n      width: 20%;\n      height: 2px;\n      position: absolute;\n      bottom: 0;\n      left: 40%;\n  }\n\n.second[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-bottom: 30px;\n}\n\n.second[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .second2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(206, 206, 206);\n  text-decoration: none;\n  letter-spacing: 3px;\n  font-weight: bold;\n  font-size: 14px;\n  transition: 0.2s;\n}\n\n.second[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .second2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #fff;\n      transition: 0.2s;\n      text-shadow: 1px 1px 20px rgba(0,0,0,1);\n      text-decoration: none\n\n  }\n\n.third[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 50px;\n  color: rgb(206,206,206);\n  font-family: 'Poppins', sans-serif;\n  text-align: right;\n}\n\n.third[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: 20px;\n      letter-spacing: 3px;\n      position: relative;\n      margin-bottom: 20px;\n      font-size: 1.6em;\n      color: #fff;\n      padding-bottom: 0.5em;\n  }\n\n.third[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n          content: '';\n          background: #66c83d;\n          width: 20%;\n          height: 2px;\n          position: absolute;\n          bottom: 0;\n          left: 80%;\n      }\n\n.third[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      list-style: none;\n      padding-bottom: 15px;\n  }\n\n.third[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: rgb(206, 206, 206);\n      text-decoration: none;\n      letter-spacing: 3px;\n      font-weight: bold;\n      font-size: 14px;\n      transition: 0.2s;\n  }\n\n.third[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: #fff;\n          transition: 0.2s;\n          text-shadow: 1px 1px 20px rgba(0,0,0,1);\n      }\n\n@media screen and (max-width:1000px) {\n  .first[_ngcontent-%COMP%] {\n      text-align: center;\n  }\n\n      .first[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n          left: 40%;\n      }\n}\n\n@media screen and (max-width:1000px) {\n  .third[_ngcontent-%COMP%] {\n      text-align: center;\n  }\n\n      .third[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n          left: 40% !important;\n      }\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  height:2px;\n  background-color:rgb(206,206,206);\n  width:100%;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  text-align:center;\n  margin-top:100px;\n  margin-bottom:100px;\n}\n\n*[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1[_ngcontent-%COMP%]{\n  font-size: 2.5rem;\n  font-family: 'Montserrat';\n  font-weight: normal;\n  color: #444;\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.wrapper[_ngcontent-%COMP%]{\n  width: 40%;\n  margin: 0 auto;\n  max-width: 80rem;\n}\n\n.cols[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.col[_ngcontent-%COMP%]{\n  width: calc(25% - 2rem);\n  margin: 1rem;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%]{\n  transform-style: preserve-3d;\n\tperspective: 1000px;\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{\n  background-size: cover;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);\n  border-radius: 10px;\n\tbackground-position: center;\n\ttransition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\ttext-align: center;\n\tmin-height: 280px;\n\theight: auto;\n\tborder-radius: 10px;\n\tcolor: #fff;\n\tfont-size: 1.5rem;\n}\n\n.back[_ngcontent-%COMP%]{\n  background: #cedce7;\n  background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);\n}\n\n.front[_ngcontent-%COMP%]:after{\n\tposition: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    content: '';\n    display: block;\n    opacity: .6;\n    background-color: #000;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 10px;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%]{\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n\n.back[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.inner[_ngcontent-%COMP%]{\n    transform: translateY(-50%) translateZ(60px) scale(0.94);\n    top: 50%;\n    position: absolute;\n    left: 0;\n    width: 100%;\n    padding: 2rem;\n    box-sizing: border-box;\n    outline: 1px solid transparent;\n    perspective: inherit;\n    z-index: 2;\n}\n\n.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{\n    transform: rotateY(180deg);\n    transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{\n    transform: rotateY(0deg);\n    transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%]{\n  transform: rotateY(0deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%]{\n  transform: rotateY(-180deg);\n  transform-style: preserve-3d;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after{\n  content: '';\n  width: 4rem;\n  height: 2px;\n  position: absolute;\n  background: #C6D4DF;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: -.75rem;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  color: rgba(255,255,255,0.7);\n  font-family: 'Montserrat';\n  font-weight: 300;\n}\n\n@media screen and (max-width: 64rem){\n  .col[_ngcontent-%COMP%]{\n    width: calc(33.333333% - 2rem);\n  }\n}\n\n@media screen and (max-width: 48rem){\n  .col[_ngcontent-%COMP%]{\n    width: calc(50% - 2rem);\n  }\n}\n\n@media screen and (max-width: 32rem){\n  .col[_ngcontent-%COMP%]{\n    width: 100%;\n    margin: 0 0 2rem 0;\n  }\n}\n\nideo[_ngcontent-%COMP%]::-webkit-media-controls {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,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SUFDZCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztZQUMzQiwyQkFBMkI7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUNBOztJQUtJLHdEQUF3RDtBQUU1RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7QUFDZjs7QUFFQTtJQUVZLHdEQUF3RDtJQUNoRSxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtJQUVMLHNCQUFzQjtJQUM5Qiw4QkFBOEI7SUFFdEIsb0JBQW9CO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUVZLDBCQUEwQjtJQUUxQiw0QkFBNEI7QUFDeEM7O0FBRUE7SUFFWSx3QkFBd0I7SUFFeEIsNEJBQTRCO0FBQ3hDOztBQUVBO0VBRVUsd0JBQXdCO0VBRXhCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUVVLDJCQUEyQjtFQUUzQiw0QkFBNEI7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBVUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypjb2RlIGZvciBzbGlkZXIgc3RhcnRzKi9cblxuI3NsaWRlciAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgfVxuICBcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmNhcm91c2VsLWl0ZW0+aW1nIHtcbiAgICB3aWR0aDogMTAwJVxuICB9XG5cbiAgI3BhZ2Utd3JhcHtcbiAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4vKmNvZGUgZm9yIHNsaWRlciBlbmRzKi9cblxuXG4gIFxuXG4vKmNvZGUgZm9yIGNhcmQgZnJudCBhbmQgYWJvdXQgdXMgKi9cbmJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKSwuM3MgYm94LXNoYWRvdywuM3MgLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKTtcbiAgcGFkZGluZzogMTRweCA4MHB4IDE4cHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZDpob3ZlcntcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMTIpLCAwIDRweCA4cHggcmdiYSgwLDAsMCwuMDYpO1xufVxuXG4uY2FyZCBoM3tcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQgaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xufVxuXG4uY2FyZC0xe1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vaW1nL2dldHRpbmctc3RhcnRlZC9pb25pYy1uYXRpdmUtY2FyZC5wbmcpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XG59XG5cbi5jYXJkLTJ7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vaW1nL2dldHRpbmctc3RhcnRlZC9jb21wb25lbnRzLWNhcmQucG5nKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xufVxuXG4uY2FyZC0ze1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2ltZy9nZXR0aW5nLXN0YXJ0ZWQvdGhlbWluZy1jYXJkLnBuZyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogOTkwcHgpe1xuICAuY2FyZHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbn0gXG5cbi8qY29kZSBmb3IgYWJvdXQgdXMgIGVuZCovXG5cblxuXG5cblxuXG5cbi8qY29kZSBzdGFydHMgZm9yIG5hbWU9Y2FyZGhvdmVycG9wICAgdGVldGluZyBjb21wb28qL1xuLyotLS0tICBNYWluIFN0eWxlICAtLS0tKi9cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0ye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG59XG4jY2FyZHNfbGFuZHNjYXBlX3dyYXAtMiAuY29udGFpbmVye1xuICBwYWRkaW5nLXRvcDogODBweDsgXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2NhcmRzX2xhbmRzY2FwZV93cmFwLTIgLmNhcmQtZmx5ZXIgLmltYWdlLWJveHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41MCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVyIC5pbWFnZS1ib3ggaW1ne1xuICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC45cyBlYXNlOyBcbiAgLW1vei10cmFuc2l0aW9uOmFsbCAuOXMgZWFzZTsgXG4gIC1vLXRyYW5zaXRpb246YWxsIC45cyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjphbGwgLjlzIGVhc2U7IFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVyOmhvdmVyIC5pbWFnZS1ib3ggaW1ne1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XG59XG4jY2FyZHNfbGFuZHNjYXBlX3dyYXAtMiAuY2FyZC1mbHllciAudGV4dC1ib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVyIC50ZXh0LWJveCAudGV4dC1jb250YWluZXJ7XG4gIHBhZGRpbmc6IDMwcHggMThweDtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVye1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40MCk7XG59XG4jY2FyZHNfbGFuZHNjYXBlX3dyYXAtMiAuY2FyZC1mbHllcjpob3ZlcntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjZweCByZ2JhKDAsIDAsIDAsIDAuNTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4jY2FyZHNfbGFuZHNjYXBlX3dyYXAtMiAuY2FyZC1mbHllciAudGV4dC1ib3ggcHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbiNjYXJkc19sYW5kc2NhcGVfd3JhcC0yIC5jYXJkLWZseWVyIC50ZXh0LWJveCBoNntcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7IFxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogJ1JvYm90byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjMDBhY2MxO1xufVxuLypjb2RlIGVuZHMgZm9yIG5hbWU9Y2FyZGhvdmVycG9wKi9cbi8qIGNvZGUgZm9yIHVuZGVsaW5lIGluIHRlc3RpbmcqL1xuXG4vKmNvZGUgZm9yIGZvdXIgY2FyZHMgZm9yIHdoeSB1cyAqL1xuOnJvb3Qge1xuICAtLXJlZDogaHNsKDAsIDc4JSwgNjIlKTtcbiAgLS1jeWFuOiBoc2woMTgwLCA2MiUsIDU1JSk7XG4gIC0tb3JhbmdlOiBoc2woMzQsIDk3JSwgNjQlKTtcbiAgLS1ibHVlOiBoc2woMjEyLCA4NiUsIDY0JSk7XG4gIC0tdmFyeURhcmtCbHVlOiBoc2woMjM0LCAxMiUsIDM0JSk7XG4gIC0tZ3JheWlzaEJsdWU6IGhzbCgyMjksIDYlLCA2NiUpO1xuICAtLXZlcnlMaWdodEdyYXk6IGhzbCgwLCAwJSwgOTglKTtcbiAgLS13ZWlnaHQxOiAyMDA7XG4gIC0td2VpZ2h0MjogNDAwO1xuICAtLXdlaWdodDM6IDYwMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeUxpZ2h0R3JheSk7XG59XG5cbi5hdHRyaWJ1dGlvbiB7IFxuICBmb250LXNpemU6IDExcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG4uYXR0cmlidXRpb24gYSB7IFxuICBjb2xvcjogaHNsKDIyOCwgNDUlLCA0NCUpOyBcbn1cblxuaDE6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS13ZWlnaHQxKTtcbiAgY29sb3I6IHZhcigtLXZhcnlEYXJrQmx1ZSk7XG5cbn1cblxuaDE6bGFzdC1vZi10eXBlIHtcbiAgY29sb3I6IHZhcigtLXZhcnlEYXJrQmx1ZSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMC44O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmhlYWRlciBwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogdmFyKC0tZ3JheWlzaEJsdWUpO1xufVxuXG5cbi5ib3ggcCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5aXNoQmx1ZSk7XG59XG5cbi5ib3gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzMHB4IDQwcHggLTIwcHggdmFyKC0tZ3JheWlzaEJsdWUpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IDIwcHg7ICBcbn1cblxuaW1nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmJveCB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5ib3gge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuXG4uY3lhbiB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1jeWFuKTtcbn1cbi5yZWQge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tcmVkKTtcbn1cbi5ibHVlIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWJsdWUpO1xufVxuLm9yYW5nZSB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xufVxuXG5oMiB7XG4gIGNvbG9yOiB2YXIoLS12YXJ5RGFya0JsdWUpO1xuICBmb250LXdlaWdodDogdmFyKC0td2VpZ2h0Myk7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XG4gIC5yb3cxLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAucm93Mi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuYm94LWRvd24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxNTBweDtcbiAgfVxuICAuYm94IHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICBcbiAgfVxuICAuaGVhZGVyIHAge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgfVxuICBcbn1cbi8qIGNhcmQgZm9yIHdoeSB1cyBlbmRzIGhlcmUgKi9cblxuXG5cblxuXG5cblxuKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjcpLHJnYmEoMCwwLDAsMC43KSksIHVybChcImh0dHA6Ly9hbmRyZWVhYnVuZ2V0LmNvLnVrL0ltZy9mb290ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcbn1cblxuXG5cbi5maXJzdCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiByZ2IoMjA2LDIwNiwyMDYpO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4gIC5maXJzdCBoNCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgfVxuXG4gICAgICAuZmlyc3QgaDQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjZjODNkO1xuICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gIC5maXJzdCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4uc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgY29sb3I6IHJnYigyMDYsMjA2LDIwNik7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY29uZDIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBjb2xvcjogcmdiKDIwNiwyMDYsMjA2KTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Vjb25kIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbiAgLnNlY29uZCBoNDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kOiAjNjZjODNkO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNDAlO1xuICB9XG5cblxuLnNlY29uZCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uc2Vjb25kIGEsIC5zZWNvbmQyIGEge1xuICBjb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbiAgLnNlY29uZCBhOmhvdmVyLCAuc2Vjb25kMiBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgwLDAsMCwxKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuXG4gIH1cblxuXG5cbi50aGlyZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiByZ2IoMjA2LDIwNiwyMDYpO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuXG4gIC50aGlyZCBoNCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgfVxuXG5cbiAgICAgIC50aGlyZCBoNDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NmM4M2Q7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgIH1cblxuXG5cbiAgLnRoaXJkIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuXG5cbiAgLnRoaXJkIGEge1xuICAgICAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuXG4gICAgICAudGhpcmQgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYmEoMCwwLDAsMSk7XG4gICAgICB9XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcbiAgLmZpcnN0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICAgICAuZmlyc3QgaDQ6OmFmdGVyIHtcbiAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XG4gIC50aGlyZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAgICAgLnRoaXJkIGg0OjphZnRlciB7XG4gICAgICAgICAgbGVmdDogNDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmxpbmUge1xuICBoZWlnaHQ6MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMDYsMjA2LDIwNik7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5jb250YWluZXIgaDF7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tdG9wOjEwMHB4O1xuICBtYXJnaW4tYm90dG9tOjEwMHB4O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4qe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4ud3JhcHBlcntcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODByZW07XG59XG5cbi5jb2xze1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbHtcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMnJlbSk7XG4gIG1hcmdpbjogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVye1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0LXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuXHQgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mcm9udCxcbi5iYWNre1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcblx0dHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcblx0LW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdCAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDI4MHB4O1xuXHRoZWlnaHQ6IGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhY2t7XG4gIGJhY2tncm91bmQ6ICNjZWRjZTc7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgI2NlZGNlNyAwJSwjNTk2YTcyIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICAjY2VkY2U3IDAlLCM1OTZhNzIgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgICNjZWRjZTcgMCUsIzU5NmE3MiAxMDAlKTtcbn1cblxuLmZyb250OmFmdGVye1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvbnRhaW5lcjpob3ZlciAuZnJvbnQsXG4uY29udGFpbmVyOmhvdmVyIC5iYWNre1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xufVxuXG4uYmFja3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbm5lcntcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XG4gICAgdG9wOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xuICAgICAgICAgICAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lciAuYmFja3tcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmNvbnRhaW5lciAuZnJvbnR7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciAuYmFja3tcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciAuZnJvbnR7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5mcm9udCAuaW5uZXIgcHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcm9udCAuaW5uZXIgcDphZnRlcntcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjQzZENERGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3R0b206IC0uNzVyZW07XG59XG5cbi5mcm9udCAuaW5uZXIgc3BhbntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pe1xuICAuY29se1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMyUgLSAycmVtKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSl7XG4gIC5jb2x7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJyZW0pe1xuICAuY29se1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuaWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */";
class HomeComponent {
    constructor() {
        this.photo = ["https://wallpapercave.com/wp/wp3792767.jpg", "https://wallpapercave.com/wp/wp3792708.jpg", "https://wallpapercave.com/wp/wp3792715.png"];
    }
    ngOnInit() {
        this.firstphoto();
    }
    firstphoto() {
        console.log("/////////////////////////", this.photo[0]);
        this.image = this.photo[0];
        this.imageid = 0;
    }
    prev() {
        console.log("?????????????????????", this.imageid);
        if (this.imageid == 0) {
            this.image = this.photo[2];
            this.imageid = 2;
        }
        else {
            console.log("prevv in else", this.imageid);
            var a = this.imageid - 1;
            this.image = this.photo[a];
            this.imageid = a;
        }
    }
    next() {
        console.log("!!!!!!!!!!!!!!!!!");
        if (this.imageid == 2) {
            this.image = this.photo[0];
            this.imageid = 0;
        }
        else {
            console.log("next():>>>", this.imageid);
            var a = this.imageid + 1;
            this.image = this.photo[this.imageid + 1];
            this.imageid = a;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 220, vars: 1, consts: [["href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "rel", "stylesheet"], ["rel", "icon", "type", "image/png", "sizes", "32x32", "href", "./images/favicon-32x32.png"], ["href", "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css?family=Montserrat:400,700", "rel", "stylesheet"], ["id", "slider", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], [1, "carousel-inner"], [1, "carousel-item", "active"], [3, "src"], [1, "carousel-caption"], ["role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "containe"], [1, "cols"], ["ontouchstart", "this.classList.toggle('hover');", 1, "col"], [1, "container"], [1, "front", 2, "background-image", "url(https://media.istockphoto.com/photos/powder-coating-process-of-metal-products-picture-id1299308121?k=6&m=1299308121&s=612x612&w=0&h=N62aUTKFpqvDZ52j7IPrRC7agyw9aim97gQpbKosols=)"], [1, "inner"], [1, "back"], [2, "font-size", "80%"], [1, "front", 2, "background-image", "url(https://media.istockphoto.com/photos/businessmen-choose-to-rating-score-happy-icons-customer-service-and-picture-id1139674909?k=6&m=1139674909&s=612x612&w=0&h=SdAiyKiSHUbLhORuCXl3mzaGOuNR072slTl6as4-8Xw=)"], [1, "front", 2, "background-image", "url(https://media.istockphoto.com/photos/businessman-magical-touch-concept-univercity-diploma-picture-id653884906?k=6&m=653884906&s=612x612&w=0&h=cMAoVd2Waij-RA7_X4JhTlv3lM6feorXG1xnUmp73Vo=)"], [1, "front", 2, "background-image", "url(https://media.istockphoto.com/vectors/check-emblemtype-right-vector-emblem-design-vector-id684522426?k=6&m=684522426&s=612x612&w=0&h=AZHmVA0gSOTMXUNE0tE69rVgpZ1dW62bYFVcQUHYmao=)"], ["id", "cards_landscape_wrap-2"], [1, "row"], [1, "col-xs-12", "col-sm-6", "col-md-2", "col-lg-3"], ["href", ""], [1, "card-flyer"], [1, "text-box"], [1, "image-box"], ["src", "https://thumbs.dreamstime.com/b/powder-coating-metal-parts-woman-protective-suit-sprays-powder-paint-gun-metal-products-powder-coating-112950733.jpg", "alt", ""], [1, "text-container"], ["src", "https://media.istockphoto.com/photos/powder-coating-process-of-metal-products-picture-id1299307574?k=6&m=1299307574&s=612x612&w=0&h=6r7WKnGciJCUsALs0wa4YcNeGow9xxvbJE-v32IDE-E=", "alt", ""], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3"], ["src", "https://media.istockphoto.com/photos/shot-blasting-machine-for-processing-of-metal-plates-and-profiles-picture-id475580362?k=6&m=475580362&s=612x612&w=0&h=wQ9axY_-lcvq5lSTFpGOHP05ZLr9ambyE_9UtwaE_sI=", "alt", ""], ["src", "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "alt", ""], [1, "header"], [1, "row1-container"], [1, "box", "box-down", "cyan"], ["src", "https://assets.codepen.io/2301174/icon-team-builder.svg", "alt", ""], [1, "box", "red"], ["src", "https://assets.codepen.io/2301174/icon-supervisor.svg", "alt", ""], [1, "box", "box-down", "blue"], ["src", "https://assets.codepen.io/2301174/icon-karma.svg", "alt", ""], [1, "row2-container"], [1, "box", "orange"], ["src", "https://assets.codepen.io/2301174/icon-calculator.svg", "alt", ""], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"], [1, "footer"], [1, "col-md-4", "col-xs-12"], [1, "second"], ["href", "#"], [1, "third"], [1, "far", "fa-envelope"], [1, "fas", "fa-map-marker-alt"], [1, "col-12"], [1, "line"], [1, "second2"], ["href", "https://codepen.io/AndreeaBunget", "target", "_blank"], [1, "fab", "fa-codepen", "fa-2x", "margin"], ["href", "https://github.com/WebDeveloperCodeRep", "target", "_blank"], [1, "fab", "fa-github", "fa-2x", "margin"], ["href", "https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/", "target", "_blank"], [1, "fab", "fa-linkedin", "fa-2x", "margin"], ["href", "https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber", "target", "_blank"], [1, "fab", "fa-youtube", "fa-2x", "margin"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Travel! Enjoy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_19_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "We have decades of knowledge in the construction field and our aim is to deliver the best service to your project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Customer Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " At SSF we always listen to our customer\u2019s needs and expectations and will achieve solutions to problem jobs and enable us to go above and beyond what is expected..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Certified company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Over the years we have become certified and credited by many suppliers including Akzo Nobel and Peninsula to name a few. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Your 1st choice in the region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "At SSH,we aim to offer the best service around providing good quality powder coating which with our competitive rates of cost should make us your first choice for all your powder coating needs.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Architectural Powder Coating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "We offer many various types of powder coating including Architectural coatings this includes our 3 coat powder system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Three coat powder system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Our 3 coat systems enables items to have a protective coating that prevents corrosion whilst giving a smooth finish.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Shot Blasting Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "We have a large blasting facility that can strip paint of items as well as provide a good clean surface to powder coat on to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "RAL, BS & Special Shades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "We are able to powder coat to many different specifications and colours to cater for all your needs and orders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "WHY US \u00A0 ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Reliable, Cost efficient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "We have decades of knowledge in the construction field and our aim is to deliver the best service to your project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Efficient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "We have systems in place to track the progress of any order that is currently in our possession at any time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "With our stringent quality checks in place you can be assured that your product will be of the best standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Reliable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "We plan our work schedule so that we can have your orders ready when we promise to complete them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "24hr turn around");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Due to our long opening times including a night shift, efficient staff and systems we offer a 2/3 day turn round on most jobs and can even provide a 24hr service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "meta", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "link", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Other Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "SSF CONSTRUCTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "SSF FIBRICATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "SSF Shutters & Shop Fronts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Navigate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Divisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "SSF Powder Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " sales@ssf-group.co.uk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Unit 3, The Old Foundry, Ash Street, Bilston, West Midlands, WV14 8UL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [_c0, _c0, _c0] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 164, vars: 0, consts: [[1, "shell"], [1, "container"], [1, "container", "text-center"], ["href", "http://blog.wingerdstok.com", 1, "wsk-btn"], [1, "row"], [1, "col-md-3"], [1, "wsk-cp-product"], [1, "wsk-cp-img"], ["src", "https://media.istockphoto.com/photos/highrise-construction-sites-picture-id494026630?k=6&m=494026630&s=612x612&w=0&h=qBWl9qqw7_SK7zb1Xa7Ltd7cGmEw0UpBwZniLNjbpJ4=", "alt", "Product", 1, "img-responsive"], [1, "wsk-cp-text"], [1, "category"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SSH Powder Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "SSH Powder Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "SSH Powder Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Ethnic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i');\nbody[_ngcontent-%COMP%]{\n  font-family: 'Muli', sans-serif;\n  background:#ddd;\n}\n.shell[_ngcontent-%COMP%]{\n  padding:80px 0;\n}\n.wsk-cp-product[_ngcontent-%COMP%]{\n  background:#fff;\n  padding:15px;\n  border-radius:6px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  position:relative;\n  margin:20px auto;\n}\n.wsk-cp-img[_ngcontent-%COMP%]{\n  position:absolute;\n  top:5px;\n  left:50%;\n  transform:translate(-50%);\n  -webkit-transform:translate(-50%);\n  -ms-transform:translate(-50%);\n  -moz-transform:translate(-50%);\n  -o-transform:translate(-50%);\n  -khtml-transform:translate(-50%);\n  width: 100%;\n  padding: 15px;\n  transition: all 0.2s ease-in-out;\n}\n.wsk-cp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width:100%;\n  transition: all 0.2s ease-in-out;\n  border-radius:6px;\n}\n.wsk-cp-product[_ngcontent-%COMP%]:hover   .wsk-cp-img[_ngcontent-%COMP%]{\n  top:-40px;\n}\n.wsk-cp-product[_ngcontent-%COMP%]:hover   .wsk-cp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n}\n.wsk-cp-text[_ngcontent-%COMP%]{\n  padding-top:150%;\n}\n.wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{\n  text-align:center;\n  font-size:12px;\n  font-weight:bold;\n  padding:5px;\n  margin-bottom:45px;\n  position:relative;\n  transition: all 0.2s ease-in-out;\n}\n.wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n  -webkit-transform: translate(-50%,-50%);\n  -moz-transform: translate(-50%,-50%);\n  -ms-transform: translate(-50%,-50%);\n  -o-transform: translate(-50%,-50%);\n  -khtml-transform: translate(-50%,-50%);\n    \n}\n.wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n  padding: 12px 30px;\n  border: 1px solid #313131;\n  background:#212121;\n  color:#fff;\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n  border-radius:27px;\n  transition: all 0.05s ease-in-out;\n  \n}\n.wsk-cp-product[_ngcontent-%COMP%]:hover   .wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n  border-color:#ddd;\n  box-shadow: none;\n  padding: 11px 28px;\n}\n.wsk-cp-product[_ngcontent-%COMP%]:hover   .wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{\n  margin-top: 0px;\n}\n.wsk-cp-text[_ngcontent-%COMP%]   .title-product[_ngcontent-%COMP%]{\n  text-align:center;\n}\n.wsk-cp-text[_ngcontent-%COMP%]   .title-product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-size:20px;\n  font-weight:bold;\n  margin:15px auto;\n  overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  width:100%;\n}\n.wsk-cp-text[_ngcontent-%COMP%]   .description-prod[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin:0;\n}\n\n.wsk-cp-text[_ngcontent-%COMP%]   .description-prod[_ngcontent-%COMP%] {\n  text-align:center;\n  width: 100%;\n  height:62px;\n  overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n  margin-bottom:15px;\n}\n.card-footer[_ngcontent-%COMP%]{\n  padding: 25px 0 5px;\n  border-top: 1px solid #ddd;\n}\n.card-footer[_ngcontent-%COMP%]:after, .card-footer[_ngcontent-%COMP%]:before{\n  content:'';\n  display:table;\n}\n.card-footer[_ngcontent-%COMP%]:after{\n  clear:both;\n}\n.card-footer[_ngcontent-%COMP%]   .wcf-left[_ngcontent-%COMP%]{\n  float:left;\n  \n}\n.card-footer[_ngcontent-%COMP%]   .wcf-right[_ngcontent-%COMP%]{\n  float:right;\n}\n.price[_ngcontent-%COMP%]{\n  font-size:18px;\n  font-weight:bold;\n}\na.buy-btn[_ngcontent-%COMP%]{\n  display:block;\n  color:#212121;\n  text-align:center;\n  font-size: 18px;\n  width:35px;\n  height:35px;\n  line-height:35px;\n  border-radius:50%;\n  border:1px solid #212121;\n  transition: all 0.2s ease-in-out;\n}\na.buy-btn[_ngcontent-%COMP%]:hover, a.buy-btn[_ngcontent-%COMP%]:active, a.buy-btn[_ngcontent-%COMP%]:focus{\n  border-color: #FF9800;\n  background: #FF9800;\n  color: #fff;\n  text-decoration:none;\n}\n.wsk-btn[_ngcontent-%COMP%]{\n  display:inline-block;\n  color:#212121;\n  text-align:center;\n  font-size: 18px;\n  transition: all 0.2s ease-in-out;\n  border-color: #FF9800;\n  background: #FF9800;\n  padding:12px 30px;\n  border-radius:27px;\n  margin: 0 5px;\n}\n.wsk-btn[_ngcontent-%COMP%]:hover, .wsk-btn[_ngcontent-%COMP%]:focus, .wsk-btn[_ngcontent-%COMP%]:active{\n  text-decoration:none;\n  color:#fff;\n}\n.red[_ngcontent-%COMP%]{\n  color:#F44336;\n  font-size:22px;\n  display:inline-block;\n  margin: 0 5px;\n}\n@media screen and (max-width: 991px) {\n  .wsk-cp-product[_ngcontent-%COMP%]{\n    margin:40px auto;\n  }\n  .wsk-cp-product[_ngcontent-%COMP%]   .wsk-cp-img[_ngcontent-%COMP%]{\n  top:-40px;\n}\n.wsk-cp-product[_ngcontent-%COMP%]   .wsk-cp-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n}\n  .wsk-cp-product[_ngcontent-%COMP%]   .wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n  border-color:#ddd;\n  box-shadow: none;\n  padding: 11px 28px;\n}\n.wsk-cp-product[_ngcontent-%COMP%]   .wsk-cp-text[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{\n  margin-top: 0px;\n}\na.buy-btn[_ngcontent-%COMP%]{\n  border-color: #FF9800;\n  background: #FF9800;\n  color: #fff;\n}\n}\n.btn[_ngcontent-%COMP%] {\n  background: rgb(188 87 36);\n  color: rgb(255 255 255);\n  text-decoration: none;\n  display: inline-block;\n  padding: 0.5em;\n  border-radius: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,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QWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0FBSUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TXVsaTo0MDAsNDAwaSw3MDAsNzAwaScpO1xuYm9keXtcbiAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDojZGRkO1xufVxuLnNoZWxse1xuICBwYWRkaW5nOjgwcHggMDtcbn1cbi53c2stY3AtcHJvZHVjdHtcbiAgYmFja2dyb3VuZDojZmZmO1xuICBwYWRkaW5nOjE1cHg7XG4gIGJvcmRlci1yYWRpdXM6NnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBtYXJnaW46MjBweCBhdXRvO1xufVxuLndzay1jcC1pbWd7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6NXB4O1xuICBsZWZ0OjUwJTtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO1xuICAtby10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO1xuICAta2h0bWwtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLndzay1jcC1pbWcgaW1ne1xuICB3aWR0aDoxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czo2cHg7XG59XG4ud3NrLWNwLXByb2R1Y3Q6aG92ZXIgLndzay1jcC1pbWd7XG4gIHRvcDotNDBweDtcbn1cbi53c2stY3AtcHJvZHVjdDpob3ZlciAud3NrLWNwLWltZyBpbWd7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG4ud3NrLWNwLXRleHR7XG4gIHBhZGRpbmctdG9wOjE1MCU7XG59XG4ud3NrLWNwLXRleHQgLmNhdGVnb3J5e1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOjEycHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIHBhZGRpbmc6NXB4O1xuICBtYXJnaW4tYm90dG9tOjQ1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi53c2stY3AtdGV4dCAuY2F0ZWdvcnkgPiAqe1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjUwJTtcbiAgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgLWtodG1sLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgXG59XG4ud3NrLWNwLXRleHQgLmNhdGVnb3J5ID4gc3BhbntcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMTMxO1xuICBiYWNrZ3JvdW5kOiMyMTIxMjE7XG4gIGNvbG9yOiNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwwLDAsMC4yMik7XG4gIGJvcmRlci1yYWRpdXM6MjdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDVzIGVhc2UtaW4tb3V0O1xuICBcbn1cbi53c2stY3AtcHJvZHVjdDpob3ZlciAud3NrLWNwLXRleHQgLmNhdGVnb3J5ID4gc3BhbntcbiAgYm9yZGVyLWNvbG9yOiNkZGQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDExcHggMjhweDtcbn1cbi53c2stY3AtcHJvZHVjdDpob3ZlciAud3NrLWNwLXRleHQgLmNhdGVnb3J5e1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ud3NrLWNwLXRleHQgLnRpdGxlLXByb2R1Y3R7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLndzay1jcC10ZXh0IC50aXRsZS1wcm9kdWN0IGgze1xuICBmb250LXNpemU6MjBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgbWFyZ2luOjE1cHggYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDoxMDAlO1xufVxuLndzay1jcC10ZXh0IC5kZXNjcmlwdGlvbi1wcm9kIHB7XG4gIG1hcmdpbjowO1xufVxuLyogVHJ1bmNhdGUgKi9cbi53c2stY3AtdGV4dCAuZGVzY3JpcHRpb24tcHJvZCB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjYycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1hcmdpbi1ib3R0b206MTVweDtcbn1cbi5jYXJkLWZvb3RlcntcbiAgcGFkZGluZzogMjVweCAwIDVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4uY2FyZC1mb290ZXI6YWZ0ZXIsIC5jYXJkLWZvb3RlcjpiZWZvcmV7XG4gIGNvbnRlbnQ6Jyc7XG4gIGRpc3BsYXk6dGFibGU7XG59XG4uY2FyZC1mb290ZXI6YWZ0ZXJ7XG4gIGNsZWFyOmJvdGg7XG59XG5cbi5jYXJkLWZvb3RlciAud2NmLWxlZnR7XG4gIGZsb2F0OmxlZnQ7XG4gIFxufVxuXG4uY2FyZC1mb290ZXIgLndjZi1yaWdodHtcbiAgZmxvYXQ6cmlnaHQ7XG59XG5cbi5wcmljZXtcbiAgZm9udC1zaXplOjE4cHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbmEuYnV5LWJ0bntcbiAgZGlzcGxheTpibG9jaztcbiAgY29sb3I6IzIxMjEyMTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6MzVweDtcbiAgaGVpZ2h0OjM1cHg7XG4gIGxpbmUtaGVpZ2h0OjM1cHg7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBib3JkZXI6MXB4IHNvbGlkICMyMTIxMjE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuYS5idXktYnRuOmhvdmVyICwgYS5idXktYnRuOmFjdGl2ZSwgYS5idXktYnRuOmZvY3Vze1xuICBib3JkZXItY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQ6ICNGRjk4MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi53c2stYnRue1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgY29sb3I6IzIxMjEyMTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1jb2xvcjogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZDogI0ZGOTgwMDtcbiAgcGFkZGluZzoxMnB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6MjdweDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi53c2stYnRuOmhvdmVyLCAud3NrLWJ0bjpmb2N1cywgLndzay1idG46YWN0aXZle1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgY29sb3I6I2ZmZjtcbn0gIFxuLnJlZHtcbiAgY29sb3I6I0Y0NDMzNjtcbiAgZm9udC1zaXplOjIycHg7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLndzay1jcC1wcm9kdWN0e1xuICAgIG1hcmdpbjo0MHB4IGF1dG87XG4gIH1cbiAgLndzay1jcC1wcm9kdWN0IC53c2stY3AtaW1ne1xuICB0b3A6LTQwcHg7XG59XG4ud3NrLWNwLXByb2R1Y3QgLndzay1jcC1pbWcgaW1ne1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsMCwwLDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsMCwwLDAuMjIpO1xufVxuICAud3NrLWNwLXByb2R1Y3QgLndzay1jcC10ZXh0IC5jYXRlZ29yeSA+IHNwYW57XG4gIGJvcmRlci1jb2xvcjojZGRkO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxMXB4IDI4cHg7XG59XG4ud3NrLWNwLXByb2R1Y3QgLndzay1jcC10ZXh0IC5jYXRlZ29yeXtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuYS5idXktYnRue1xuICBib3JkZXItY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQ6ICNGRjk4MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxufVxuXG4gIFxuIFxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYigxODggODcgMzYpO1xuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'powdercoating';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 59, vars: 0, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "fixed-top"], [1, "topbar"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "social-network"], ["href", "#", 1, "waves-effect", "waves-dark"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-pinterest"], [1, "fa", "fa-google-plus"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "mx-background-top-linear"], ["rel", "nofollow", "target", "_blank", "href", "home", 1, "navbar-brand", 2, "text-transform", "uppercase"], [1, "wordCarousel"], ["data-char", "SSF", 1, "xbox"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "home", 1, "nav-link", 2, "color", "cyan"], [1, "nav-item"], ["href", "facilities", 1, "nav-link", 2, "color", "cyan"], ["href", "divisions", 1, "nav-link", 2, "color", "cyan"], ["href", "request", 1, "nav-link", 2, "color", "cyan"], ["href", "gallery", 1, "nav-link", 2, "color", "cyan"], [1, "nav-link", 2, "color", "cyan"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SSF Powder Coating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FACILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "DIVISIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "REQUEST QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n    margin: 0;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #f7f7f7;\n}\n.navbar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n}\n\n.topbar[_ngcontent-%COMP%]{\n  background-color: #C2B8A3;\n  padding: 0;\n}\n.topbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin:-7px;\n  padding:0;\n}\n.topbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-12[_ngcontent-%COMP%] { \n  padding:0;\n}\n.topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  margin:0;\n  display:inline-block;\n  font-size: 13px;\n  color: #f1f6ff;\n}\n.topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]{\n  margin-right:5px;\n}\n.topbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{\n  text-align:right;\n}\nheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n.topbar[_ngcontent-%COMP%]   li.topbar[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 18px;\n    line-height: 52px;\n    transition: all .3s linear;\n}\n.topbar[_ngcontent-%COMP%]   li.topbar[_ngcontent-%COMP%]:hover {\n    color:#C2B8A3;\n}\n.topbar[_ngcontent-%COMP%]   ul.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #131313;\n    font-style: normal;\n    margin-right: 8px;\n    display: inline-block;\n    position: relative;\n    top: 4px;\n}\n.topbar[_ngcontent-%COMP%]   ul.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: right;\n    padding-left: 30px;\n    color: #ffffff;\n    font-size: 13px;\n    line-height: 44px;\n}\n.topbar[_ngcontent-%COMP%]   ul.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #aaa;\n    font-size: 13px;\n    font-weight: 400;\n    line-height: 50px;\n    padding-left: 18px;\n}\nul.social-network[_ngcontent-%COMP%] {\n  border:none;\n  margin:0;\n  padding:0;\n}\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border:none;  \n  margin:0;\n}\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin:0;\n}\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:inline;\n    margin: 0 5px;\n    border: 0px solid #2D2D2D;\n    padding: 5px 0 0;\n    width: 32px;\n    display: inline-block;\n    text-align: center;\n    height: 32px;\n    vertical-align: baseline;\n    color: #000;\n}\nul.social-network[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 5px 0 10px -25px;\n  float: right;\n}\n.waves-effect[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    vertical-align: middle;\n    z-index: 1;\n    will-change: opacity, transform;\n    transition: .3s ease-out;\n    color: #fff;\n}\na[_ngcontent-%COMP%] {\n  color: #0a0a0a;\n  text-decoration: none;\n}\nli[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n.bg-image-full[_ngcontent-%COMP%] {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -o-background-size: cover;\n}\n.bg-dark[_ngcontent-%COMP%] {\n    background-color: rgb(34, 34, 34)!important;\n}\n.mx-background-top-linear[_ngcontent-%COMP%] {\n    background: linear-gradient(30deg,Black 48%, Black 48%);\n}\n.wordCarousel[_ngcontent-%COMP%] {\n\t font-size: 36px;\n\t font-weight: 100;\n\t color: #eee;\n}\n.wordCarousel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n\t overflow: hidden;\n\t position: relative;\n\t float: right;\n\t height: 65px;\n\t padding-top: 10px;\n\t margin-top: -10px;\n}\n.wordCarousel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\t font-family: Serif;\n\t color: #eee;\n\t font-weight: 700;\n\t padding: 0 10px;\n\t height: 45px;\n\t margin-bottom: 45px;\n\t display: block;\n}\n.flip2[_ngcontent-%COMP%] {\n\t animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;\n}\n.flip3[_ngcontent-%COMP%] {\n\t animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;\n}\n.flip4[_ngcontent-%COMP%] {\n\t animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;\n}\n@keyframes flip2 {\n\t 0% {\n\t\t margin-top: -180px;\n\t}\n\t 5% {\n\t\t margin-top: -90px;\n\t}\n\t 50% {\n\t\t margin-top: -90px;\n\t}\n\t 55% {\n\t\t margin-top: 0px;\n\t}\n\t 99.99% {\n\t\t margin-top: 0px;\n\t}\n\t 100% {\n\t\t margin-top: -270px;\n\t}\n}\n@keyframes flip3 {\n\t 0% {\n\t\t margin-top: -270px;\n\t}\n\t 5% {\n\t\t margin-top: -180px;\n\t}\n\t 33% {\n\t\t margin-top: -180px;\n\t}\n\t 38% {\n\t\t margin-top: -90px;\n\t}\n\t 66% {\n\t\t margin-top: -90px;\n\t}\n\t 71% {\n\t\t margin-top: 0px;\n\t}\n\t 99.99% {\n\t\t margin-top: 0px;\n\t}\n\t 100% {\n\t\t margin-top: -270px;\n\t}\n}\n@keyframes flip4 {\n\t 0% {\n\t\t margin-top: -360px;\n\t}\n\t 5% {\n\t\t margin-top: -270px;\n\t}\n\t 25% {\n\t\t margin-top: -270px;\n\t}\n\t 30% {\n\t\t margin-top: -180px;\n\t}\n\t 50% {\n\t\t margin-top: -180px;\n\t}\n\t 55% {\n\t\t margin-top: -90px;\n\t}\n\t 75% {\n\t\t margin-top: -90px;\n\t}\n\t 80% {\n\t\t margin-top: 0px;\n\t}\n\t 99.99% {\n\t\t margin-top: 0px;\n\t}\n\t 100% {\n\t\t margin-top: -270px;\n\t}\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n\t width: 100%;\n\t height: 80vh;\n\t margin: 0;\n\t padding: 0;\n\t overflow: hidden;\n}\nbody[_ngcontent-%COMP%] {\n\t font-family: \"Roboto Condensed\", cursive;\n\t display: flex;\n\t align-items: center;\n\t justify-content: center;\n\t background: darkorange;\n}\nbody[_ngcontent-%COMP%]::after {\n\t content: \"\";\n\t display: block;\n\t width: 110%;\n\t height: 125vh;\n\t background: radial-gradient(#222, #000);\n\t position: absolute;\n\t z-index: -1;\n\t transform: rotate(20deg);\n\t border-radius: 50%;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  background: #22222a;\n}\n.xbox[_ngcontent-%COMP%] {\n  font-size: 30px;\n  position: absolute;\n  top: 48%;\n  left: 19%;\n  transform: translate(-50%, -51%);\n  text-shadow: 0px 0px 4px rgb(255, 255, 255);\n  color:white;\n}\n.xbox[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  font-size: 60px;\n  background-image: linear-gradient(180deg, white 10%, #d8f5f3 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n  text-shadow: none;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n}\n.xbox[_ngcontent-%COMP%]:before {\n  content: attr(data-char);\n  font-size: 30px;\n  position: absolute;\n  text-shadow: 0px 0px 5px rgb(199, 232, 233);\n  -webkit-clip-path: polygon(\n    0% 100%,\n    0% 0%,\n    100% 0%,\n    100% 50%,\n    50% 50%,\n    100% 50%,\n    100% 100%\n  );\n          clip-path: polygon(\n    0% 100%,\n    0% 0%,\n    100% 0%,\n    100% 50%,\n    50% 50%,\n    100% 50%,\n    100% 100%\n  );\n  animation-name: loading;\n  animation-duration: 10s;\n  animation-delay: -0.1s;\n  animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);\n  animation-direction: reverse;\n  mix-blend-mode: color;\n}\n.xbox[_ngcontent-%COMP%]:after {\n  content: attr(data-char);\n  font-size: 30px;\n  position: absolute;\n  text-shadow: 0px 0px 5px rgb(11, 236, 187);\n  -webkit-clip-path: polygon(\n    0% 100%,\n    0% 0%,\n    100% 0%,\n    100% 50%,\n    50% 50%,\n    100% 50%,\n    100% 100%\n  );\n          clip-path: polygon(\n    0% 100%,\n    0% 0%,\n    100% 0%,\n    100% 50%,\n    50% 50%,\n    100% 50%,\n    100% 100%\n  );\n  animation-name: loading;\n  animation-duration: 10s;\n  animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);\n  animation-direction: reverse;\n  mix-blend-mode: color;\n  left: 0;\n  top: 0;\n}\n@keyframes loading {\n  0% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 100%\n    );\n  }\n  12.5% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 100%,\n      100% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 100%,\n      100% 100%\n    );\n  }\n  25% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 100%,\n      50% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 100%,\n      50% 100%\n    );\n  }\n  37.5% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 100%,\n      0% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 100%,\n      0% 100%\n    );\n  }\n  50% {\n    -webkit-clip-path: polygon(\n      0% 50%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 50%,\n      0% 50%\n    );\n            clip-path: polygon(\n      0% 50%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 50%,\n      0% 50%\n    );\n  }\n  62.5% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 50%, 50% 50%, 0% 0%, 0% 0%);\n            clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 50%, 50% 50%, 0% 0%, 0% 0%);\n  }\n  75% {\n    -webkit-clip-path: polygon(\n      50% 0%,\n      50% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 0%,\n      50% 0%\n    );\n            clip-path: polygon(\n      50% 0%,\n      50% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 0%,\n      50% 0%\n    );\n  }\n  87.5% {\n    -webkit-clip-path: polygon(\n      100% 0%,\n      100% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 0%,\n      100% 0%\n    );\n            clip-path: polygon(\n      100% 0%,\n      100% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 0%,\n      100% 0%\n    );\n  }\n  100% {\n    -webkit-clip-path: polygon(\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 50%\n    );\n            clip-path: polygon(\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 50%\n    );\n  }\n}\n@keyframes loading2 {\n  0% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 100%\n    );\n  }\n  12.5% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 100%,\n      100% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 100%,\n      100% 100%\n    );\n  }\n  25% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 100%,\n      50% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 100%,\n      50% 100%\n    );\n  }\n  37.5% {\n    -webkit-clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 100%,\n      0% 100%\n    );\n            clip-path: polygon(\n      0% 100%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 100%,\n      0% 100%\n    );\n  }\n  50% {\n    -webkit-clip-path: polygon(\n      0% 50%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 50%,\n      0% 50%\n    );\n            clip-path: polygon(\n      0% 50%,\n      0% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      0% 50%,\n      0% 50%\n    );\n  }\n  62.5% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 50%, 50% 50%, 0% 0%, 0% 0%);\n            clip-path: polygon(0% 0%, 0% 0%, 100% 0%, 100% 50%, 50% 50%, 0% 0%, 0% 0%);\n  }\n  75% {\n    -webkit-clip-path: polygon(\n      50% 0%,\n      50% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 0%,\n      50% 0%\n    );\n            clip-path: polygon(\n      50% 0%,\n      50% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      50% 0%,\n      50% 0%\n    );\n  }\n  87.5% {\n    -webkit-clip-path: polygon(\n      100% 0%,\n      100% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 0%,\n      100% 0%\n    );\n            clip-path: polygon(\n      100% 0%,\n      100% 0%,\n      100% 0%,\n      100% 50%,\n      50% 50%,\n      100% 0%,\n      100% 0%\n    );\n  }\n  100% {\n    -webkit-clip-path: polygon(\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 50%\n    );\n            clip-path: polygon(\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      100% 50%,\n      50% 50%,\n      100% 50%,\n      100% 50%\n    );\n  }\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: rgb(237, 252, 252);\n}\n/*# sourceMappingURL=data:application/json;base64,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SDtFQUNBO0lBQ0U7Ozs7Ozs7O0tBUUM7WUFSRDs7Ozs7Ozs7S0FRQztFQUNIO0VBQ0E7SUFDRTs7Ozs7Ozs7S0FRQztZQVJEOzs7Ozs7OztLQVFDO0VBQ0g7RUFDQTtJQUNFLGtGQUEwRTtZQUExRSwwRUFBMEU7RUFDNUU7RUFDQTtJQUNFOzs7Ozs7OztLQVFDO1lBUkQ7Ozs7Ozs7O0tBUUM7RUFDSDtFQUNBO0lBQ0U7Ozs7Ozs7O0tBUUM7WUFSRDs7Ozs7Ozs7S0FRQztFQUNIO0VBQ0E7SUFDRTs7Ozs7Ozs7S0FRQztZQVJEOzs7Ozs7OztLQVFDO0VBQ0g7QUFDRjtBQU1BO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuLm5hdmJhciB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4vKlxuaGVhZGVlciB0b3BcbiovXG4udG9wYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCOEEzO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG9wYmFyIC5jb250YWluZXIgLnJvdyB7XG4gIG1hcmdpbjotN3B4O1xuICBwYWRkaW5nOjA7XG59XG5cbi50b3BiYXIgLmNvbnRhaW5lciAucm93IC5jb2wtbWQtMTIgeyBcbiAgcGFkZGluZzowO1xufVxuXG4udG9wYmFyIHB7XG4gIG1hcmdpbjowO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2YxZjZmZjtcbn1cblxuLnRvcGJhciBwID4gaXtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cbi50b3BiYXIgcDpsYXN0LWNoaWxke1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufSBcblxuaGVhZGVyIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50b3BiYXIgbGkudG9wYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBsaW5lLWhlaWdodDogNTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbn1cblxuLnRvcGJhciBsaS50b3BiYXI6aG92ZXIge1xuICAgIGNvbG9yOiNDMkI4QTM7XG59XG5cbi50b3BiYXIgdWwuaW5mbyBpIHtcbiAgICBjb2xvcjogIzEzMTMxMztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDRweDtcbn1cblxuLnRvcGJhciB1bC5pbmZvIGxpIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLnRvcGJhciB1bC5pbmZvIGkgc3BhbiB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG51bC5zb2NpYWwtbmV0d29yayB7XG4gIGJvcmRlcjpub25lO1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xufVxuXG51bC5zb2NpYWwtbmV0d29yayBsaSB7XG4gIGJvcmRlcjpub25lOyAgXG4gIG1hcmdpbjowO1xufVxuXG51bC5zb2NpYWwtbmV0d29yayBsaSBpIHtcbiAgbWFyZ2luOjA7XG59XG5cbnVsLnNvY2lhbC1uZXR3b3JrIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMyRDJEMkQ7XG4gICAgcGFkZGluZzogNXB4IDAgMDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbnVsLnNvY2lhbC1uZXR3b3JrIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggMCAxMHB4IC0yNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi53YXZlcy1lZmZlY3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbmEge1xuICBjb2xvcjogIzBhMGEwYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmJnLWltYWdlLWZ1bGwge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5iZy1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCkhaW1wb3J0YW50O1xufVxuXG4ubXgtYmFja2dyb3VuZC10b3AtbGluZWFyIHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMGRlZywgIzJDMkU0MyA0OCUsQmxhY2sgNDglKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMkMyRTQzIDQ4JSxCbGFjayA0OCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZyxCbGFjayA0OCUsIEJsYWNrIDQ4JSk7XG59XG5cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOjMwMHxPc3dhbGQpO1xuIC53b3JkQ2Fyb3VzZWwge1xuXHQgZm9udC1zaXplOiAzNnB4O1xuXHQgZm9udC13ZWlnaHQ6IDEwMDtcblx0IGNvbG9yOiAjZWVlO1xufVxuIC53b3JkQ2Fyb3VzZWwgZGl2IHtcblx0IG92ZXJmbG93OiBoaWRkZW47XG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCBmbG9hdDogcmlnaHQ7XG5cdCBoZWlnaHQ6IDY1cHg7XG5cdCBwYWRkaW5nLXRvcDogMTBweDtcblx0IG1hcmdpbi10b3A6IC0xMHB4O1xufVxuIC53b3JkQ2Fyb3VzZWwgZGl2IGxpIHtcblx0IGZvbnQtZmFtaWx5OiBTZXJpZjtcblx0IGNvbG9yOiAjZWVlO1xuXHQgZm9udC13ZWlnaHQ6IDcwMDtcblx0IHBhZGRpbmc6IDAgMTBweDtcblx0IGhlaWdodDogNDVweDtcblx0IG1hcmdpbi1ib3R0b206IDQ1cHg7XG5cdCBkaXNwbGF5OiBibG9jaztcbn1cbiAuZmxpcDIge1xuXHQgYW5pbWF0aW9uOiBmbGlwMiA2cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMS4yKSBpbmZpbml0ZTtcbn1cbiAuZmxpcDMge1xuXHQgYW5pbWF0aW9uOiBmbGlwMyA4cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMS4yKSBpbmZpbml0ZTtcbn1cbiAuZmxpcDQge1xuXHQgYW5pbWF0aW9uOiBmbGlwNCAxMHMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEuMikgaW5maW5pdGU7XG59XG4gQGtleWZyYW1lcyBmbGlwMiB7XG5cdCAwJSB7XG5cdFx0IG1hcmdpbi10b3A6IC0xODBweDtcblx0fVxuXHQgNSUge1xuXHRcdCBtYXJnaW4tdG9wOiAtOTBweDtcblx0fVxuXHQgNTAlIHtcblx0XHQgbWFyZ2luLXRvcDogLTkwcHg7XG5cdH1cblx0IDU1JSB7XG5cdFx0IG1hcmdpbi10b3A6IDBweDtcblx0fVxuXHQgOTkuOTklIHtcblx0XHQgbWFyZ2luLXRvcDogMHB4O1xuXHR9XG5cdCAxMDAlIHtcblx0XHQgbWFyZ2luLXRvcDogLTI3MHB4O1xuXHR9XG59XG4gQGtleWZyYW1lcyBmbGlwMyB7XG5cdCAwJSB7XG5cdFx0IG1hcmdpbi10b3A6IC0yNzBweDtcblx0fVxuXHQgNSUge1xuXHRcdCBtYXJnaW4tdG9wOiAtMTgwcHg7XG5cdH1cblx0IDMzJSB7XG5cdFx0IG1hcmdpbi10b3A6IC0xODBweDtcblx0fVxuXHQgMzglIHtcblx0XHQgbWFyZ2luLXRvcDogLTkwcHg7XG5cdH1cblx0IDY2JSB7XG5cdFx0IG1hcmdpbi10b3A6IC05MHB4O1xuXHR9XG5cdCA3MSUge1xuXHRcdCBtYXJnaW4tdG9wOiAwcHg7XG5cdH1cblx0IDk5Ljk5JSB7XG5cdFx0IG1hcmdpbi10b3A6IDBweDtcblx0fVxuXHQgMTAwJSB7XG5cdFx0IG1hcmdpbi10b3A6IC0yNzBweDtcblx0fVxufVxuIEBrZXlmcmFtZXMgZmxpcDQge1xuXHQgMCUge1xuXHRcdCBtYXJnaW4tdG9wOiAtMzYwcHg7XG5cdH1cblx0IDUlIHtcblx0XHQgbWFyZ2luLXRvcDogLTI3MHB4O1xuXHR9XG5cdCAyNSUge1xuXHRcdCBtYXJnaW4tdG9wOiAtMjcwcHg7XG5cdH1cblx0IDMwJSB7XG5cdFx0IG1hcmdpbi10b3A6IC0xODBweDtcblx0fVxuXHQgNTAlIHtcblx0XHQgbWFyZ2luLXRvcDogLTE4MHB4O1xuXHR9XG5cdCA1NSUge1xuXHRcdCBtYXJnaW4tdG9wOiAtOTBweDtcblx0fVxuXHQgNzUlIHtcblx0XHQgbWFyZ2luLXRvcDogLTkwcHg7XG5cdH1cblx0IDgwJSB7XG5cdFx0IG1hcmdpbi10b3A6IDBweDtcblx0fVxuXHQgOTkuOTklIHtcblx0XHQgbWFyZ2luLXRvcDogMHB4O1xuXHR9XG5cdCAxMDAlIHtcblx0XHQgbWFyZ2luLXRvcDogLTI3MHB4O1xuXHR9XG59XG4gYm9keSwgaHRtbCB7XG5cdCB3aWR0aDogMTAwJTtcblx0IGhlaWdodDogODB2aDtcblx0IG1hcmdpbjogMDtcblx0IHBhZGRpbmc6IDA7XG5cdCBvdmVyZmxvdzogaGlkZGVuO1xufVxuIGJvZHkge1xuXHQgZm9udC1mYW1pbHk6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBjdXJzaXZlO1xuXHQgZGlzcGxheTogZmxleDtcblx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0IGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG59XG4gYm9keTo6YWZ0ZXIge1xuXHQgY29udGVudDogXCJcIjtcblx0IGRpc3BsYXk6IGJsb2NrO1xuXHQgd2lkdGg6IDExMCU7XG5cdCBoZWlnaHQ6IDEyNXZoO1xuXHQgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCMyMjIsICMwMDApO1xuXHQgcG9zaXRpb246IGFic29sdXRlO1xuXHQgei1pbmRleDogLTE7XG5cdCB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG5cdCBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogIzIyMjIyYTtcbn1cbi54Ym94IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDglO1xuICBsZWZ0OiAxOSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MSUpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBjb2xvcjp3aGl0ZTtcbn1cbi54Ym94IC5pbnNpZGUge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDEwJSwgI2Q4ZjVmMyAxMDAlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5OTtcbn1cbi54Ym94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1jaGFyKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMTk5LCAyMzIsIDIzMyk7XG4gIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwJSAxMDAlLFxuICAgIDAlIDAlLFxuICAgIDEwMCUgMCUsXG4gICAgMTAwJSA1MCUsXG4gICAgNTAlIDUwJSxcbiAgICAxMDAlIDUwJSxcbiAgICAxMDAlIDEwMCVcbiAgKTtcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRpbmc7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC4xLCAwLjksIDAuODEpO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICBtaXgtYmxlbmQtbW9kZTogY29sb3I7XG59XG4ueGJveDphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1jaGFyKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMTEsIDIzNiwgMTg3KTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAlIDEwMCUsXG4gICAgMCUgMCUsXG4gICAgMTAwJSAwJSxcbiAgICAxMDAlIDUwJSxcbiAgICA1MCUgNTAlLFxuICAgIDEwMCUgNTAlLFxuICAgIDEwMCUgMTAwJVxuICApO1xuICBhbmltYXRpb24tbmFtZTogbG9hZGluZztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLjEsIDAuOSwgMC44MSk7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIG1peC1ibGVuZC1tb2RlOiBjb2xvcjtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDAlIDEwMCUsXG4gICAgICAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDUwJSA1MCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDEwMCUgMTAwJVxuICAgICk7XG4gIH1cbiAgMTIuNSUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDAlIDEwMCUsXG4gICAgICAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDUwJSA1MCUsXG4gICAgICAxMDAlIDEwMCUsXG4gICAgICAxMDAlIDEwMCVcbiAgICApO1xuICB9XG4gIDI1JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgMTAwJSxcbiAgICAgIDAlIDAlLFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgNTAlIDUwJSxcbiAgICAgIDUwJSAxMDAlLFxuICAgICAgNTAlIDEwMCVcbiAgICApO1xuICB9XG4gIDM3LjUlIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAwJSAxMDAlLFxuICAgICAgMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMCUgMTAwJSxcbiAgICAgIDAlIDEwMCVcbiAgICApO1xuICB9XG4gIDUwJSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgNTAlLFxuICAgICAgMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMCUgNTAlLFxuICAgICAgMCUgNTAlXG4gICAgKTtcbiAgfVxuICA2Mi41JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAwJSAwJSwgMTAwJSAwJSwgMTAwJSA1MCUsIDUwJSA1MCUsIDAlIDAlLCAwJSAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICA1MCUgMCUsXG4gICAgICA1MCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgNTAlIDAlLFxuICAgICAgNTAlIDAlXG4gICAgKTtcbiAgfVxuICA4Ny41JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgMCVcbiAgICApO1xuICB9XG4gIDEwMCUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgNTAlIDUwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgMTAwJSA1MCVcbiAgICApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmcyIHtcbiAgMCUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDAlIDEwMCUsXG4gICAgICAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDUwJSA1MCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDEwMCUgMTAwJVxuICAgICk7XG4gIH1cbiAgMTIuNSUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDAlIDEwMCUsXG4gICAgICAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDUwJSA1MCUsXG4gICAgICAxMDAlIDEwMCUsXG4gICAgICAxMDAlIDEwMCVcbiAgICApO1xuICB9XG4gIDI1JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgMTAwJSxcbiAgICAgIDAlIDAlLFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgNTAlIDUwJSxcbiAgICAgIDUwJSAxMDAlLFxuICAgICAgNTAlIDEwMCVcbiAgICApO1xuICB9XG4gIDM3LjUlIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAwJSAxMDAlLFxuICAgICAgMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMCUgMTAwJSxcbiAgICAgIDAlIDEwMCVcbiAgICApO1xuICB9XG4gIDUwJSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgNTAlLFxuICAgICAgMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMCUgNTAlLFxuICAgICAgMCUgNTAlXG4gICAgKTtcbiAgfVxuICA2Mi41JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAwJSAwJSwgMTAwJSAwJSwgMTAwJSA1MCUsIDUwJSA1MCUsIDAlIDAlLCAwJSAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICA1MCUgMCUsXG4gICAgICA1MCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgNTAlIDAlLFxuICAgICAgNTAlIDAlXG4gICAgKTtcbiAgfVxuICA4Ny41JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICA1MCUgNTAlLFxuICAgICAgMTAwJSAwJSxcbiAgICAgIDEwMCUgMCVcbiAgICApO1xuICB9XG4gIDEwMCUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgMTAwJSA1MCUsXG4gICAgICAxMDAlIDUwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgNTAlIDUwJSxcbiAgICAgIDEwMCUgNTAlLFxuICAgICAgMTAwJSA1MCVcbiAgICApO1xuICB9XG59XG5cblxuXG5cblxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDI1MiwgMjUyKTtcbn1cblxuXG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "U7dw":
/*!****************************************************!*\
  !*** ./src/app/facilities/facilities.component.ts ***!
  \****************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FacilitiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
FacilitiesComponent.ɵfac = function FacilitiesComponent_Factory(t) { return new (t || FacilitiesComponent)(); };
FacilitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitiesComponent, selectors: [["app-facilities"]], decls: 221, vars: 0, consts: [[1, "card-body"], [2, "color", "yellowgreen", "font-size", "30px"], [1, "card-deck"], [1, "card", "card-secondary"], ["height", "240", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUiyLahkLyjrkKTxz_2rm7jHWNKEvHf0D4w&usqp=CAU", "alt", "Card image cap", 1, "card-img-top"], [1, "card-title"], [1, "card-text"], [1, "card-footer", "text-right"], ["href", "#", 1, "btn", "btn-sm", "btn-link", "btn-icon-right"], ["height", "240", "src", "https://thumbs.dreamstime.com/b/sandblasting-chamber-worker-protective-uniform-makes-abrasive-sand-blast-cleaning-surface-metal-detail-161494840.jpg", "alt", "Card image cap", 1, "card-img-top"], ["height", "240", "src", "https://media.istockphoto.com/photos/powder-coating-process-of-metal-products-picture-id1299307574?k=6&m=1299307574&s=612x612&w=0&h=6r7WKnGciJCUsALs0wa4YcNeGow9xxvbJE-v32IDE-E=", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://media.istockphoto.com/photos/act-fast-concept-picture-id1166824107?k=6&m=1166824107&s=612x612&w=0&h=xyLZ0a0Etp9el0yAEe8SQ-p-tGgRmB9gNmnjRaw-omI=", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://thumbs.dreamstime.com/b/open-hours-neon-sign-wall-night-life-illuminated-glow-open-hours-neon-sign-wall-night-life-221585990.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "container"], [1, "awards-container"], [2, "color", "yellowgreen", "font-size", "20px"], [1, "card", "card-awards", "text-center"], [1, "card-img-top"], ["src", "https://static3.avast.com/10001215/web/i/awards-v12/white/awards-cnet.png", "alt", "Card image cap"], [1, "card-footer"], ["href", "#", 1, "btn", "btn-sm", "btn-link-light", "btn-icon-right"], ["src", "https://web-static.ff.int.avast.com/static3.avast.com/1/web/i/v2/components/arrow-s-right-orange.png", "height", "16"], ["src", "https://static3.avast.com/10001215/web/i/awards-v12/logo-pcmag-2.png", "alt", "Card image cap"], ["src", "https://static3.avast.com/10001215/web/i/awards-v12/white/awards-av-comparatives.png", "alt", "Card image cap"], ["src", "https://static3.avast.com/10001215/web/i/awards-v12/white/awards-softpedia.png", "alt", "Card image cap"], [1, "accordion-container"], [1, "accordion"], [1, "card", "card-accordion"], ["id", "headingOne", 1, "card-header"], ["href", "#collapseOne", "data-toggle", "collapse", 1, "icon-btn"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", "show"], ["data-toggle", "collapse", 1, "icon-btn"]], template: function FacilitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FACILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Our facilities extend to over 10,000 square feet of production space and 10,000 square feet of external yard storage. Our shot blasting facility is over 500 square feet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pre-treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We can apply a variety of pretreatments from simple etch primers to zinc rich systems to provide a clean and stable substrate which is corrosion resistant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Blast Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Shot blasting and subsequent application of zinc primers and topcoats provides an ultra durable finish for exterior environments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Powder Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Our powder spray booths and ovens can accommodate items up to 8 metres long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lead Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "A 24 hour turnaround facility is available. If you have an urgent requirement a same day service can be provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Colours Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Most colours are available from stock. We hold the most common RAL and BS colours ourselves, others are readily available from our suppliers. Special colours can be made to order in a few days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "24*7 available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Due to our long opening times including a night shift, efficient staff and systems we offer a 2/3 day turn round on most jobs and can even provide a 24hr service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Acheivements and Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "First choice in your region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Total Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "best qulaity award");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Official partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "LEARN MORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "FAQ's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "What is the diffrence between SSF Powder Coating and other Powder coaters ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " SSF Powder Coating has been in the custom powder coating industry since decades. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Although many large companies send their work to us to be powder coated, we still consider ourselves a custom facility, and not a high run production shop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "We carefully examine each and every piece by hand several times during the powder coating process. We provide services that other powder coating services either do not know how to provide, or will not provide. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " We pride ourselves on the difficult and often tedious masking and preparation situations we are presented with! If you would like a special transparent or candy color for your piece, it is not a problem! We also do not have a minimum piece order. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " We credit all of our customers (large and small) for the choices they make when choosing a powder coater. They know that by taking their parts to SSF Powder Coating, they will get their parts done correctly the first time, saving valuable time and aggravation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "What is the Powder Coating Process ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Powder Coating is the preferred finishing method by top manufacturers of metal products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "The process is to apply the powder coat electrostatically and then it is cured under heat to allow it to flow until it forms a skin-like coating over an object. The results provide a finish that is much tougher than a conventional paint coating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Customers are not limited with the colors of the finish. Bright colors, deep neutral colors and various color combinations can be used to create fading and blending to achieve the color you want to replicate your brand or create new styles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Powder coating is ideal for finishing multiple objects because you can get a uniform finish. Unlike paint, powder coating is preferred because there are no solvents used, and this means you will not have any color running or any streaks on your product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Types of Powder Coating ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "There are various types of powder coats offered to provide different protection and visual appeal to metal parts. Among these:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Aliphatic Urethanes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Epoxy Coating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Functional Coatings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Fusion-Bonded Epoxies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Hybrids ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " TGIC Polyesters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Urethanes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "What Can be Powder Coated ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Any objects made from metal (aluminum, steel, brass, copper, bronze, titanium, magnesium, etc.) can be powder coated. All of these metals, weather sand, die, investment casting, extruded, forged, and of course billet metals can be powder coated. Low density cast parts may require additional handling and possibly surface restoration by the experienced technicians at Andrews Powder Coating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Is Powder Coating better than liquid paint ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Powder coating is applied thicker than liquid paint (usually 3-4 mills compared to 1-2 mils) and powder coated surfaces are\nmore resistant to chipping, scratching, fading, and wearing than liquid paint and other finishes. Powder coating is more\nversatile than liquid paint, and can be used on springs without cracking the coating. You can\u2019t do that with paint! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "What kinds of finishes are availble with powder coating ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " With powder coating, color selection is virtually unlimited with high and low gloss, metallic, and clear finishes available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Colors stay bright and vibrant longer. Texture selections range from smooth surfaces to a wrinkled or matte finish, and\nrough textures designed for hiding surface imperfections are also available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border:0;\n}\n\n\n\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.15);\n  z-index: 100;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]{\n  color: #4e22d0;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{\n  width:264px;\n  height:264px;\n  margin: 80px auto 32px;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 32px;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #261c6a;\n  font-size: 26px;\n  line-height: 1.54;\n  font-weight: 900;\n  margin-bottom: 24px;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: #261c6a;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n}\n\n\n.card-group[_ngcontent-%COMP%]   .card-primary[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 48px 0 56px;\n  background: transparent;\n  border:0;\n}\n\n\n\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%] {\n  padding: 32px 32px 0;\n  margin: 16px;\n  border-radius: 0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.15);\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]{\n  color: #4e22d0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{\n  margin-bottom: 24px;\n  border-radius: 0px;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #261c6a;\n  font-size: 20px;\n  line-height: 1.6;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: #261c6a;\n  font-size: 14px;\n  line-height: 1.71;\n  font-weight: 400;\n  margin-bottom: 16px;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 9px 0 25px;\n  background: transparent;\n  border:0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-secondary[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n  margin-right: -24px;\n}\n\n\n\n\n\n.awards-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #0c053e 2%, #261c6a);\n  margin: 0 -100px;\n  padding: 30px;\n}\n\n\n.awards-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #b32525;\n  \n\n}\n\n\n.card-deck[_ngcontent-%COMP%]    > .card-awards[_ngcontent-%COMP%] {\n  padding: 32px 32px 0;\n  margin: 16px;\n  border-radius: 0;\n  background: transparent;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 40px 60px -20px rgba(8, 4, 43, 0.8);\n  background-color: #261c6a;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]:hover   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n  visibility: visible;\n}\n\n\n.card-deck[_ngcontent-%COMP%]    > .card-awards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]    > .card-awards[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{\n  margin-bottom: 24px;\n  border-radius: 0px;\n  height: 80px;\n  display: flex; justify-content: center;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n  margin-bottom: 3px;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 9px 0 13px;\n  border:0;\n}\n\n\n.card-deck[_ngcontent-%COMP%]   .card-awards[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n  color: #fff;\n  visibility: hidden;\n}\n\n\n\n\n\n.accordion-container[_ngcontent-%COMP%]{\n  margin: 50px 0;\n}\n\n\n.accordion[_ngcontent-%COMP%] {\n  margin: 24px 100px;\n  box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.15);\n  border: solid 1px #e9e8f3;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin:0;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-child {\n  border-bottom: solid 1px #e9e8f3;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){\n  border-bottom: solid 1px #e9e8f3;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1.6;\n  background-color: #fff;\n  border-radius: 0;\n  color: #261c6a;\n  padding: 36px 32px;\n  border-bottom-width: 0;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {\n  color: #4e22d0;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  z-index: 99999;\n  box-shadow: 0 20px 40px -20px rgba(12, 5, 62, 0.4);\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 60px);\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px;\n}\n\n\n.accordion[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  float: right;\n  width: 48px;\n  height: 48px;\n  padding: 0;\n  background: #fff url('https://web-static.ff.int.avast.com/static3.avast.com/1/web/i/v2/components/plus-s-plum.png') no-repeat 50% 50%;\n  box-shadow: 0 12px 15px -4px rgba(12, 5, 62, 0.12);\n  border: solid 1.2px #d4d2e6;\n  border-radius: 24px;\n  \n}\n\n\n.accordion[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: #4e22d0 url('https://web-static.ff.int.avast.com/static3.avast.com/1/web/i/v2/components/plus-s-white.png') no-repeat 50% 50%;\n  box-shadow: 0 12px 15px -4px rgba(78, 34, 208, 0.3), 0 12px 15px -4px rgba(12, 5, 62, 0.15);\n}\n\n\n.accordion[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:active {\n  background: #261c6a url('https://web-static.ff.int.avast.com/static3.avast.com/1/web/i/v2/components/plus-s-white.png') no-repeat 50% 50%;\n  box-shadow: 0 12px 15px -4px rgba(78, 34, 208, 0.3), 0 12px 15px -4px rgba(12, 5, 62, 0.15);\n}\n\n\n.accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 32px 40px;\n}\n\n\n\n\n\nmain[_ngcontent-%COMP%]{\n  padding:0 20px;\n  max-width:1361px;\n  margin:0 auto;\n}\n\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2lsaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7OztBQUdBLDJCQUEyQjs7O0FBQzNCO0VBQ0UsbURBQW1EO0VBQ25ELFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOzs7QUFHQSw0QkFBNEI7OztBQUU1QjtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLG1EQUFtRDtBQUNyRDs7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7OztBQUdBLGdCQUFnQjs7O0FBQ2hCO0VBQ0UsaUVBQWlFO0VBQ2pFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7OztBQUNBO0VBQ0UsY0FBYzs7O0FBR2hCOzs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxpREFBaUQ7RUFDakQseUJBQXlCO0FBQzNCOzs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFFLHVCQUF1QjtBQUN4Qzs7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7OztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7OztBQUVBLHVCQUF1Qjs7O0FBQ3ZCO0VBQ0UsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7OztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7OztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YscUlBQXFJO0VBQ3JJLGtEQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25COytCQUM2QjtBQUMvQjs7O0FBQ0E7RUFDRSx5SUFBeUk7RUFDekksMkZBQTJGO0FBQzdGOzs7QUFDQTtFQUNFLHlJQUF5STtFQUN6SSwyRkFBMkY7QUFDN0Y7OztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7QUFHQSxnQkFBZ0I7OztBQUNoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJmYWNpbGl0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkIHtcbiAgYm9yZGVyOjA7XG59XG5cblxuLyogY2FyZCBncm91cCBha2EgUFJJTUFSWSAqL1xuLmNhcmQtZ3JvdXAgLmNhcmQtcHJpbWFyeTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA2MHB4IC0yMHB4IHJnYmEoMTIsIDUsIDYyLCAwLjE1KTtcbiAgei1pbmRleDogMTAwO1xufVxuLmNhcmQtZ3JvdXAgLmNhcmQtcHJpbWFyeTpob3ZlciAuY2FyZC10aXRsZXtcbiAgY29sb3I6ICM0ZTIyZDA7XG59XG4uY2FyZC1ncm91cCAuY2FyZC1wcmltYXJ5IC5jYXJkLWltZy10b3B7XG4gIHdpZHRoOjI2NHB4O1xuICBoZWlnaHQ6MjY0cHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDMycHg7XG59XG4uY2FyZC1ncm91cCAuY2FyZC1wcmltYXJ5IC5jYXJkLWJvZHkgPiAuYmFkZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmNhcmQtZ3JvdXAgLmNhcmQtcHJpbWFyeSAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuLmNhcmQtZ3JvdXAgLmNhcmQtcHJpbWFyeSAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMjYxYzZhO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU0O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmNhcmQtZ3JvdXAgLmNhcmQtcHJpbWFyeSAuY2FyZC10ZXh0IHtcbiAgY29sb3I6ICMyNjFjNmE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jYXJkLWdyb3VwIC5jYXJkLXByaW1hcnkgLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogNDhweCAwIDU2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6MDtcbn1cblxuXG4vKiBjYXJkIGRlY2sgYWthIFNFQ09OREFSWSAqL1xuXG4uY2FyZC1kZWNrIC5jYXJkLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwO1xuICBtYXJnaW46IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2FyZC1kZWNrIC5jYXJkLXNlY29uZGFyeTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA2MHB4IC0yMHB4IHJnYmEoMTIsIDUsIDYyLCAwLjE1KTtcbn1cbi5jYXJkLWRlY2sgLmNhcmQtc2Vjb25kYXJ5OmhvdmVyIC5jYXJkLXRpdGxle1xuICBjb2xvcjogIzRlMjJkMDtcbn1cbi5jYXJkLWRlY2sgLmNhcmQtc2Vjb25kYXJ5IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtZGVjayAuY2FyZC1zZWNvbmRhcnkgLmNhcmQtaW1nLXRvcHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNhcmQtZGVjayAuY2FyZC1zZWNvbmRhcnkgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogIzI2MWM2YTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNhcmQtZGVjayAuY2FyZC1zZWNvbmRhcnkgLmNhcmQtdGV4dCB7XG4gIGNvbG9yOiAjMjYxYzZhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNhcmQtZGVjayAuY2FyZC1zZWNvbmRhcnkgLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogOXB4IDAgMjVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjowO1xufVxuLmNhcmQtZGVjayAuY2FyZC1zZWNvbmRhcnkgLmNhcmQtZm9vdGVyIC5idG57XG4gIG1hcmdpbi1yaWdodDogLTI0cHg7XG59XG5cblxuLyogY2FyZCBBV0FSRFMgKi9cbi5hd2FyZHMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBjMDUzZSAyJSwgIzI2MWM2YSk7XG4gIG1hcmdpbjogMCAtMTAwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uYXdhcmRzLWNvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiAjYjMyNTI1O1xuICBcblxufVxuLmNhcmQtZGVjayA+IC5jYXJkLWF3YXJkcyB7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwO1xuICBtYXJnaW46IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNhcmQtZGVjayAuY2FyZC1hd2FyZHM6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDQwcHggNjBweCAtMjBweCByZ2JhKDgsIDQsIDQzLCAwLjgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxYzZhO1xufVxuLmNhcmQtZGVjayAuY2FyZC1hd2FyZHM6aG92ZXIgLmNhcmQtZm9vdGVyIC5idG57XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jYXJkLWRlY2sgPiAuY2FyZC1hd2FyZHMgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZC1kZWNrID4gLmNhcmQtYXdhcmRzIC5jYXJkLWltZy10b3B7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkLWRlY2sgLmNhcmQtYXdhcmRzIC5jYXJkLWltZy10b3AgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcmQtZGVjayAuY2FyZC1hd2FyZHMgLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uY2FyZC1kZWNrIC5jYXJkLWF3YXJkcyAuY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiA5cHggMCAxM3B4O1xuICBib3JkZXI6MDtcbn1cbi5jYXJkLWRlY2sgLmNhcmQtYXdhcmRzIC5jYXJkLWZvb3RlciAuYnRue1xuICBjb2xvcjogI2ZmZjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBjYXJkcyBhcyBBQ0NPUkRJT04gKi9cbi5hY2NvcmRpb24tY29udGFpbmVye1xuICBtYXJnaW46IDUwcHggMDtcbn1cbi5hY2NvcmRpb24ge1xuICBtYXJnaW46IDI0cHggMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNDBweCA2MHB4IC0yMHB4IHJnYmEoMTIsIDUsIDYyLCAwLjE1KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2U5ZThmMztcbn1cbi5hY2NvcmRpb24gLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46MDtcbn1cblxuLmFjY29yZGlvbiAuY2FyZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTllOGYzO1xufVxuLmFjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKXtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlOWU4ZjM7XG59XG5cblxuLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjMjYxYzZhO1xuICBwYWRkaW5nOiAzNnB4IDMycHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4uYWNjb3JkaW9uIC5jYXJkLWhlYWRlcjpob3ZlciB7XG4gIGNvbG9yOiAjNGUyMmQwO1xufVxuLmFjY29yZGlvbiAuY2FyZDpob3ZlciB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCAtMjBweCByZ2JhKDEyLCA1LCA2MiwgMC40KTtcbn1cbi5hY2NvcmRpb24gLmNhcmQtaGVhZGVyIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uYWNjb3JkaW9uIC5jYXJkLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG4uYWNjb3JkaW9uIC5jYXJkLWhlYWRlciArIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAxcHg7XG59XG4uYWNjb3JkaW9uIC5pY29uLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJ2h0dHBzOi8vd2ViLXN0YXRpYy5mZi5pbnQuYXZhc3QuY29tL3N0YXRpYzMuYXZhc3QuY29tLzEvd2ViL2kvdjIvY29tcG9uZW50cy9wbHVzLXMtcGx1bS5wbmcnKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggLTRweCByZ2JhKDEyLCA1LCA2MiwgMC4xMik7XG4gIGJvcmRlcjogc29saWQgMS4ycHggI2Q0ZDJlNjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7ICovXG59XG4uYWNjb3JkaW9uIC5pY29uLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0ZTIyZDAgdXJsKCdodHRwczovL3dlYi1zdGF0aWMuZmYuaW50LmF2YXN0LmNvbS9zdGF0aWMzLmF2YXN0LmNvbS8xL3dlYi9pL3YyL2NvbXBvbmVudHMvcGx1cy1zLXdoaXRlLnBuZycpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAtNHB4IHJnYmEoNzgsIDM0LCAyMDgsIDAuMyksIDAgMTJweCAxNXB4IC00cHggcmdiYSgxMiwgNSwgNjIsIDAuMTUpO1xufVxuLmFjY29yZGlvbiAuaWNvbi1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI2MWM2YSB1cmwoJ2h0dHBzOi8vd2ViLXN0YXRpYy5mZi5pbnQuYXZhc3QuY29tL3N0YXRpYzMuYXZhc3QuY29tLzEvd2ViL2kvdjIvY29tcG9uZW50cy9wbHVzLXMtd2hpdGUucG5nJykgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IC00cHggcmdiYSg3OCwgMzQsIDIwOCwgMC4zKSwgMCAxMnB4IDE1cHggLTRweCByZ2JhKDEyLCA1LCA2MiwgMC4xNSk7XG59XG4uYWNjb3JkaW9uIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDMycHggNDBweDtcbn1cblxuXG4vKiBQQUdFIExBWU9VVCAqL1xubWFpbntcbiAgcGFkZGluZzowIDIwcHg7XG4gIG1heC13aWR0aDoxMzYxcHg7XG4gIG1hcmdpbjowIGF1dG87XG59XG5oMiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facilities/facilities.component */ "U7dw");
/* harmony import */ var _specialities_specialities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specialities/specialities.component */ "q/hx");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request/request.component */ "5YdD");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                { path: 'facilities', component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_4__["FacilitiesComponent"] },
                { path: 'divisions', component: _specialities_specialities_component__WEBPACK_IMPORTED_MODULE_5__["SpecialitiesComponent"] },
                { path: 'request', component: _request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
                { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"] },
                { path: 'contactUs', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_4__["FacilitiesComponent"],
        _specialities_specialities_component__WEBPACK_IMPORTED_MODULE_5__["SpecialitiesComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 49, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "py-3", "navbar-dark", "bg-dark", "shadow-sm"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png", "width", "45", "alt", "", 1, "d-inline-block", "align-middle", "mr-2"], [1, "text-uppercase", "font-weight-bold"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "py-5"], [1, "container", "py-5"], [1, "pl-3"], [1, "mb-3"], [1, "text-muted", "mt-5"], ["href", "https://bootstrapious.com/snippets", 1, "text-reset"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ol", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add your logo image inside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "a.navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "You can set the logo width and height by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "width=\"\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "height=\"\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " attributes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add one of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".align-top .align-middle .align-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " classes to vertically adapt adjacent text with the image.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Snippet by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Bootstrapious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n    background: linear-gradient(70deg, #e6e6e6, #f7f7f7);\n    color: #514B64;\n    min-height: 100vh;\n  }\n  \n  code[_ngcontent-%COMP%] {\n    background: #fff;\n    padding: 0.2rem;\n    border-radius: 0.2rem;\n    margin: 0 0.3rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3MGRlZywgI2U2ZTZlNiwgI2Y3ZjdmNyk7XG4gICAgY29sb3I6ICM1MTRCNjQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIGNvZGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICBtYXJnaW46IDAgMC4zcmVtO1xuICB9Il19 */"] });


/***/ }),

/***/ "q/hx":
/*!********************************************************!*\
  !*** ./src/app/specialities/specialities.component.ts ***!
  \********************************************************/
/*! exports provided: SpecialitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialitiesComponent", function() { return SpecialitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpecialitiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpecialitiesComponent.ɵfac = function SpecialitiesComponent_Factory(t) { return new (t || SpecialitiesComponent)(); };
SpecialitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialitiesComponent, selectors: [["app-specialities"]], decls: 99, vars: 0, consts: [[1, "card-body", 2, "font-size", "150%"], ["id", "cards"], ["id", "card_1", 1, "card"], [1, "card__content"], ["href", "https://www.ssf-group.co.uk/ssf-construction.html", 1, "btn", "btn--accent"], ["src", "https://media.istockphoto.com/photos/aerial-top-down-shot-of-a-house-frame-on-a-construction-site-by-mud-picture-id1149532577?k=6&m=1149532577&s=612x612&w=0&h=XBNI-LkkS4SjTswnul2EK15dsqHxXC4MgtMnmQga4Fs=", "alt", "Image description"], ["id", "card_2", 1, "card"], ["href", "https://www.ssf-group.co.uk/steel-security-fabrications.html", 1, "btn", "btn--accent"], ["src", "https://media.istockphoto.com/photos/welder-works-in-metal-construction-construction-and-processing-of-picture-id1185871218?k=6&m=1185871218&s=612x612&w=0&h=mPbkF02k4VyapKM9_8HRRz6fw4lgx8CUDq4PWvYn7KI=", "alt", "Image description"], ["id", "card_3", 1, "card"], ["href", "https://www.ssf-group.co.uk/shutters-shop-fronts.html", 1, "btn", "btn--accent"], ["src", "https://media.gettyimages.com/photos/closed-shutter-of-store-picture-id1083818828?k=6&m=1083818828&s=612x612&w=0&h=yd6MKqv-nGF4TSGBKhG2iddcvfkShSVYfCOOgVKpid8=", "alt", "Image description"], ["id", "card_4", 1, "card"], ["href", "#top", 1, "btn", "btn--accent"], ["src", "https://media.istockphoto.com/photos/powder-coating-process-of-metal-products-picture-id1299305821?k=6&m=1299305821&s=612x612&w=0&h=yCLRNQmn33NMh2cDxajGauSzEbsZZ3Q8g_khJ3rxG8o=", "alt", "Image description"], [1, "padded"], [1, "page__group"], [1, "news", "arabic"], [1, "news__header"], ["datetime", "2019-05-31", 1, "news__date"], [1, "news__day"], [1, "news__year"], [1, "r-title", "news__title"], ["href", ""], [1, "padded", 2, "font-size", "20px"], [1, "page__section"], ["href", "#0", 1, "r-link", "animated-underline", "animated-underline_type4", "news__link"]], template: function SpecialitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The SSF Group consist of four Divisions allowing us to offer the best and most comprehensive steelwork, construction, powder coating and shutter & shop front services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SSF Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SSF Construction is a part of the SSF Group providing the best building work solutions in all parts of construction projects. All of our construction work is completed to the highest standard and our relationships with our clients are the key to our success. We aim to provide expert metal working knowledge and steel manufacturing services across a wide variety of sectors and different locations, to deliver your best construction expectations on time and on a budget..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SSF Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Steel And Aluminium Fabrications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "All metal fabrications are made in our modern workshop by qualified experts who have years of experience in steelwork manufacturing. We use stainless steel, mild steel or galvanised. Using the latest technologies in our steel workshop it allows us to handle most sized projects ranging from small projects such as steel staircases or metal gates to big commercial portal frames and mezzanine floors. The amount of products we manufacture depends solely on customer needs, we can manufacture bespoke one-off projects such as decorative iron railings to repetitive batch work such as iron gates, universal beams or steel security fencing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Steel And Aluminium Fabrications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Shutters & Shop Fronts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "One of our divisions here at SSF Group, Shutter and Shop fronts provides a complete nationwide service. We design, manufacture and install which results is a full top to bottom service. We offer a range of services and designs within this department, and we provide all the variants of shutter and shop front that you need, whether it be internal or external, solid or punched designs and protection systems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Shutters & Shop Fronts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Powder Coating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " We understand the importance of investment in quality and genuine commitment is essential. All of our powder coating works are done by well-trained powder coaters at our premises in accordance with our strict quality standards. The powder coating is better than regular liquid based painting because it can produce thicker layer, is cost efficient and also it is less hazardous than regular painting services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Services we offer for Construction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " We offer services ranging from small steel frames to large structural fabrications. All other projects including metal steel security gates ,fencing, spiral or straight metal staircases and fire escapes (internal and external) and portal building frames are undertaken by our professionals to high standards of construction services. SSF group provide the bespoke full range construction service, including groundworks \u2013 underground drainage installation and concrete foundation, concrete car parks or service yards, new design and build of any building, refurbishment or extension for any premises either commercial, industrial or private.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " New builds and refurbs (commercial/residential) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "article", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "header", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "time", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "June 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " SSF Construction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "We offer services ranging from small steel frames to large structural fabrications. All other projects including metal steel security gates , fencing, spiral or straight metal staircases and fire escapes (internal and external) and portal building frames are undertaken by our professionals to high standards of construction services. SSF group provide the bespoke full range construction service, including groundworks \u2013 underground drainage installation and concrete foundation, concrete car parks or service yards, new design and build of any building, refurbishment or extension for any premises either commercial, industrial or private. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "article", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "header", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "time", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "June 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Do you need an ICON ONLY button without screwing up the accessibility? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " All construction works start with the site survey and planning accordingly to customer's needs and to ensure the process is going smoothly as planned, therefore, we offer a Main, or also known as, General Contractor service. Our experts provide the service of health and safety risk assessment, quantity surveying, CSCS compliant and design and management (CDM) Co-ordinator. To assure that the building meets all safety requirements and engineering standards our steel structure engineer is responsible for taking care of structural engineering needs. With the service our experts who have many years of experience in the construction works the process of building is bound to succeed. All construction works start with the site survey and planning accordingly to customer's needs and to ensure the process is going smoothly as planned, therefore, we offer a Main, or also known as, General Contractor service. Our experts provide the service of health and safety risk assessment, quantity surveying, CSCS compliant and design and management (CDM) Co-ordinator. To assure that the building meets all safety requirements and engineering standards our steel structure engineer is responsible for taking care of structural engineering needs. With the service our experts who have many years of experience in the construction works the process of building is bound to succeed. All construction works start with the site survey and planning accordingly to customer's needs and to ensure the process is going smoothly as planned, therefore, we offer a Main, or also known as, General Contractor service. Our experts provide the service of health and safety risk assessment, quantity surveying, CSCS compliant and design and management (CDM) Co-ordinator. To assure that the building meets all safety requirements and engineering standards our steel structure engineer is responsible for taking care of structural engineering needs. With the service our experts who have many years of experience in the construction works the process of building is bound to succeed. All construction works start with the site survey and planning accordingly to customer's needs and to ensure the process is going smoothly as planned, therefore, we offer a Main, or also known as, General Contractor service. Our experts provide the service of health and safety risk assessment, quantity surveying, CSCS compliant and design and management (CDM) Co-ordinator. To assure that the building meets all safety requirements and engineering standards our steel structure engineer is responsible for taking care of structural engineering needs. With the service our experts who have many years of experience in the construction works the process of building is bound to succeed. The first consideration is: do you really? If you can, having text next to your icons is proven over and over again to be the most accessible and clearest UX (see Apple's latest blunder). But if you need to (and I get it, sometimes you need to), Sara Soueidan and Scott O'Hara have a pair of articles that nicely lay out all the options and present actual research on this topic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_ngcontent-%COMP%]:root {\n    --card-height: 40vw;\n    --card-margin: 4vw;\n    --card-top-offset: 1em;\n    --numcards: 4;\n    --outline-width: 0px;\n  }\n  \n  #cards[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--numcards) * var(--card-top-offset)); \n    margin-bottom: var(--card-margin); \n  }\n  \n  #card_1[_ngcontent-%COMP%] {\n    --index: 1;\n  }\n  \n  #card_2[_ngcontent-%COMP%] {\n    --index: 2;\n  }\n  \n  #card_3[_ngcontent-%COMP%] {\n    --index: 3;\n  }\n  \n  #card_4[_ngcontent-%COMP%] {\n    --index: 4;\n  }\n  \n  .card[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    padding-top: calc(var(--index) * var(--card-top-offset));\n  }\n  \n  @supports (animation-timeline: works) {\n  \n    @scroll-timeline cards-element-scrolls-in-body {\n      source: selector(body);\n      scroll-offsets:\n        \n        selector(#cards) start 1,\n        \n        selector(#cards) start 0\n      ;\n      start: selector(#cards) start 1; \n      end: selector(#cards) start 0; \n      time-range: 4s;\n    }\n  \n    .card[_ngcontent-%COMP%] {\n      --index0: calc(var(--index) - 1); \n      --reverse-index: calc(var(--numcards) - var(--index0)); \n      --reverse-index0: calc(var(--reverse-index) - 1); \n    }\n    \n    .card__content[_ngcontent-%COMP%] {\n      transform-origin: 50% 0%;\n      will-change: transform;\n  \n      --duration: calc(var(--reverse-index0) * 1s);\n      --delay: calc(var(--index0) * 1s);\n  \n      animation: var(--duration) linear scale var(--delay) forwards;\n      animation-timeline: cards-element-scrolls-in-body;\n    }\n  \n    @keyframes scale {\n      to {\n        transform:\n          scale(calc(\n            1.1\n            -\n            calc(0.1 * var(--reverse-index))\n          ));\n      }\n    }\n  }\n  \n  \n  \n  #debug[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 1em;\n    left: 1em;\n  }\n  \n  #debug[_ngcontent-%COMP%]::after {\n    content: \" Show Debug\";\n    margin-left: 1.5em;\n    color: white;\n    white-space: nowrap;\n  }\n  \n  #debug[_ngcontent-%COMP%]:checked    ~ main[_ngcontent-%COMP%] {\n    --outline-width: 1px;\n  }\n  \n  \n  \n  *[_ngcontent-%COMP%] { \n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    background: rgb(58 29 43);\n    color: rgb(255, 255, 255);\n    text-align: center;\n  \n    font-size: calc(1em + 0.5vw);\n  }\n  \n  header[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n    width: 80vw;\n    margin: 0 auto;\n  }\n  \n  header[_ngcontent-%COMP%] {\n    height: 100vh;\n    display: grid;\n    place-items: center;\n  }\n  \n  #cards[_ngcontent-%COMP%] {\n    list-style: none;\n    outline: calc(var(--outline-width) * 10) solid blue;\n    \n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(var(--numcards), var(--card-height));\n    gap: var(--card-margin);\n  }\n  \n  .card[_ngcontent-%COMP%] {\n    outline: var(--outline-width) solid hotpink;\n  }\n  \n  .card__content[_ngcontent-%COMP%] {\n    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);\n    background: rgb(255, 255, 255);\n    color: rgb(10, 5, 7);\n    border-radius: 1em;\n    overflow: hidden;\n  \n    display: grid;\n    grid-template-areas: \"text img\";\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n  \n    align-items: stretch;\n    outline: var(--outline-width) solid lime;\n  }\n  \n  .card__content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-area: text;\n    width: 80%;\n    place-self: center;\n    text-align: left;\n  \n    display: grid;\n    gap: 1em;\n    place-items: start;\n  }\n  \n  .card__content[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%] {\n    grid-area: img;\n    overflow: hidden;\n  }\n  \n  .card__content[_ngcontent-%COMP%]    > figure[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  h1[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 3.5em;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 2.5em;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n    font-weight: 300;\n    line-height: 1.42;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    background: rgb(188 87 36);\n    color: rgb(255 255 255);\n    text-decoration: none;\n    display: inline-block;\n    padding: 0.5em;\n    border-radius: 0.25em;\n  }\n  \n  aside[_ngcontent-%COMP%] {\n    width: 50vw;\n    margin: 0 auto;\n    text-align: left;\n  }\n  \n  aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n  \n  p.padded[_ngcontent-%COMP%] {\n    padding:.5em .5em .1em 2em;\n  }\n  \n  \n  \n  \n  \n  .r-link[_ngcontent-%COMP%]{\n\t--uirLinkDisplay: var(--rLinkDisplay, inline-block);\n\t--uirLinkTextColor: var(--rLinkTextColor);\n\t--uirLinkTextDecoration: var(--rLinkTextDecoration, none);\n\n\tdisplay: var(--uirLinkDisplay) !important;\n\tcolor: var(--uirLinkTextColor) !important;\n\t-webkit-text-decoration: var(--uirLinkTextDecoration) !important;\n\t        text-decoration: var(--uirLinkTextDecoration) !important;\n}\n  \n  \n  \n  .r-title[_ngcontent-%COMP%]{\n\t--uirTitleMarginTop: var(--rTitleMarginTop, 0);\n\t--uirTitleMarginBottom: var(--rTitleMarginBottom, 0);\n\n\tmargin-top: var(--uirTitleMarginTop) !important;\n\tmargin-bottom: var(--uirTitleMarginBottom) !important;\n}\n  \n  \n  \n  .animated-underline[_ngcontent-%COMP%]{\n\t--uiAnimatedUnderlineWidth: var(--animatedUnderlineWidth, 100%);\n\t--uiAnimatedUnderlineHeight: var(--animatedUnderlineHeight, 2px);\n\t--uiAnimatedUnderlineBgColor: var(--animatedUnderlineBgColor, currentColor);\n\t--uiAnimatedUnderlinePositionX: var(--animatedUnderlinePositionX, left);\n\t--uiAnimatedUnderlinePositionY: var(--animatedUnderlinePositionY, bottom);\n\n\t\n\n\t--rLinkDisplay: inline; \n\n\tbackground-image: linear-gradient(0, var(--uiAnimatedUnderlineBgColor) 0, var(--uiAnimatedUnderlineBgColor));\n\tbackground-size: var(--uiAnimatedUnderlineWidth) var(--uiAnimatedUnderlineHeight);\n\tbackground-position: var(--uiAnimatedUnderlinePositionX) var(--uiAnimatedUnderlinePositionY);\n\tbackground-repeat: no-repeat;\n\t\n\t-webkit-box-decoration-break: clone; \n\tbox-decoration-break: clone; \n\t\n\twill-change: background-size;\n\ttransition: background-size .25s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n  \n  \n  \n  [_ngcontent-%COMP%]:root{\n\t--animatedUnderlineHeight: 1rem;\n\t--animatedUnderlineBgColor: var(--accentColor);\n}\n  \n  .animated-underline_type1[_ngcontent-%COMP%]{\n\t--animatedUnderlineWidth: 100%;\n}\n  \n  .animated-underline_type1[_ngcontent-%COMP%]:hover{\n\t--animatedUnderlineHeight: 100%;\n}\n  \n  .animated-underline_type2[_ngcontent-%COMP%]{\n\t--animatedUnderlineWidth: 100%;\n}\n  \n  .animated-underline_type2[_ngcontent-%COMP%]:hover{\n\t--animatedUnderlineWidth: 0;\n}\n  \n  .animated-underline_type3[_ngcontent-%COMP%]{\n\t--animatedUnderlineHeight: 0;\n}\n  \n  .animated-underline_type3[_ngcontent-%COMP%]:hover{\n\t--animatedUnderlineHeight: 100%;\n}\n  \n  .animated-underline_type4[_ngcontent-%COMP%]{\n\t--animatedUnderlineWidth: 0;\n}\n  \n  .animated-underline_type4[_ngcontent-%COMP%]:hover{\n\t--animatedUnderlineWidth: 100%;\n}\n  \n  .animated-underline_type5[_ngcontent-%COMP%]{\n\t--animatedUnderlineWidth: 100%;\n\t--animatedUnderlineHeight: 5px;\n\t--animatedUnderlinePositionY: 90%;\n}\n  \n  .animated-underline_type5[_ngcontent-%COMP%]:hover{\n\t--animatedUnderlineHeight: 1rem;\n}\n  \n  \n  \n  [_ngcontent-%COMP%]:root{\n\t--mainColor: #673AB7;\n\t--accentColor: #ff7eb2;\n\t--accentColorDark: #f15493;\n\t--blackColor: #222;\n\t--whiteColor: #fff;\n\t--rLinkTextColor: var(--blackColor);\n}\n  \n  body[_ngcontent-%COMP%]{\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;\n\tcolor: var(--blackColor);\n\tbackground-color: #f0f0f0;\n}\n  \n  .page[_ngcontent-%COMP%]{\n\tmax-width: 1300px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n  \n  .page__name-effect[_ngcontent-%COMP%]{\n\tdisplay: inline-flex;\n\talign-items: center;\n\tfont-weight: 700;\n\tfont-size: .875rem;\n}\n  \n  .page__name-effect[_ngcontent-%COMP%]::before{\n\tcontent: \"\";\n\twidth: 3.75rem;\n\theight: 2px;\n\tbackground-color: var(--mainColor);\n\tmargin-top: .25rem;\n\tmargin-right: .625rem;\n}\n  \n  .page__section[_ngcontent-%COMP%]:nth-child(n+2){\n\tmargin-top: 5rem;\n}\n  \n  .page__group[_ngcontent-%COMP%]{\n\tmargin-top: 2rem;\n}\n  \n  .news[_ngcontent-%COMP%]{\n\tposition: relative;\n\n\tpadding: 70px 6%;\n\tborder-top: 6px solid var(--mainColor);\n\tborder-radius: 4px;\n\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);\n\tbackground-color: var(--whiteColor);\n}\n  \n  .news[_ngcontent-%COMP%]:nth-child(n+2){\n\tmargin-top: 3rem;\n}\n  \n  .news__date[_ngcontent-%COMP%]{\n\tfont-size: 0.9375rem;\n\tfont-weight: 700;\n}\n  \n  .news__title[_ngcontent-%COMP%]{\n\tfont-family: 'Amaranth', sans-serif;\n\tline-height: 1.25;\n}\n  \n  .news__link[_ngcontent-%COMP%]::after{\n\tcontent: \"\";\n\twidth: 100%;\n\theight: 100%;\n\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n  \n  .news__content[_ngcontent-%COMP%]{\n\tmargin-top: .875rem;\n}\n  \n  p[_ngcontent-%COMP%]{\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\tline-height: 1.78;\n}\n  \n  @media (max-width: 640px){\n\n\thtml[_ngcontent-%COMP%]{\n\t\tfont-size: 93.75%;\n\t}\n}\n  \n  @media (min-width: 641px) and (max-width: 768px){\n\n\thtml[_ngcontent-%COMP%]{\n\t\tfont-size: 100%;\n\t}\n}\n  \n  @media (min-width: 769px) and (max-width: 960px){\n\n\thtml[_ngcontent-%COMP%]{\n\t\tfont-size: 106.25%;\n\t}\n}\n  \n  @media (min-width: 961px){\n\n\thtml[_ngcontent-%COMP%]{\n\t\tfont-size: 112.5%;\n\t}\n}\n  \n  @media (max-width: 960px){\n\n\t.page[_ngcontent-%COMP%]{\n\t\tpadding-top: 50px;\n\t\tpadding-bottom: 50px;\n\t}\n\n\t.page__name-effect[_ngcontent-%COMP%]{\n\t\tpadding-left: .625rem;\n\t\tpadding-right: .625rem;\n\t}\n\n\t.news__title[_ngcontent-%COMP%]{\n\t\t--rTitleMarginTop: .75rem;\n\t\tfont-size: 1.75rem;\n\t}\n}\n  \n  @media (min-width: 961px){\n\n\t.page[_ngcontent-%COMP%]{\n\t\tpadding: 80px 50px;\n\t}\n\n\t.news__header[_ngcontent-%COMP%]{\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\n\t\tpadding-left: 1.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\n\t.news__date[_ngcontent-%COMP%]{\n\t\tflex-shrink: 0;\n\t\tfont-family: 'Amaranth', sans-serif;\n\n\t\tmargin-right: 40px;\n\t\ttext-align: center;\n\t}\n\n\t.news__day[_ngcontent-%COMP%]{\n\t\tline-height: 1;\n\t\tdisplay: block;\n\t\tfont-size: 4.333rem;\n\t\tcolor: var(--accentColorDark);\n\t}\n\n\t.news__year[_ngcontent-%COMP%]{\n\t\tdisplay: block;\n\t\tfont-size: 1rem;\n\t\tmargin-top: 5px;\n\t}\n\n\t.news__title[_ngcontent-%COMP%]{\n\t\tfont-size: 2.5rem;\n\t}\t\n}\n  \n  @media (min-width: 1301px){\n\n\t.page__group[_ngcontent-%COMP%]{\n\t\tpadding-left: 190px;\n\t\tpadding-right: 100px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWxpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0dBRUc7SUFDQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsOERBQThELEVBQUUsOERBQThEO0lBQzlILGlDQUFpQyxFQUFFLHVGQUF1RjtFQUM1SDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sd0RBQXdEO0VBQzFEOztFQUVBOztJQUVFO01BQ0Usc0JBQXNCO01BQ3RCOzs7OztNQUtBO01BQ0EsK0JBQStCLEVBQUUsZ0VBQWdFO01BQ2pHLDZCQUE2QixFQUFFLGdFQUFnRTtNQUMvRixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsZ0NBQWdDLEVBQUUsa0JBQWtCO01BQ3BELHNEQUFzRCxFQUFFLGtCQUFrQjtNQUMxRSxnREFBZ0QsRUFBRSwwQkFBMEI7SUFDOUU7O0lBRUE7TUFDRSx3QkFBd0I7TUFDeEIsc0JBQXNCOztNQUV0Qiw0Q0FBNEM7TUFDNUMsaUNBQWlDOztNQUVqQyw2REFBNkQ7TUFDN0QsaURBQWlEO0lBQ25EOztJQUVBO01BQ0U7UUFDRTs7Ozs7WUFLSTtNQUNOO0lBQ0Y7RUFDRjs7RUFFQSxZQUFZOztFQUVaO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBR0EsbUJBQW1COztFQUVuQixJQUFJLHFCQUFxQjtJQUN2QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFB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RUFDcEIscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsY0FBYztFQUNkLG1DQUFtQzs7RUFFbkMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtDQUM5Qjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtBQUNEOztFQUVBOztDQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEIiwiZmlsZSI6InNwZWNpYWxpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgIDpyb290IHtcbiAgICAtLWNhcmQtaGVpZ2h0OiA0MHZ3O1xuICAgIC0tY2FyZC1tYXJnaW46IDR2dztcbiAgICAtLWNhcmQtdG9wLW9mZnNldDogMWVtO1xuICAgIC0tbnVtY2FyZHM6IDQ7XG4gICAgLS1vdXRsaW5lLXdpZHRoOiAwcHg7XG4gIH1cbiAgXG4gICNjYXJkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbnVtY2FyZHMpICogdmFyKC0tY2FyZC10b3Atb2Zmc2V0KSk7IC8qIE1ha2UgcGxhY2UgYXQgYm90dG9tLCBhcyBpdGVtcyB3aWxsIHNsaWRlIHRvIHRoYXQgcG9zaXRpb24qL1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWNhcmQtbWFyZ2luKTsgLyogRG9uJ3QgaW5jbHVkZSB0aGUgLS1jYXJkLW1hcmdpbiBpbiBwYWRkaW5nLCBhcyB0aGF0IHdpbGwgYWZmZWN0IHRoZSBzY3JvbGwtdGltZWxpbmUqL1xuICB9XG4gIFxuICAjY2FyZF8xIHtcbiAgICAtLWluZGV4OiAxO1xuICB9XG4gIFxuICAjY2FyZF8yIHtcbiAgICAtLWluZGV4OiAyO1xuICB9XG4gIFxuICAjY2FyZF8zIHtcbiAgICAtLWluZGV4OiAzO1xuICB9XG4gIFxuICAjY2FyZF80IHtcbiAgICAtLWluZGV4OiA0O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5kZXgpICogdmFyKC0tY2FyZC10b3Atb2Zmc2V0KSk7XG4gIH1cbiAgXG4gIEBzdXBwb3J0cyAoYW5pbWF0aW9uLXRpbWVsaW5lOiB3b3Jrcykge1xuICBcbiAgICBAc2Nyb2xsLXRpbWVsaW5lIGNhcmRzLWVsZW1lbnQtc2Nyb2xscy1pbi1ib2R5IHtcbiAgICAgIHNvdXJjZTogc2VsZWN0b3IoYm9keSk7XG4gICAgICBzY3JvbGwtb2Zmc2V0czpcbiAgICAgICAgLyogU3RhcnQgd2hlbiB0aGUgc3RhcnQgZWRnZSB0b3VjaGVzIHRoZSB0b3Agb2YgdGhlIHNjcm9sbHBvcnQgKi9cbiAgICAgICAgc2VsZWN0b3IoI2NhcmRzKSBzdGFydCAxLFxuICAgICAgICAvKiBFbmQgd2hlbiB0aGUgc3RhcnQgZWRnZSB0b3VjaGVzIHRoZSBzdGFydCBvZiB0aGUgc2Nyb2xscG9ydCAqL1xuICAgICAgICBzZWxlY3RvcigjY2FyZHMpIHN0YXJ0IDBcbiAgICAgIDtcbiAgICAgIHN0YXJ0OiBzZWxlY3RvcigjY2FyZHMpIHN0YXJ0IDE7IC8qIFN0YXJ0IHdoZW4gdGhlIHN0YXJ0IGVkZ2UgdG91Y2hlcyB0aGUgdG9wIG9mIHRoZSBzY3JvbGxwb3J0ICovXG4gICAgICBlbmQ6IHNlbGVjdG9yKCNjYXJkcykgc3RhcnQgMDsgLyogRW5kIHdoZW4gdGhlIHN0YXJ0IGVkZ2UgdG91Y2hlcyB0aGUgc3RhcnQgb2YgdGhlIHNjcm9sbHBvcnQgKi9cbiAgICAgIHRpbWUtcmFuZ2U6IDRzO1xuICAgIH1cbiAgXG4gICAgLmNhcmQge1xuICAgICAgLS1pbmRleDA6IGNhbGModmFyKC0taW5kZXgpIC0gMSk7IC8qIDAtYmFzZWQgaW5kZXggKi9cbiAgICAgIC0tcmV2ZXJzZS1pbmRleDogY2FsYyh2YXIoLS1udW1jYXJkcykgLSB2YXIoLS1pbmRleDApKTsgLyogcmV2ZXJzZSBpbmRleCAqL1xuICAgICAgLS1yZXZlcnNlLWluZGV4MDogY2FsYyh2YXIoLS1yZXZlcnNlLWluZGV4KSAtIDEpOyAvKiAwLWJhc2VkIHJldmVyc2UgaW5kZXggKi9cbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX2NvbnRlbnQge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgXG4gICAgICAtLWR1cmF0aW9uOiBjYWxjKHZhcigtLXJldmVyc2UtaW5kZXgwKSAqIDFzKTtcbiAgICAgIC0tZGVsYXk6IGNhbGModmFyKC0taW5kZXgwKSAqIDFzKTtcbiAgXG4gICAgICBhbmltYXRpb246IHZhcigtLWR1cmF0aW9uKSBsaW5lYXIgc2NhbGUgdmFyKC0tZGVsYXkpIGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uLXRpbWVsaW5lOiBjYXJkcy1lbGVtZW50LXNjcm9sbHMtaW4tYm9keTtcbiAgICB9XG4gIFxuICAgIEBrZXlmcmFtZXMgc2NhbGUge1xuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgc2NhbGUoY2FsYyhcbiAgICAgICAgICAgIDEuMVxuICAgICAgICAgICAgLVxuICAgICAgICAgICAgY2FsYygwLjEgKiB2YXIoLS1yZXZlcnNlLWluZGV4KSlcbiAgICAgICAgICApKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qKiBERUJVRyAqKi9cbiAgXG4gICNkZWJ1ZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDFlbTtcbiAgfVxuICAjZGVidWc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBTaG93IERlYnVnXCI7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICAjZGVidWc6Y2hlY2tlZCB+IG1haW4ge1xuICAgIC0tb3V0bGluZS13aWR0aDogMXB4O1xuICB9XG4gIFxuICBcbiAgLyoqIFBBR0UgU1RZTElORyAqKi9cbiAgXG4gICogeyAvKiBQb29yIE1hbidzIFJlc2V0ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDU4IDI5IDQzKTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgZm9udC1zaXplOiBjYWxjKDFlbSArIDAuNXZ3KTtcbiAgfVxuICBcbiAgaGVhZGVyLFxuICBtYWluIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgI2NhcmRzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG91dGxpbmU6IGNhbGModmFyKC0tb3V0bGluZS13aWR0aCkgKiAxMCkgc29saWQgYmx1ZTtcbiAgICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLW51bWNhcmRzKSwgdmFyKC0tY2FyZC1oZWlnaHQpKTtcbiAgICBnYXA6IHZhcigtLWNhcmQtbWFyZ2luKTtcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIG91dGxpbmU6IHZhcigtLW91dGxpbmUtd2lkdGgpIHNvbGlkIGhvdHBpbms7XG4gIH1cbiAgXG4gIC5jYXJkX19jb250ZW50IHtcbiAgICBib3gtc2hhZG93OiAwIDAuMmVtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMWVtIDJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGNvbG9yOiByZ2IoMTAsIDUsIDcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGV4dCBpbWdcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLXdpZHRoKSBzb2xpZCBsaW1lO1xuICB9XG4gIFxuICAuY2FyZF9fY29udGVudCA+IGRpdiB7XG4gICAgZ3JpZC1hcmVhOiB0ZXh0O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxZW07XG4gICAgcGxhY2UtaXRlbXM6IHN0YXJ0O1xuICB9XG4gIFxuICAuY2FyZF9fY29udGVudCA+IGZpZ3VyZSB7XG4gICAgZ3JpZC1hcmVhOiBpbWc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNhcmRfX2NvbnRlbnQgPiBmaWd1cmUgPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS40MjtcbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE4OCA4NyAzNik7XG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIH1cbiAgXG4gIGFzaWRlIHtcbiAgICB3aWR0aDogNTB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICBhc2lkZSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuXG5cblxuXG5cblxuIFxuICBwLnBhZGRlZCB7XG4gICAgcGFkZGluZzouNWVtIC41ZW0gLjFlbSAyZW07XG4gIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLypcbj09PT09XG5ERVBFTkRFTkNFU1xuPT09PT1cbiovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hcmFudGg6NzAwLDQwMCZkaXNwbGF5PXN3YXAnKTtcblxuLyogVGhlIGNvbXBvbmVudCB3aWxsIHJlc2V0IGJyb3dzZXIncyBzdHlsZXMgb2YgbGluayAqL1xuXG4uci1saW5re1xuXHQtLXVpckxpbmtEaXNwbGF5OiB2YXIoLS1yTGlua0Rpc3BsYXksIGlubGluZS1ibG9jayk7XG5cdC0tdWlyTGlua1RleHRDb2xvcjogdmFyKC0tckxpbmtUZXh0Q29sb3IpO1xuXHQtLXVpckxpbmtUZXh0RGVjb3JhdGlvbjogdmFyKC0tckxpbmtUZXh0RGVjb3JhdGlvbiwgbm9uZSk7XG5cblx0ZGlzcGxheTogdmFyKC0tdWlyTGlua0Rpc3BsYXkpICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiB2YXIoLS11aXJMaW5rVGV4dENvbG9yKSAhaW1wb3J0YW50O1xuXHR0ZXh0LWRlY29yYXRpb246IHZhcigtLXVpckxpbmtUZXh0RGVjb3JhdGlvbikgIWltcG9ydGFudDtcbn1cblxuLyogVGhlIGNvbXBvbmVudCB3aWxsIHJlc2V0IGJyb3dzZXIncyBzdHlsZXMgb2YgdGl0bGVzICovXG5cbi5yLXRpdGxle1xuXHQtLXVpclRpdGxlTWFyZ2luVG9wOiB2YXIoLS1yVGl0bGVNYXJnaW5Ub3AsIDApO1xuXHQtLXVpclRpdGxlTWFyZ2luQm90dG9tOiB2YXIoLS1yVGl0bGVNYXJnaW5Cb3R0b20sIDApO1xuXG5cdG1hcmdpbi10b3A6IHZhcigtLXVpclRpdGxlTWFyZ2luVG9wKSAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiB2YXIoLS11aXJUaXRsZU1hcmdpbkJvdHRvbSkgIWltcG9ydGFudDtcbn1cblxuLypcbj09PT09XG5DT1JFIFNUWUxFU1xuPT09PT1cbiovXG5cbi5hbmltYXRlZC11bmRlcmxpbmV7XG5cdC0tdWlBbmltYXRlZFVuZGVybGluZVdpZHRoOiB2YXIoLS1hbmltYXRlZFVuZGVybGluZVdpZHRoLCAxMDAlKTtcblx0LS11aUFuaW1hdGVkVW5kZXJsaW5lSGVpZ2h0OiB2YXIoLS1hbmltYXRlZFVuZGVybGluZUhlaWdodCwgMnB4KTtcblx0LS11aUFuaW1hdGVkVW5kZXJsaW5lQmdDb2xvcjogdmFyKC0tYW5pbWF0ZWRVbmRlcmxpbmVCZ0NvbG9yLCBjdXJyZW50Q29sb3IpO1xuXHQtLXVpQW5pbWF0ZWRVbmRlcmxpbmVQb3NpdGlvblg6IHZhcigtLWFuaW1hdGVkVW5kZXJsaW5lUG9zaXRpb25YLCBsZWZ0KTtcblx0LS11aUFuaW1hdGVkVW5kZXJsaW5lUG9zaXRpb25ZOiB2YXIoLS1hbmltYXRlZFVuZGVybGluZVBvc2l0aW9uWSwgYm90dG9tKTtcblxuXHQvKlxuXHRcdDEuIEZvciBtdWx0aS1saW5lIGFuaW1hdGVkIHVuZGVybGluZSB0aGUgXCJpbmxpbmVcIiB2YWx1ZSBmb3IgdGhlIGRpc3BsYXkgcHJvcGVydHkgaXMgY29tcHVsc29yeS5cblx0XHQyLiBBZGRzIG9wcG9ydHVuaXR5IHRvIGNyZWF0ZSBtdWx0aS1saW5lIHBhZGRpbmdcblx0Ki9cblxuXHQtLXJMaW5rRGlzcGxheTogaW5saW5lOyAvKiAxICovXG5cblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAsIHZhcigtLXVpQW5pbWF0ZWRVbmRlcmxpbmVCZ0NvbG9yKSAwLCB2YXIoLS11aUFuaW1hdGVkVW5kZXJsaW5lQmdDb2xvcikpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXVpQW5pbWF0ZWRVbmRlcmxpbmVXaWR0aCkgdmFyKC0tdWlBbmltYXRlZFVuZGVybGluZUhlaWdodCk7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHZhcigtLXVpQW5pbWF0ZWRVbmRlcmxpbmVQb3NpdGlvblgpIHZhcigtLXVpQW5pbWF0ZWRVbmRlcmxpbmVQb3NpdGlvblkpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcblx0LXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7IC8qIDIgKi9cblx0Ym94LWRlY29yYXRpb24tYnJlYWs6IGNsb25lOyAvKiAyICovXG5cdFxuXHR3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1zaXplO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjI1cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbn1cblxuLypcbj09PT09XG5TRVRUSU5HU1xuPT09PT1cbiovXG5cbjpyb290e1xuXHQtLWFuaW1hdGVkVW5kZXJsaW5lSGVpZ2h0OiAxcmVtO1xuXHQtLWFuaW1hdGVkVW5kZXJsaW5lQmdDb2xvcjogdmFyKC0tYWNjZW50Q29sb3IpO1xufVx0XG5cbi5hbmltYXRlZC11bmRlcmxpbmVfdHlwZTF7XG5cdC0tYW5pbWF0ZWRVbmRlcmxpbmVXaWR0aDogMTAwJTtcbn1cblxuLmFuaW1hdGVkLXVuZGVybGluZV90eXBlMTpob3Zlcntcblx0LS1hbmltYXRlZFVuZGVybGluZUhlaWdodDogMTAwJTtcbn1cblxuLmFuaW1hdGVkLXVuZGVybGluZV90eXBlMntcblx0LS1hbmltYXRlZFVuZGVybGluZVdpZHRoOiAxMDAlO1xufVxuXG4uYW5pbWF0ZWQtdW5kZXJsaW5lX3R5cGUyOmhvdmVye1xuXHQtLWFuaW1hdGVkVW5kZXJsaW5lV2lkdGg6IDA7XG59XG5cbi5hbmltYXRlZC11bmRlcmxpbmVfdHlwZTN7XG5cdC0tYW5pbWF0ZWRVbmRlcmxpbmVIZWlnaHQ6IDA7XG59XG5cbi5hbmltYXRlZC11bmRlcmxpbmVfdHlwZTM6aG92ZXJ7XG5cdC0tYW5pbWF0ZWRVbmRlcmxpbmVIZWlnaHQ6IDEwMCU7XG59XG5cbi5hbmltYXRlZC11bmRlcmxpbmVfdHlwZTR7XG5cdC0tYW5pbWF0ZWRVbmRlcmxpbmVXaWR0aDogMDtcbn1cblxuLmFuaW1hdGVkLXVuZGVybGluZV90eXBlNDpob3Zlcntcblx0LS1hbmltYXRlZFVuZGVybGluZVdpZHRoOiAxMDAlO1xufVxuXG4uYW5pbWF0ZWQtdW5kZXJsaW5lX3R5cGU1e1xuXHQtLWFuaW1hdGVkVW5kZXJsaW5lV2lkdGg6IDEwMCU7XG5cdC0tYW5pbWF0ZWRVbmRlcmxpbmVIZWlnaHQ6IDVweDtcblx0LS1hbmltYXRlZFVuZGVybGluZVBvc2l0aW9uWTogOTAlO1xufVxuXG4uYW5pbWF0ZWQtdW5kZXJsaW5lX3R5cGU1OmhvdmVye1xuXHQtLWFuaW1hdGVkVW5kZXJsaW5lSGVpZ2h0OiAxcmVtO1xufVxuXG4vKlxuPT09PT1cbkRFTU9cbj09PT09XG4qL1xuXG46cm9vdHtcblx0LS1tYWluQ29sb3I6ICM2NzNBQjc7XG5cdC0tYWNjZW50Q29sb3I6ICNmZjdlYjI7XG5cdC0tYWNjZW50Q29sb3JEYXJrOiAjZjE1NDkzO1xuXHQtLWJsYWNrQ29sb3I6ICMyMjI7XG5cdC0td2hpdGVDb2xvcjogI2ZmZjtcblx0LS1yTGlua1RleHRDb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG59XHRcblxuYm9keXtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPcGVuIFNhbnMsIFVidW50dSwgRmlyYSBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4ucGFnZXtcblx0bWF4LXdpZHRoOiAxMzAwcHg7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wYWdlX19uYW1lLWVmZmVjdHtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc2l6ZTogLjg3NXJlbTtcbn1cblxuLnBhZ2VfX25hbWUtZWZmZWN0OjpiZWZvcmV7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAzLjc1cmVtO1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcblx0bWFyZ2luLXRvcDogLjI1cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IC42MjVyZW07XG59XG5cbi5wYWdlX19zZWN0aW9uOm50aC1jaGlsZChuKzIpe1xuXHRtYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4ucGFnZV9fZ3JvdXB7XG5cdG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5uZXdze1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0cGFkZGluZzogNzBweCA2JTtcblx0Ym9yZGVyLXRvcDogNnB4IHNvbGlkIHZhcigtLW1haW5Db2xvcik7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblxuXHRib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMik7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xufVxuXG4ubmV3czpudGgtY2hpbGQobisyKXtcblx0bWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLm5ld3NfX2RhdGV7XG5cdGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmV3c19fdGl0bGV7XG5cdGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xuXHRsaW5lLWhlaWdodDogMS4yNTtcbn1cblxuLm5ld3NfX2xpbms6OmFmdGVye1xuXHRjb250ZW50OiBcIlwiO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xufVxuXG4ubmV3c19fY29udGVudHtcblx0bWFyZ2luLXRvcDogLjg3NXJlbTtcbn1cblxucHtcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0bGluZS1oZWlnaHQ6IDEuNzg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCl7XG5cblx0aHRtbHtcblx0XHRmb250LXNpemU6IDkzLjc1JTtcblx0fVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG5cblx0aHRtbHtcblx0XHRmb250LXNpemU6IDEwMCU7XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpe1xuXG5cdGh0bWx7XG5cdFx0Zm9udC1zaXplOiAxMDYuMjUlO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjFweCl7XG5cblx0aHRtbHtcblx0XHRmb250LXNpemU6IDExMi41JTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpe1xuXG5cdC5wYWdle1xuXHRcdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXHR9XG5cblx0LnBhZ2VfX25hbWUtZWZmZWN0e1xuXHRcdHBhZGRpbmctbGVmdDogLjYyNXJlbTtcblx0XHRwYWRkaW5nLXJpZ2h0OiAuNjI1cmVtO1xuXHR9XG5cblx0Lm5ld3NfX3RpdGxle1xuXHRcdC0tclRpdGxlTWFyZ2luVG9wOiAuNzVyZW07XG5cdFx0Zm9udC1zaXplOiAxLjc1cmVtO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjFweCl7XG5cblx0LnBhZ2V7XG5cdFx0cGFkZGluZzogODBweCA1MHB4O1xuXHR9XG5cblx0Lm5ld3NfX2hlYWRlcntcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cdFx0cGFkZGluZy1sZWZ0OiAxLjVyZW07XG5cdFx0cGFkZGluZy1yaWdodDogMi41cmVtO1xuXHR9XG5cblx0Lm5ld3NfX2RhdGV7XG5cdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0Zm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XG5cblx0XHRtYXJnaW4tcmlnaHQ6IDQwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0Lm5ld3NfX2RheXtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDQuMzMzcmVtO1xuXHRcdGNvbG9yOiB2YXIoLS1hY2NlbnRDb2xvckRhcmspO1xuXHR9XG5cblx0Lm5ld3NfX3llYXJ7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdG1hcmdpbi10b3A6IDVweDtcblx0fVxuXG5cdC5uZXdzX190aXRsZXtcblx0XHRmb250LXNpemU6IDIuNXJlbTtcblx0fVx0XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAxcHgpe1xuXG5cdC5wYWdlX19ncm91cHtcblx0XHRwYWRkaW5nLWxlZnQ6IDE5MHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuXHR9XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map