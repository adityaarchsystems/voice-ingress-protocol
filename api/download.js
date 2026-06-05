export default async function handler(req, res) {
    const supabaseProjectId = process.env.SUPABASE_URL.startsWith('http')
        ? process.env.SUPABASE_URL.split('.')[0].replace('https://', '').replace('http://', '')
        : process.env.SUPABASE_URL;
    const supabaseStorageUrl = `https://${supabaseProjectId}.supabase.co/storage/v1/object/public/voice-assets/AI_Clone_Training_Script_Bilingiual.html`;
    
    try {
        // Fetch the raw bilingual script text data straight from your public Supabase bucket
        const response = await fetch(supabaseStorageUrl);
        if (!response.ok) throw new Error("Failed to fetch asset from underlying storage bucket container.");
        
        const fileContent = await response.text();
        
        // Inject un-bypassable server-side headers forcing an absolute local file save dialog
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Disposition', 'attachment; filename="AI_Clone_Training_Script_Bilingiual.html"');
        
        // Output the raw file stream payload down to the client workstation
        return res.status(200).send(fileContent);
    } catch (error) {
        return res.status(500).json({ error: "Download proxy exception: " + error.message });
    }
}
