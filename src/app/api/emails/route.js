import { Resend } from 'resend';
// import Welcome from '../../../emails/Welcome';
import Payment from '../../../emails/payment-success';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
    const {email,name,title,price,transactionId,logo} = await req.json();
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: "adityadevelopsweb@gmail.com",
        subject: 'Your Payment for the mcyberacadmey course was successful',
        react: Payment({name,title,price,transactionId,logo})
      });
}