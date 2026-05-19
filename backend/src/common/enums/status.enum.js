"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributorRequestStatus = exports.ProductionOrderStatus = exports.PurchaseOrderStatus = void 0;
var PurchaseOrderStatus;
(function (PurchaseOrderStatus) {
    PurchaseOrderStatus["REQUESTED"] = "requested";
    PurchaseOrderStatus["ACCEPTED"] = "accepted";
    PurchaseOrderStatus["REJECTED"] = "rejected";
    PurchaseOrderStatus["DELIVERED"] = "delivered";
    PurchaseOrderStatus["CANCELLED"] = "cancelled";
})(PurchaseOrderStatus || (exports.PurchaseOrderStatus = PurchaseOrderStatus = {}));
var ProductionOrderStatus;
(function (ProductionOrderStatus) {
    ProductionOrderStatus["REQUESTED"] = "requested";
    ProductionOrderStatus["IN_PROGRESS"] = "in_progress";
    ProductionOrderStatus["COMPLETED"] = "completed";
})(ProductionOrderStatus || (exports.ProductionOrderStatus = ProductionOrderStatus = {}));
var DistributorRequestStatus;
(function (DistributorRequestStatus) {
    DistributorRequestStatus["PENDING"] = "pending";
    DistributorRequestStatus["APPROVED"] = "approved";
    DistributorRequestStatus["REJECTED"] = "rejected";
    DistributorRequestStatus["DELIVERED"] = "delivered";
    DistributorRequestStatus["RECEIVED"] = "received";
    DistributorRequestStatus["CANCELLED"] = "cancelled";
})(DistributorRequestStatus || (exports.DistributorRequestStatus = DistributorRequestStatus = {}));
