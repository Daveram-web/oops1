"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const db_1 = __importDefault(require("../database/db"));
class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let [row] = yield db_1.default.query(`SELECT * FROM ${this.tableName} WHERE s_delete = 0`);
            return row.map(this.MaptoRow);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let [row] = yield db_1.default.query(`SELECT * FROM ${this.tableName} WHERE s_delete = 0`);
            return row.map(this.MaptoRow);
        });
    }
    deletes(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let [del] = yield db_1.default.query(`UPDATE ${this.tableName} SET s_delete = 1 WHERE id = ? `, [id]);
            return del.affectedRows > 0;
        });
    }
}
exports.BaseModel = BaseModel;
