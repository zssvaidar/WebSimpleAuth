"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
var constants_1 = require("../constants");
var user = JSON.parse(localStorage.getItem('user'));
var initialState = user ? { loggedIn: true, user: user } : {};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case constants_1.userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case constants_1.userConstants.LOGIN_FAILURE:
            return {};
        case constants_1.userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
};
exports.reducer = reducer;
//# sourceMappingURL=Authorize.js.map