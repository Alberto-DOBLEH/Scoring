"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PesosPage = void 0;
const core_1 = require("@angular/core");
const api_service_1 = require("../../services/api-service");
@(0, core_1.Component)({
    selector: 'app-pesos',
    templateUrl: './pesos.html',
    styleUrls: ['./pesos.css']
})
class PesosPage {
    apiService;
    criterios = [];
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        const idProyecto = 1;
        this.apiService.getcriterio(idProyecto).subscribe((data) => {
            this.criterios = data;
        });
    }
    guardarPesos() {
        const incompletos = this.criterios.some((c) => c.peso === undefined || c.peso === null);
        if (incompletos) {
            alert('Debes llenar todos los pesos antes de guardar');
            return;
        }
        const total = this.criterios.reduce((sum, c) => sum + (c.peso || 0), 0);
        if (total !== 100) {
            alert('La suma de los pesos debe ser exactamente 100 (actual: ' + total + ')');
            return;
        }
        this.apiService.savePonderaciones(this.criterios).subscribe({
            next: () => {
                alert('Pesos guardados correctamente');
            },
            error: (err) => {
                console.error(err);
                alert('Error al guardar los pesos');
            }
        });
    }
}
exports.PesosPage = PesosPage;
//# sourceMappingURL=pesos.js.map