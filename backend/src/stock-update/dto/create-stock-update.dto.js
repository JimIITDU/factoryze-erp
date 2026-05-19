"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStockUpdateDto = void 0;
var class_validator_1 = require("class-validator");
var CreateStockUpdateDto = function () {
    var _a;
    var _productId_decorators;
    var _productId_initializers = [];
    var _productId_extraInitializers = [];
    var _productName_decorators;
    var _productName_initializers = [];
    var _productName_extraInitializers = [];
    var _reportedQty_decorators;
    var _reportedQty_initializers = [];
    var _reportedQty_extraInitializers = [];
    var _isLowStockAlert_decorators;
    var _isLowStockAlert_initializers = [];
    var _isLowStockAlert_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateStockUpdateDto() {
                this.productId = __runInitializers(this, _productId_initializers, void 0);
                this.productName = (__runInitializers(this, _productId_extraInitializers), __runInitializers(this, _productName_initializers, void 0));
                this.reportedQty = (__runInitializers(this, _productName_extraInitializers), __runInitializers(this, _reportedQty_initializers, void 0));
                this.isLowStockAlert = (__runInitializers(this, _reportedQty_extraInitializers), __runInitializers(this, _isLowStockAlert_initializers, void 0));
                __runInitializers(this, _isLowStockAlert_extraInitializers);
            }
            return CreateStockUpdateDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _productId_decorators = [(0, class_validator_1.IsString)()];
            _productName_decorators = [(0, class_validator_1.IsString)()];
            _reportedQty_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0)];
            _isLowStockAlert_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: function (obj) { return "productId" in obj; }, get: function (obj) { return obj.productId; }, set: function (obj, value) { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
            __esDecorate(null, null, _productName_decorators, { kind: "field", name: "productName", static: false, private: false, access: { has: function (obj) { return "productName" in obj; }, get: function (obj) { return obj.productName; }, set: function (obj, value) { obj.productName = value; } }, metadata: _metadata }, _productName_initializers, _productName_extraInitializers);
            __esDecorate(null, null, _reportedQty_decorators, { kind: "field", name: "reportedQty", static: false, private: false, access: { has: function (obj) { return "reportedQty" in obj; }, get: function (obj) { return obj.reportedQty; }, set: function (obj, value) { obj.reportedQty = value; } }, metadata: _metadata }, _reportedQty_initializers, _reportedQty_extraInitializers);
            __esDecorate(null, null, _isLowStockAlert_decorators, { kind: "field", name: "isLowStockAlert", static: false, private: false, access: { has: function (obj) { return "isLowStockAlert" in obj; }, get: function (obj) { return obj.isLowStockAlert; }, set: function (obj, value) { obj.isLowStockAlert = value; } }, metadata: _metadata }, _isLowStockAlert_initializers, _isLowStockAlert_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateStockUpdateDto = CreateStockUpdateDto;
