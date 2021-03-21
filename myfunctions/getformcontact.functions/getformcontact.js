var request = require("request");


exports.main = (context, sendResponse) => {
  console.log("Body: ", context.body);
  const body = context.body;
  
  var options = {
    method: 'POST',
    url: 'https://api.hubapi.com/crm/v3/objects/contacts',
    qs: { hapikey: '51a40969-a29d-45bc-88fa-d687df3c31b7' },
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: {
      properties: {
        firstname: body['First name'],
        lastname: body['Last name'],
        email: body['Email'],
        phone: body['Phone']
      }
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    sendResponse({ body: { response: "The contact is successfully created!" }, statusCode: 200 });

  });


};