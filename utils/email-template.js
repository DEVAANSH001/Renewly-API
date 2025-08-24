export const generateEmailTemplate = ({
  userName,
  subscriptionName,
  renewalDate,
  planName,
  price,
  paymentMethod,
  accountSettingsLink,
  supportLink,
  daysLeft,
  isUrgent = false,
}) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f8fafc;">
  <!-- Main Container -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); margin: 20px auto;">
    
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center; padding: 32px 20px;">
        <h1 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">Renewly</h1>
        <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0; font-size: 14px;">Subscription Management Made Simple</p>
      </td>
    </tr>

    <!-- Content -->
    <tr>
      <td style="padding: 40px 32px;">
        <!-- Greeting -->
        <h2 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin: 0 0 24px;">
          Hi ${userName} 👋
        </h2>

        <!-- Urgency Badge (conditional) -->
        ${isUrgent ? `
        <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
          <span style="color: #dc2626; font-weight: 600; font-size: 14px;">⚡ Action Required</span>
        </div>
        ` : ''}

        <!-- Main Message -->
        <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px; line-height: 1.6;">
          Your <strong style="color: #667eea;">${subscriptionName}</strong> subscription will automatically renew on 
          <strong>${renewalDate}</strong>${daysLeft > 0 ? ` (${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} from now)` : ''}.
        </p>

        <!-- Subscription Details Card -->
        <div style="background-color: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #374151; font-size: 16px; font-weight: 600; margin: 0 0 16px; display: flex; align-items: center;">
            📋 Subscription Details
          </h3>
          
          <table cellpadding="8" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="font-size: 14px; color: #6b7280; padding-bottom: 8px; width: 30%;">
                <strong>Plan</strong>
              </td>
              <td style="font-size: 14px; color: #1f2937; padding-bottom: 8px;">
                ${planName}
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #6b7280; padding-bottom: 8px;">
                <strong>Price</strong>
              </td>
              <td style="font-size: 14px; color: #1f2937; padding-bottom: 8px;">
                <span style="color: #059669; font-weight: 600;">${price}</span>
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #6b7280; padding-bottom: 8px;">
                <strong>Payment</strong>
              </td>
              <td style="font-size: 14px; color: #1f2937; padding-bottom: 8px;">
                ${paymentMethod}
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; color: #6b7280;">
                <strong>Renewal Date</strong>
              </td>
              <td style="font-size: 14px; color: #1f2937;">
                ${renewalDate}
              </td>
            </tr>
          </table>
        </div>

        <!-- Action Buttons -->
        <div style="text-align: center; margin: 32px 0;">
          <a href="${accountSettingsLink}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px 12px; transition: all 0.3s ease;">
            Manage Subscription
          </a>
          <br>
          <a href="${supportLink}" style="display: inline-block; background-color: transparent; color: #667eea; padding: 12px 24px; text-decoration: none; border: 2px solid #667eea; border-radius: 8px; font-weight: 500; font-size: 14px; margin: 0 8px;">
            Contact Support
          </a>
        </div>

        <!-- Info Message -->
        <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #1e40af;">
            💡 <strong>Need to make changes?</strong> You can modify or cancel your subscription anytime in your account settings before the renewal date.
          </p>
        </div>

        <!-- Closing -->
        <p style="font-size: 14px; color: #6b7280; margin-top: 32px; line-height: 1.6;">
          Thank you for choosing Renewly to manage your subscriptions.<br>
          <strong style="color: #374151;">The Renewly Team</strong>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f9fafb; padding: 24px 32px; border-top: 1px solid #e5e7eb;">
        <div style="text-align: center;">
          <p style="margin: 0 0 12px; font-size: 13px; color: #6b7280;">
            Renewly - Smart Subscription Management
          </p>
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">
            <a href="#" style="color: #667eea; text-decoration: none; margin: 0 8px;">Unsubscribe</a>
            <span style="color: #d1d5db;">•</span>
            <a href="#" style="color: #667eea; text-decoration: none; margin: 0 8px;">Privacy Policy</a>
            <span style="color: #d1d5db;">•</span>
            <a href="#" style="color: #667eea; text-decoration: none; margin: 0 8px;">Terms of Service</a>
          </p>
        </div>
      </td>
    </tr>
  </table>
</div>
`;

export const emailTemplates = [
  {
    label: "7 days before reminder",
    generateSubject: (data) =>
      `📅 ${data.subscriptionName} renews in 7 days - Review your plan`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 7, isUrgent: false }),
  },
  {
    label: "5 days before reminder", 
    generateSubject: (data) =>
      `⏰ ${data.subscriptionName} renews in 5 days - Last chance to modify`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 5, isUrgent: false }),
  },
  {
    label: "3 days before reminder",
    generateSubject: (data) =>
      `🔔 ${data.subscriptionName} renews in 3 days - Action needed`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 3, isUrgent: true }),
  },
  {
    label: "1 day before reminder",
    generateSubject: (data) =>
      `⚡ Final notice: ${data.subscriptionName} renews tomorrow!`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 1, isUrgent: true }),
  },
  {
    label: "Renewal confirmation",
    generateSubject: (data) =>
      `✅ ${data.subscriptionName} successfully renewed - Receipt included`,
    generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 0, isUrgent: false }),
  },
];
