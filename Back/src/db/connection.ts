import { Sequelize } from "sequelize";

const sequelize = new Sequelize("scoring_db", "root", "Horizon134", {
  //aqui cambia las credenciales de tu servidor de db,
  host: "localhost", //(nombre de db, usuario, contrasseña)
  dialect: "mysql",
});

export default sequelize;
