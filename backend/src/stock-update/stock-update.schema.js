"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockUpdateSchema = exports.StockUpdate = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var StockUpdate = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _distributorId_decorators;
    var _distributorId_initializers = [];
    var _distributorId_extraInitializers = [];
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
    var StockUpdate = _classThis = /** @class */ (function (_super) {
        __extends(StockUpdate_1, _super);
        function StockUpdate_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.distributorId = __runInitializers(_this, _distributorId_initializers, void 0);
            _this.productId = (__runInitializers(_this, _distributorId_extraInitializers), __runInitializers(_this, _productId_initializers, void 0));
            _this.productName = (__runInitializers(_this, _productId_extraInitializers), __runInitializers(_this, _productName_initializers, void 0));
            _this.reportedQty = (__runInitializers(_this, _productName_extraInitializers), __runInitializers(_this, _reportedQty_initializers, void 0));
            _this.isLowStockAlert = (__runInitializers(_this, _reportedQty_extraInitializers), __runInitializers(_this, _isLowStockAlert_initializers, void 0));
            __runInitializers(_this, _isLowStockAlert_extraInitializers);
            return _this;
        }
        return StockUpdate_1;
    }(_classSuper));
    __setFunctionName(_classThis, "StockUpdate");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _distributorId_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Distributor', required: true })];
        _productId_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'FinishedProduct', required: true })];
        _productName_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _reportedQty_decorators = [(0, mongoose_1.Prop)({ required: true, min: 0 })];
        _isLowStockAlert_decorators = [(0, mongoose_1.Prop)({ default: false })];
        __esDecorate(null, null, _distributorId_decorators, { kind: "field", name: "distributorId", static: false, private: false, access: { has: function (obj) { return "distributorId" in obj; }, get: function (obj) { return obj.distributorId; }, set: function (obj, value) { obj.distributorId = value; } }, metadata: _metadata }, _distributorId_initializers, _distributorId_extraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: function (obj) { return "productId" in obj; }, get: function (obj) { return obj.productId; }, set: function (obj, value) { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
        __esDecorate(null, null, _productName_decorators, { kind: "field", name: "productName", static: false, private: false, access: { has: function (obj) { return "productName" in obj; }, get: function (obj) { return obj.productName; }, set: function (obj, value) { obj.productName = value; } }, metadata: _metadata }, _productName_initializers, _productName_extraInitializers);
        __esDecorate(null, null, _reportedQty_decorators, { kind: "field", name: "reportedQty", static: false, private: false, access: { has: function (obj) { return "reportedQty" in obj; }, get: function (obj) { return obj.reportedQty; }, set: function (obj, value) { obj.reportedQty = value; } }, metadata: _metadata }, _reportedQty_initializers, _reportedQty_extraInitializers);
        __esDecorate(null, null, _isLowStockAlert_decorators, { kind: "field", name: "isLowStockAlert", static: false, private: false, access: { has: function (obj) { return "isLowStockAlert" in obj; }, get: function (obj) { return obj.isLowStockAlert; }, set: function (obj, value) { obj.isLowStockAlert = value; } }, metadata: _metadata }, _isLowStockAlert_initializers, _isLowStockAlert_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StockUpdate = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StockUpdate = _classThis;
}();
exports.StockUpdate = StockUpdate;
exports.StockUpdateSchema = mongoose_1.SchemaFactory.createForClass(StockUpdate);
