import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AssessmentEmailRequest {
  name: string;
  email: string;
  companyName?: string;
  phone?: string;
  additionalInfo?: string;
  answers: Record<number, number>;
  overallScore: number;
  domainScores: Array<{
    domain: string;
    score: number;
    weight: number;
    description: string;
  }>;
  maturity: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, companyName, phone, additionalInfo, answers, overallScore, domainScores, maturity }: AssessmentEmailRequest = await req.json();

    console.log("📧 Starting email send for:", email);

    // Format answers for email
    const answersText = Object.entries(answers)
      .map(([questionId, answerIndex]) => `Question ${questionId}: Option ${parseInt(answerIndex) + 1}`)
      .join('\n');

    // Format domain scores
    const domainScoresText = domainScores
      .map(domain => `${domain.domain}: ${Math.round(domain.score)}%`)
      .join('\n');

    const emailContent = `
      <h2>AI Assessment & Consultation Request</h2>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${additionalInfo ? `<p><strong>Additional Information:</strong> ${additionalInfo}</p>` : ''}
      
      <h3>AI Assessment Results:</h3>
      <p><strong>Overall Score:</strong> ${Math.round(overallScore)}%</p>
      <p><strong>Maturity Level:</strong> ${maturity}</p>
      
      <h3>Domain Scores:</h3>
      <pre>${domainScoresText}</pre>
      
      <h3>Detailed Answers:</h3>
      <pre>${answersText}</pre>
    `;

    // Send to both email addresses
    const recipients = [
      "martin@automatetosell.com",
      "richard.padun@theepitome.co.uk"
    ];

    console.log("📤 Sending emails to:", recipients);

    for (const recipient of recipients) {
      const emailResult = await resend.emails.send({
        from: "AI Assessment <onboarding@resend.dev>",
        to: [recipient],
        subject: `New AI Assessment Completed - ${name}`,
        html: emailContent,
      });

      console.log(`✅ Email sent to ${recipient}:`, emailResult);
    }

    console.log("🎉 All assessment emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("❌ Error in send-assessment-email function:", error);
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