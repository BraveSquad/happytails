import Vonage from '@vonage/server-sdk';

const vonage = new Vonage({
    applicationId: 'c3b3a842-7f3b-4402-a35a-7f7622f33988',
    privateKey: './env.PRIVATE_KEY'
})

const textMessage = 'Confirmation: Your appointment has been booked with Happy Tails. See you soon!';
//send text message to people model or book appointment model from backend later
const toNumber = '7186904453';

vonage.channel.send(
    {type: 'sms', number: toNumber},
    {type: 'sms', number: 'Vonage'},
    {
        content:{
            type: 'text',
            text: textMessage,
        },
    },
    (err, responseData) => {
        if(err) {
            console.log('Message failed with error:', err);
        } else {
          console.log(`Message ${responseData.message_uuid} sent successfully.`);  
        }
    }
);