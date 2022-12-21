exports.handler = async (event) => {
  // console.log('this is the event ', event)
  // console.log('I am here LIVEEEE from Lambda', JSON.stringify(event, undefined, '  '));

  const intentName = event.sessionState.intent.name;


  // console.log('username', userName);
  // console.log('im from event', event);
  console.log('inteeeeeeent', intentName);

  if (intentName == 'PawGreeting') {
    const userName = event.sessionState.intent.slots.user_name.value.originalValue;
    //  const userName = event.intent.slots.user_name.value.originalValue;
    console.log('heyyy this is the userName', userName);
    return {


      "sessionState": {
        "dialogAction": {
          "type": "Close"
        },
        "intent": {
          "name": "PawGreeting",
          "slots": {
            "user_name": {
              "value": {
                "originalValue": "pam",
                "interpretedValue": "pam",
                "resolvedValues": [
                  "pam"
                ]
              }
            }
          },
          "state": "ReadyForFulfillment",
          "confirmationState": "None"
        },
        "sessionAttributes": {},
        "originatingRequestId": "7a65cbce-2484-4908-8997-37f2f7918c02"
      },
      "interpretations": [
        {
          "nluConfidence": {
            "score": 1
          },
          "intent": {
            "name": "PawGreeting",
            "slots": {
              "user_name": {
                "value": {
                  "originalValue": "pam",
                  "interpretedValue": "pam",
                  "resolvedValues": [
                    "pam"
                  ]
                }
              }
            },
            "state": "ReadyForFulfillment",
            "confirmationState": "None"
          }
        },
        {
          "intent": {
            "name": "FallbackIntent",
            "slots": {}
          }
        },
        {
          "nluConfidence": {
            "score": 0.35
          },
          "intent": {
            "name": "animalSpayed",
            "slots": {}
          }
        }
      ],
      "requestAttributes": {},
      "sessionId": "80223463190864"
    };
  }
}
