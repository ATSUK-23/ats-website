import React from 'react';
import { Button } from '@/components/ui/button';

interface EmailTemplateProps {
  recipientName?: string;
  subject?: string;
  message?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  recipientName = "Valued Client",
  subject = "Thank you for your interest in AI Automation",
  message = "We've received your inquiry and will be in touch within 24 hours to discuss how we can help transform your business with intelligent automation.",
  ctaText = "Schedule Your Consultation",
  ctaUrl = "https://automatetosell.com"
}) => {
  // Inline styles for email compatibility
  const emailStyles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      backgroundColor: '#ffffff',
      color: '#0f172a'
    },
    header: {
      backgroundColor: 'hsl(222.2, 47.4%, 11.2%)',
      padding: '32px 24px',
      textAlign: 'center' as const
    },
    logo: {
      color: 'hsl(210, 40%, 98%)',
      fontSize: '24px',
      fontWeight: '700',
      margin: '0'
    },
    body: {
      padding: '32px 24px'
    },
    greeting: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px',
      color: 'hsl(222.2, 84%, 4.9%)'
    },
    message: {
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '24px',
      color: 'hsl(215.4, 16.3%, 46.9%)'
    },
    ctaContainer: {
      textAlign: 'center' as const,
      margin: '32px 0'
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: 'hsl(217, 91%, 60%)',
      color: 'hsl(210, 40%, 98%)',
      padding: '12px 24px',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '16px'
    },
    features: {
      backgroundColor: 'hsl(210, 40%, 96.1%)',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '24px'
    },
    featuresList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    featureItem: {
      padding: '8px 0',
      fontSize: '14px',
      color: 'hsl(222.2, 47.4%, 11.2%)',
      borderBottom: '1px solid hsl(214.3, 31.8%, 91.4%)'
    },
    footer: {
      backgroundColor: 'hsl(210, 40%, 96.1%)',
      padding: '24px',
      textAlign: 'center' as const,
      fontSize: '14px',
      color: 'hsl(215.4, 16.3%, 46.9%)'
    },
    signature: {
      marginTop: '24px',
      padding: '16px 0',
      borderTop: '1px solid hsl(214.3, 31.8%, 91.4%)',
      fontSize: '14px',
      color: 'hsl(215.4, 16.3%, 46.9%)'
    }
  };

  return (
    <div style={emailStyles.container}>
      {/* Header */}
      <header style={emailStyles.header}>
        <h1 style={emailStyles.logo}>Automate To Sell</h1>
      </header>

      {/* Body */}
      <main style={emailStyles.body}>
        <h2 style={emailStyles.greeting}>Hi {recipientName},</h2>
        
        <p style={emailStyles.message}>
          {message}
        </p>

        {/* Features Section */}
        <div style={emailStyles.features}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600', color: 'hsl(222.2, 47.4%, 11.2%)' }}>
            Our AI Automation Services Include:
          </h3>
          <ul style={emailStyles.featuresList}>
            <li style={emailStyles.featureItem}>🧠 AI Solutions & Intelligent Agents</li>
            <li style={emailStyles.featureItem}>⚡ Sales & Marketing Automation</li>
            <li style={emailStyles.featureItem}>🌐 E-Commerce Global Systems</li>
            <li style={emailStyles.featureItem}>📱 Social Content & Distribution</li>
            <li style={emailStyles.featureItem}>🚀 Vibe Coding & Rapid Prototyping</li>
            <li style={{ ...emailStyles.featureItem, border: 'none' }}>🎓 Training & Workshops</li>
          </ul>
        </div>

        {/* CTA */}
        {ctaUrl && (
          <div style={emailStyles.ctaContainer}>
            <a href={ctaUrl} style={emailStyles.ctaButton}>
              {ctaText}
            </a>
          </div>
        )}

        <p style={emailStyles.message}>
          We're excited to help you work smarter and grow faster with intelligent automation that serves your strategy.
        </p>

        {/* Signature */}
        <div style={emailStyles.signature}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '600' }}>Best regards,</p>
          <p style={{ margin: '0' }}>The Automate To Sell Team</p>
          <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
            AI Automation Consultancy | <a href="https://automatetosell.com" style={{ color: 'hsl(217, 91%, 60%)' }}>automatetosell.com</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={emailStyles.footer}>
        <p style={{ margin: '0 0 8px 0' }}>
          © 2024 Automate To Sell. All rights reserved.
        </p>
        <p style={{ margin: '0', fontSize: '12px' }}>
          Technology that serves your strategy, not replaces it.
        </p>
      </footer>
    </div>
  );
};

export default EmailTemplate;