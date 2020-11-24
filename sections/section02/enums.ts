// By using enums you can define group of constans through a custom type defined by yourself
enum Role {
   ADMIN,
   USER,
   SUBADMIN,
}

// Now we can use the custom type: "Role"
let userRole: Role;
userRole = Role.ADMIN;

if (userRole == Role.ADMIN) {
   console.log("Do something with admin permissions");
}

// By default your enums will get assinged int values starting in 0. But you can change that
enum NewRole {
   ADMIN = 2,
   USER,
   SUBADMIN,
}

console.log(NewRole.ADMIN); // This will print "2" rather than "0"
console.log(NewRole.USER); // This will print "3" rather than "1"
console.log(NewRole.SUBADMIN); // This will print "4" rather than "1"

// You can also define string values
enum CustomRole {
   ADMIN = "admin",
   USER = "user",
   SUBADMIN = "subadmin",
}

console.log(CustomRole.ADMIN);
console.log(CustomRole.USER);
console.log(CustomRole.SUBADMIN);
