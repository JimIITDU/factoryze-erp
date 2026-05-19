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
exports.CreatePurchaseOrderDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var OrderItemDto = function () {
    var _a;
    var _rawMaterialId_decorators;
    var _rawMaterialId_initializers = [];
    var _rawMaterialId_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _unit_decorators;
    var _unit_initializers = [];
    var _unit_extraInitializers = [];
    return _a = /** @class */ (function () {
            function OrderItemDto() {
                this.rawMaterialId = __runInitializers(this, _rawMaterialId_initializers, void 0);
                this.name = (__runInitializers(this, _rawMaterialId_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.quantity = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
                this.unit = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _unit_initializers, void 0));
                __runInitializers(this, _unit_extraInitializers);
            }
            return OrderItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _rawMaterialId_decorators = [(0, class_validator_1.IsString)()];
            _name_decorators = [(0, class_validator_1.IsString)()];
            _quantity_decorators = [(0, class_validator_1.IsNotEmpty)()];
            _unit_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _rawMaterialId_decorators, { kind: "field", name: "rawMaterialId", static: false, private: false, access: { has: function (obj) { return "rawMaterialId" in obj; }, get: function (obj) { return obj.rawMaterialId; }, set: function (obj, value) { obj.rawMaterialId = value; } }, metadata: _metadata }, _rawMaterialId_initializers, _rawMaterialId_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
            __esDecorate(null, null, _unit_decorators, { kind: "field", name: "unit", static: false, private: false, access: { has: function (obj) { return "unit" in obj; }, get: function (obj) { return obj.unit; }, set: function (obj, value) { obj.unit = value; } }, metadata: _metadata }, _unit_initializers, _unit_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var CreatePurchaseOrderDto = function () {
    var _a;
    var _supplierId_decorators;
    var _supplierId_initializers = [];
    var _supplierId_extraInitializers = [];
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _requiredDeliveryDate_decorators;
    var _requiredDeliveryDate_initializers = [];
    var _requiredDeliveryDate_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePurchaseOrderDto() {
                this.supplierId = __runInitializers(this, _supplierId_initializers, void 0);
                this.items = (__runInitializers(this, _supplierId_extraInitializers), __runInitializers(this, _items_initializers, void 0));
                this.requiredDeliveryDate = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _requiredDeliveryDate_initializers, void 0));
                __runInitializers(this, _requiredDeliveryDate_extraInitializers);
            }
            return CreatePurchaseOrderDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _supplierId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _items_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return OrderItemDto; })];
            _requiredDeliveryDate_decorators = [(0, class_validator_1.IsDateString)()];
            __esDecorate(null, null, _supplierId_decorators, { kind: "field", name: "supplierId", static: false, private: false, access: { has: function (obj) { return "supplierId" in obj; }, get: function (obj) { return obj.supplierId; }, set: function (obj, value) { obj.supplierId = value; } }, metadata: _metadata }, _supplierId_initializers, _supplierId_extraInitializers);
            __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(null, null, _requiredDeliveryDate_decorators, { kind: "field", name: "requiredDeliveryDate", static: false, private: false, access: { has: function (obj) { return "requiredDeliveryDate" in obj; }, get: function (obj) { return obj.requiredDeliveryDate; }, set: function (obj, value) { obj.requiredDeliveryDate = value; } }, metadata: _metadata }, _requiredDeliveryDate_initializers, _requiredDeliveryDate_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePurchaseOrderDto = CreatePurchaseOrderDto;
