import Title from "../components/Title"

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="text-xl sm:text-2xl my-3 text-center">
                <Title text1="Privacy" text2="Policy" />
            </div>
            <div class="max-w-4xl mx-auto px-4 py-2">
                <p class="text-sm text-gray-600 mb-4">Effective Date: [12 March 2025]</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h2>
                <p class="text-sm text-gray-600 mb-2">We collect the following types of information when you use our website:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing address, payment details.</li>
                    <li><strong>Account Information:</strong> Username, password, and purchase history.</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
                </ul>

                <h2 class="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                <p class="text-sm text-gray-600 mb-2">We use your information to:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li>Process and fulfill orders</li>
                    <li>Provide customer service and respond to inquiries</li>
                    <li>Improve our website and services</li>
                    <li>Send you updates about your order and promotional offers (only with your consent)</li>
                    <li>Prevent fraud and ensure website security</li>
                </ul>

                <h2 class="text-lg font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
                <p class="text-sm text-gray-600 mb-2">We do <strong>not sell or rent</strong> your personal information. We may share your data with:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li>Trusted third-party services (like payment processors and shipping companies)</li>
                    <li>Law enforcement or government officials if required by law</li>
                </ul>
                <p class="text-sm text-gray-600 mb-4">All third-party partners are required to keep your data secure and use it only for the services we request.</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">4. Cookies and Tracking</h2>
                <p class="text-sm text-gray-600 mb-2">Our website uses cookies and similar technologies to:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li>Improve user experience</li>
                    <li>Track website usage and preferences</li>
                    <li>Deliver personalized content</li>
                </ul>
                <p class="text-sm text-gray-600 mb-4">You can control cookies through your browser settings.</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">5. Your Rights</h2>
                <p class="text-sm text-gray-600 mb-2">You have the right to:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your account</li>
                    <li>Withdraw consent for marketing emails at any time</li>
                </ul>
                <p class="text-sm text-gray-600 mb-4">To make such requests, please contact us at [your email/contact page].</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">6. Data Security</h2>
                <p class="text-sm text-gray-600 mb-2">We implement strong security measures to protect your data, including:</p>
                <ul class="list-disc list-inside text-sm text-gray-600 mb-4">
                    <li>SSL encryption</li>
                    <li>Secure payment gateways</li>
                    <li>Regular monitoring for security breaches</li>
                </ul>

                <h2 class="text-lg font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
                <p class="text-sm text-gray-600 mb-4">Our website is not intended for children under the age of 13. We do not knowingly collect personal data from minors.</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
                <p class="text-sm text-gray-600 mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Effective Date."</p>

                <h2 class="text-lg font-semibold mt-6 mb-2">9. Contact Us</h2>
                <p class="text-sm text-gray-600 mb-1">If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
                <p class="text-sm text-gray-600">Email: <a href="mailto:Example@contact.com">Example@contact.com</a></p>
                <p class="text-sm text-gray-600">Phone: <a href="tel:+1-234-567-8901">+1-234-567-8901</a></p>
                <p class="text-sm text-gray-600">Address: Your Business Address</p>
            </div>
        </div>
    )    
}

export default PrivacyPolicy;