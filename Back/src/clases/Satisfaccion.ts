import Satisfaccionmodel from "../models/Satisfaccionmodel";
import Alternativamodel from "../models/Alternativamodel";
import Criteriomodel from "../models/criteriomodel";

// export interface Criterios {
//   nombre: string;
//   peso: number;
// }

export class Satisfaccion {
  async añadir(body: any) {
    try {
      await Satisfaccionmodel.create(body); //añade datos a la tabla
      console.log(body);
      return "Satisfaccion añadida";
    } catch (error) {
      console.error(error);
      return "No se pudo añadir la satisfaccion";
    }
  }

  async obtener(id_proyecto: number) {
    try {
      return await Satisfaccionmodel.findAll({
        where: {
          id_proyecto: id_proyecto,
        },

        include: [
          {
            model: Alternativamodel,
            as: "alternativa",
            attributes: ["nombre"],
          },

          {
            model: Criteriomodel,
            as: "criterio",
            attributes: ["nombre", "ponderacion"],
          },
        ],
        attributes: ["satisfaccion"],
        raw: true,
      });

      // Logica para que me regrese un arreglo ya tofdo un chido
    } catch (error) {
      console.error(error);
      return "Error al recopilar las ponderaciones";
    }
  }

  async eliminar(id_proyecto: number) {
    try {
      return await Satisfaccionmodel.destroy({
        where: {
          id_proyecto: id_proyecto,
        },
      });
    } catch (error) {
      console.log(error);
      return "Ha ocurrido un error al eliminar la satisfaccion";
    }
  }

  async editar(body: any, id: number) {
    try {
      const satisfaccion = await Satisfaccionmodel.findByPk(id);
      await satisfaccion?.update(body);
      return "satisfaccion editada con exito";
    } catch (error) {
      console.log(error);
      return "error al editar la satisfaccion";
    }
  }
}
