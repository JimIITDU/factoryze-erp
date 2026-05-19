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
exports.DistributorRequestSchema = exports.DistributorRequest = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var status_enum_1 = require("../common/enums/status.enum");
var RequestItem = /** @class */ (function () {
    function RequestItem() {
    }
    return RequestItem;
}());
var DistributorRequest = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _distributorId_decorators;
    var _distributorId_initializers = [];
    var _distributorId_extraInitializers = [];
    var _manufacturerId_decorators;
    var _manufacturerId_initializers = [];
    var _manufacturerId_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _preferredDeliveryDate_decorators;
    var _preferredDeliveryDate_initializers = [];
    var _preferredDeliveryDate_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _note_decorators;
    var _note_initializers = [];
    var _note_extraInitializers = [];
    var DistributorRequest = _classThis = /** @class */ (function (_super) {
        __extends(DistributorRequest_1, _super);
        function DistributorRequest_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.distributorId = __runInitializers(_this, _distributorId_initializers, void 0);
            _this.manufacturerId = (__runInitializers(_this, _distributorId_extraInitializers), __runInitializers(_this, _manufacturerId_initializers, void 0));
            _this.items = (__runInitializers(_this, _manufacturerId_extraInitializers), __runInitializers(_this, _items_initializers, void 0));
            _this.preferredDeliveryDate = (__runInitializers(_this, _items_extraInitializers), __runInitializers(_this, _preferredDeliveryDate_initializers, void 0));
            _this.status = (__runInitializers(_this, _preferredDeliveryDate_extraInitializers), __runInitializers(_this, _status_initializers, void 0));
            _this.note = (__runInitializers(_this, _status_extraInitializers), __runInitializers(_this, _note_initializers, void 0));
            __runInitializers(_this, _note_extraInitializers);
            return _this;
        }
        return DistributorRequest_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DistributorRequest");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _distributorId_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Distributor', required: true })];
        _manufacturerId_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Manufacturer', required: true })];
        _items_decorators = [(0, mongoose_1.Prop)({ type: [{ productId: mongoose_2.Types.ObjectId, productName: String, quantity: Number }] })];
        _preferredDeliveryDate_decorators = [(0, mongoose_1.Prop)()];
        _status_decorators = [(0, mongoose_1.Prop)({ default: status_enum_1.DistributorRequestStatus.PENDING, enum: Object.values(status_enum_1.DistributorRequestStatus) })];
        _note_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _distributorId_decorators, { kind: "field", name: "distributorId", static: false, private: false, access: { has: function (obj) { return "distributorId" in obj; }, get: function (obj) { return obj.distributorId; }, set: function (obj, value) { obj.distributorId = value; } }, metadata: _metadata }, _distributorId_initializers, _distributorId_extraInitializers);
        __esDecorate(null, null, _manufacturerId_decorators, { kind: "field", name: "manufacturerId", static: false, private: false, access: { has: function (obj) { return "manufacturerId" in obj; }, get: function (obj) { return obj.manufacturerId; }, set: function (obj, value) { obj.manufacturerId = value; } }, metadata: _metadata }, _manufacturerId_initializers, _manufacturerId_extraInitializers);
        __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
        __esDecorate(null, null, _preferredDeliveryDate_decorators, { kind: "field", name: "preferredDeliveryDate", static: false, private: false, access: { has: function (obj) { return "preferredDeliveryDate" in obj; }, get: function (obj) { return obj.preferredDeliveryDate; }, set: function (obj, value) { obj.preferredDeliveryDate = value; } }, metadata: _metadata }, _preferredDeliveryDate_initializers, _preferredDeliveryDate_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _note_decorators, { kind: "field", name: "note", static: false, private: false, access: { has: function (obj) { return "note" in obj; }, get: function (obj) { return obj.note; }, set: function (obj, value) { obj.note = value; } }, metadata: _metadata }, _note_initializers, _note_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DistributorRequest = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DistributorRequest = _classThis;
}();
exports.DistributorRequest = DistributorRequest;
exports.DistributorRequestSchema = mongoose_1.SchemaFactory.createForClass(DistributorRequest);
