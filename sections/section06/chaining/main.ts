// Sometines we need to access properties that we're not sure they exist.
// If we don't check the existance of such properties we will get a runtime error (propery of undefined)
// Fortunately, in TS we can use  optional chaining (?) to verify this

type Payload = {
   amount: number;
   // meta_data is optional
   meta_data?: {
      id: string;
   };
};

function processPayload(payload: Payload) {
   // The "?" tells TS that the meta_data property might not exist. If does exist, we will get the id property from it.
   console.log("meta_data id is", payload.meta_data?.id || "no_id");
}

processPayload({ amount: 100 });
processPayload({ amount: 100, meta_data: { id: "a1" } });
