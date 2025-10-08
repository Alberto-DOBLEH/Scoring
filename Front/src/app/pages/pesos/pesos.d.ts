import { OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
interface Criterio {
    id: number;
    descripcion: string;
    peso?: number;
}
export declare class PesosPage implements OnInit {
    private apiService;
    criterios: Criterio[];
    constructor(apiService: ApiService);
    ngOnInit(): void;
    guardarPesos(): void;
}
export {};
//# sourceMappingURL=pesos.d.ts.map