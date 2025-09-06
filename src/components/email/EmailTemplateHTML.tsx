import React from 'react';

interface EmailTemplateHTMLProps {
  recipientName?: string;
  subject?: string;
  message?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export const generateEmailHTML = ({
  recipientName = "{{first_name}}",
  subject = "Thank you for your interest in AI Automation",
  message = "We've received your inquiry and will be in touch within 24 hours to discuss how we can help transform your business with intelligent automation.",
  ctaText = "Schedule Your Consultation",
  ctaUrl = "https://automatetosell.com"
}: EmailTemplateHTMLProps = {}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        /* Reset styles for email clients */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #f8fafc; }
        table { border-collapse: collapse; }
        img { border: 0; outline: none; text-decoration: none; }
    </style>
</head>
<body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: Inter, system-ui, -apple-system, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
        <tr>
            <td>
                <!-- Header -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: hsl(222.2, 47.4%, 11.2%); border-radius: 8px 8px 0 0;">
                    <tr>
                        <td style="padding: 32px 24px; text-align: center;">
                            <img src="https://automatetosell.com/src/assets/ats-logo.png" alt="Automate To Sell Logo" style="height: 40px; width: auto; margin-bottom: 8px; display: block; margin-left: auto; margin-right: auto;" />
                            <h1 style="color: hsl(210, 40%, 98%); font-size: 24px; font-weight: 700; margin: 0;">
                                Automate To Sell
                            </h1>
                        </td>
                    </tr>
                </table>

                <!-- Body -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
                    <tr>
                        <td style="padding: 32px 24px;">
                            <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 16px; color: hsl(222.2, 84%, 4.9%);">
                                Hi ${recipientName},
                            </h2>
                            
                            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px; color: hsl(215.4, 16.3%, 46.9%);">
                                ${message}
                            </p>

                            <!-- Features Section -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: hsl(210, 40%, 96.1%); border-radius: 8px; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: hsl(222.2, 47.4%, 11.2%);">
                                            Our AI Automation Services Include:
                                        </h3>
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%); border-bottom: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                                    🧠 AI Solutions & Intelligent Agents
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%); border-bottom: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                                    ⚡ Sales & Marketing Automation
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%); border-bottom: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                                    🌐 E-Commerce Global Systems
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%); border-bottom: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                                    📱 Social Content & Distribution
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%); border-bottom: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                                    🚀 Vibe Coding & Rapid Prototyping
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: hsl(222.2, 47.4%, 11.2%);">
                                                    🎓 Training & Workshops
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="text-align: center; margin: 32px 0;">
                                        <a href="${ctaUrl}" style="display: inline-block; background-color: hsl(217, 91%, 60%); color: hsl(210, 40%, 98%); padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                                            ${ctaText}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px; color: hsl(215.4, 16.3%, 46.9%);">
                                We're excited to help you work smarter and grow faster with intelligent automation that serves your strategy.
                            </p>

                            <!-- Signature -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px; padding: 16px 0; border-top: 1px solid hsl(214.3, 31.8%, 91.4%);">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: hsl(215.4, 16.3%, 46.9%);">
                                            Best regards,
                                        </p>
                                        <p style="margin: 0; font-size: 14px; color: hsl(215.4, 16.3%, 46.9%);">
                                            The Automate To Sell Team
                                        </p>
                        <p style="margin: 8px 0 0 0; font-size: 12px; color: hsl(215.4, 16.3%, 46.9%);">
                            AI Automation Consultancy | <a href="https://automatetosell.com" style="color: hsl(217, 91%, 60%);">automatetosell.com</a>
                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

                <!-- Footer -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: hsl(210, 40%, 96.1%); border-radius: 0 0 8px 8px;">
                    <tr>
                        <td style="padding: 24px; text-align: center; font-size: 14px; color: hsl(215.4, 16.3%, 46.9%);">
                            <p style="margin: 0 0 8px 0;">
                                © 2024 Automate To Sell. All rights reserved.
                            </p>
                            <p style="margin: 0; font-size: 12px;">
                                Technology that serves your strategy, not replaces it.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};

// React component to display the HTML for copying
export const EmailTemplateHTML: React.FC<EmailTemplateHTMLProps> = (props) => {
  const htmlCode = generateEmailHTML(props);

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Go High Level Email Template</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Copy the HTML below and paste it into your Go High Level email template editor:
      </p>
      
      <div className="bg-muted p-4 rounded-md overflow-auto max-h-96">
        <pre className="text-xs whitespace-pre-wrap break-words">
          <code>{htmlCode}</code>
        </pre>
      </div>
      
      <button
        onClick={() => navigator.clipboard.writeText(htmlCode)}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90"
      >
        Copy HTML to Clipboard
      </button>
      
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
        <h4 className="font-semibold text-blue-900 mb-2">How to use in Go High Level:</h4>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Go to Marketing → Email Templates in your GHL dashboard</li>
          <li>2. Create a new template or edit an existing one</li>
          <li>3. Switch to HTML view/code editor</li>
          <li>4. Paste the HTML code above</li>
          <li>5. Use GHL merge tags like &#123;&#123;first_name&#125;&#125; for personalization</li>
          <li>6. Test your template before sending</li>
        </ol>
      </div>
    </div>
  );
};