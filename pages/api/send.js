import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async () => {
    try {
        const data = await resend.emails.send({
            from: 'info@2therescueanimalsanctuary.org',
            to: 'chaseafriedman@gmail.com',
            subject: 'Hello',
            html: `<h1>Hello</h1>`,
        });
 
        return NextResponse.json({ data });
    } catch (err) {
        return NextResponse.json({ err });
    }
}

export const config = {
    runtime: 'edge',
};

// export default async (req, res) => {
//     if (req.method === 'POST') {
//         const { name, email, phone, subject, message } = req.body;

//         try {
//             const data = await resend.emails.send({
//                 from: 'YourName <your-email@example.com>',
//                 to: ['chaseafriedman@gmail.com'],
//                 subject: subject,
//                 html: `
//                     <p><strong>Name:</strong> ${name}</p>
//                     <p><strong>Email:</strong> ${email}</p>
//                     <p><strong>Phone:</strong> ${phone}</p>
//                     <p><strong>Message:</strong> ${message}</p>
//                 `,
//             });

//             res.status(200).json({ success: true, data });
//         } catch (error) {
//             res.status(400).json({ success: false, error: error.message });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// };