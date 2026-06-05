import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.SUPABASE_URL.startsWith('http')
    ? process.env.SUPABASE_URL
    : `https://${process.env.SUPABASE_URL}.supabase.co`;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    try {
        let body = req.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        const { name, email } = body;
        if (!name || !email) return res.status(400).json({ error: 'Missing identity telemetry parameters' });

        // 1. Ingress Registration Into Supabase Table
        const { error: dbError } = await supabase
            .from('operators')
            .insert([{ operator_name: name, secure_email: email, initialized_at: new Date() }]);
            
        if (dbError) throw dbError;

        // 2. Automated Asset Delivery Dispatch via Resend API
        await resend.emails.send({
            from: 'Aditya Sharma // Calyx Engine <onboarding@resend.dev>',
            to: email,
            subject: '▲ [ACCESS GRANTED] Voice Saturation Training Scripts',
            html: `<div style="font-family: monospace; padding: 24px; color: #1b1b1b; background-color: #F2E9DC;">
                    <p>Welcome to the orchestration framework, <strong>${name}</strong>.</p>
                    <p>Your open-access directory token has been validated successfully.</p>
                    <p style="margin-top: 24px; margin-bottom: 24px;">
                       <strong>
                          <a href="https://voice-ingress-protocol.vercel.app/api/download" 
                             style="padding: 12px 24px; background-color: #5341cd; color: #ffffff; text-decoration: none; border: 2px solid #1b1b1b; display: inline-block; font-weight: bold; font-family: monospace;">
                             CLICK HERE TO INSTANTLY DOWNLOAD TRAINING SCRIPT ASSET
                          </a>
                       </strong>
                    </p>
                    <p style="font-size: 11px; opacity: 0.6; border-top: 1px dashed #1b1b1b; padding-top: 12px;">
                       System Egress Node // Calyx Architecture Framework 2026 // Hardware Target Validated: i7-14700 / RTX 5060 Ti
                    </p>
                   </div>`
        });

        return res.status(201).json({ success: true, message: 'Ingress verified and asset dispatched.' });
    } catch (error) {
        return res.status(500).json({ error: 'System pipeline exception: ' + error.message });
    }
}
