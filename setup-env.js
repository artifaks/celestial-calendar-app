#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🌟 Setting up Celestia Scope Development Environment...\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Stripe Configuration (for eBook sales)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Email Configuration (optional)
RESEND_API_KEY=your_resend_api_key_here

# Development Settings
NODE_ENV=development
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local created! Please update with your actual API keys.\n');
} else {
  console.log('✅ .env.local already exists\n');
}

// Check for required directories
const requiredDirs = [
  'public/images/ebooks',
  'src/components',
  'src/lib',
  'src/config'
];

requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

console.log('\n🎉 Setup complete! Here\'s what you need to do next:\n');
console.log('1. 📝 Update .env.local with your actual API keys');
console.log('2. 🚀 Run "npm run dev" to start the development server');
console.log('3. 🌐 Open http://localhost:3000 in your browser');
console.log('4. 📚 Visit http://localhost:3000/ebook to test the eBook functionality');
console.log('\n📖 For production, you\'ll need to:');
console.log('- Upload actual eBook PDFs to Supabase Storage');
console.log('- Update the download URLs in src/app/api/get-ebook-download/route.ts');
console.log('- Configure Stripe webhooks for production');
console.log('- Set up proper environment variables in your hosting platform'); 