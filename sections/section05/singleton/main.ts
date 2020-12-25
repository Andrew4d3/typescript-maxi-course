// You can work with singlenton classes using private constructors
class DbConnection {
   private connection: object;
   private static dbConn: DbConnection | null = null;
   // By defining a private constructor we can set the singleton properties
   private constructor(connection: object) {
      this.connection = connection;
   }

   static initConnection(connstring: string) {
      if (!this.dbConn) {
         console.log("Connectiong to DB:", connstring);
         this.dbConn = new DbConnection({ connstring });
      }

      return this.dbConn;
   }

   runQuery() {
      // Doing something with the singleton instance
      console.log(this.connection);
   }
}

// We need to call the static method in order to get the singleton instance
const db = DbConnection.initConnection("db://user:pass@host.com/db");

// Now we can perform other methods
db.runQuery();
