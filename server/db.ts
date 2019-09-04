import * as mongoose from "mongoose";

class DataBase {
    private dbURL = "mongodb://localhost/crushs";
    private dbConnection;

    constructor() {}

    createConnection() {
        mongoose.connect(this.dbURL, { useNewUrlParser: true });
        this.logger(this.dbURL);
    }

    logger(uri) {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on("connected", () =>
            console.log("mongoose está conectado")
        );
        this.dbConnection.on("error", error =>
            console.error.bind(console, "erro na conexão: " + error)
        );
    }
}

export default DataBase;
