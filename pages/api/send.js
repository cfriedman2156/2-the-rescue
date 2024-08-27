import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req) {
    if (req.method === 'POST') {
        const { name, email, phone, subject, message } = await req.json();

        try {
            const data = await resend.emails.send({
                from: 'info@2therescueanimalsanctuary.org',
                to: '2therescueanimalsanctuary@gmail.com',
                subject: subject,
                html: `
                    <h1>Name: ${name}</h1>
                    <h1>Email: ${email}</h1>
                    <h1>Phone: ${phone}</h1>
                    <h1>Message:</h1>
                    <p>${message}</p>
                `,
            });

            return NextResponse.json({ data }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
}

export const config = {
    runtime: 'edge',
};
