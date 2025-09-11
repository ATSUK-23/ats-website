import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AssessmentRequest {
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  overallScore: number;
  maturity: string;
  domainScores: Array<{
    domain: string;
    score: number;
  }>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company_name, overallScore, maturity, domainScores }: AssessmentRequest = await req.json();
    
    const ghlApiKey = Deno.env.get("GHL_API_KEY");
    if (!ghlApiKey) {
      throw new Error("GHL_API_KEY not configured");
    }

    // Format domain scores for GHL
    const scoresText = domainScores
      .map(domain => `${domain.domain}: ${Math.round(domain.score)}%`)
      .join(', ');

    // Post to GHL API
    const ghlPayload = {
      contactInfo: {
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || '',
        email: email,
        phone: phone || '',
        companyName: company_name || ''
      },
      tags: ['ai-assessment-done'],
      customFields: {
        'AI Assessment Score': `${Math.round(overallScore)}%`,
        'AI Maturity Level': maturity,
        'Domain Scores': scoresText
      },
      notes: `AI Assessment Results:
- Overall Score: ${Math.round(overallScore)}%
- Maturity Level: ${maturity}
- Domain Breakdown: ${scoresText}`,
      source: 'AI Assessment'
    };

    console.log("Posting to GHL:", JSON.stringify(ghlPayload, null, 2));

    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload)
    });

    const ghlResult = await ghlResponse.text();
    console.log("GHL Response:", ghlResponse.status, ghlResult);

    if (!ghlResponse.ok) {
      console.error("GHL API Error:", ghlResponse.status, ghlResult);
      throw new Error(`GHL API error: ${ghlResponse.status} - ${ghlResult}`);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      ghlResponse: ghlResult 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in post-to-ghl function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);