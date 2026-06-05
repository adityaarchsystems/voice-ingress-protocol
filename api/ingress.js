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
            from: 'Calyx Engine <onboarding@resend.dev>', // Update with custom verified domain later
            to: email,
            subject: '▲ [ACCESS GRANTED] Voice Saturation Training Scripts',
            html: `<p>Welcome to the orchestration framework, <strong>${name}</strong>.</p>
                   <p>Your open-access directory token has been validated successfully.</p>
                   <p><strong><a href="https://voice-ingress-protocol.vercel.app/">Click here to download your training scripts PDF asset directly.</a></strong></p>`
        });

        return res.status(201).json({ success: true, message: 'Ingress verified and asset dispatched.' });
    } catch (error) {
        return res.status(500).json({ error: 'System pipeline exception: ' + error.message });
    }
}
