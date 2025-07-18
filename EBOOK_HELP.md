# 📚 eBook System Help Guide

## 🚀 Quick Start

Your development server should now be running at `http://localhost:3000`. Here's what I've fixed for the ebook functionality:

### ✅ Fixed Issues

1. **Missing Cover Images**: Updated all ebooks to use existing SVG images instead of missing PNG files
2. **Price ID Mismatch**: Standardized price IDs across all ebooks
3. **Missing eBook**: Added the "Moon's Embrace" ebook to all systems
4. **Download URLs**: Set up local testing with sample PDF
5. **Success Page**: Added proper title mapping for all ebooks

## 📖 Current eBooks Available

1. **Celestial Rhythms** ($4.99)
   - Cover: Crystals SVG
   - Category: Astrology
   - Pages: 156

2. **Herbal Healing** ($4.99)
   - Cover: Meditation SVG
   - Category: Healing
   - Pages: 142

3. **Unlocking the Stars** ($4.99)
   - Cover: Full Moon SVG
   - Category: Astrology
   - Pages: 168

4. **The Moon's Embrace** ($5.99)
   - Cover: New Moon SVG
   - Category: Healing
   - Pages: 56

## 🧪 Testing the eBook System

### 1. View the eBook Page
Visit `http://localhost:3000/ebook` to see the beautiful ebook showcase page.

### 2. Test Purchase Flow
- Click on any ebook to select it
- Click the purchase button
- You'll be redirected to Stripe checkout (if configured)
- After payment, you'll be redirected to the success page
- Click download to get the sample PDF

### 3. Test Without Stripe
If you don't have Stripe configured, you can still test the UI by:
- Visiting the ebook page
- Selecting different ebooks
- Viewing the product details and features

## 🔧 Configuration

### Environment Variables Needed

Add these to your `.env.local` file:

```bash
# Stripe Configuration (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here

# Supabase Configuration (for database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your test API keys from the dashboard
3. Add them to your `.env.local` file
4. Create products in Stripe with these price IDs:
   - `price_ebook_499` for $4.99 ebooks
   - `price_moons_embrace` for $5.99 ebook

## 📁 File Structure

```
src/
├── app/
│   ├── ebook/
│   │   ├── page.tsx              # Main ebook showcase page
│   │   └── success/
│   │       └── page.tsx          # Success page after purchase
│   └── api/
│       ├── create-checkout-session/
│       │   └── route.ts          # Stripe checkout creation
│       └── get-ebook-download/
│           └── route.ts          # Download link generation
├── config/
│   └── ebooks.ts                 # eBook data and configuration
└── components/
    └── ShareButton.tsx           # Social sharing component
```

## 🎨 Customization

### Adding New eBooks

1. **Update `src/config/ebooks.ts`**:
   ```typescript
   {
     id: 'your-ebook-id',
     title: 'Your eBook Title',
     subtitle: 'Your subtitle',
     description: 'Your description',
     coverImage: "/images/your-cover.svg",
     price: 4.99,
     priceId: 'price_ebook_499',
     category: 'astrology',
     // ... other fields
   }
   ```

2. **Update `src/app/api/create-checkout-session/route.ts`**:
   ```typescript
   'your-ebook-id': {
     title: 'Your eBook Title',
     description: 'Your description',
     image: 'your_cover_image_url',
     priceId: 'price_ebook_499',
     unitAmount: 499,
   }
   ```

3. **Update `src/app/api/get-ebook-download/route.ts`**:
   ```typescript
   'your-ebook-id': 'your_pdf_download_url'
   ```

4. **Update `src/app/ebook/success/page.tsx`**:
   ```typescript
   else if (ebookId === 'your-ebook-id') {
     setEbookTitle('Your eBook Title');
   }
   ```

### Changing Cover Images

Replace the SVG files in `public/images/` or update the `coverImage` paths in `src/config/ebooks.ts`.

## 🚀 Production Setup

### 1. Upload Real eBooks
- Upload your actual PDF files to Supabase Storage
- Update the download URLs in `src/app/api/get-ebook-download/route.ts`

### 2. Configure Stripe Webhooks
- Set up webhook endpoints in your Stripe dashboard
- Point them to your production domain
- Handle successful payments and failed payments

### 3. Environment Variables
- Set all environment variables in your hosting platform
- Use production API keys (not test keys)

### 4. Database Setup
- Run the SQL scripts in `supabase-setup.sql`
- Set up Row Level Security policies
- Configure Supabase Storage buckets

## 🐛 Troubleshooting

### Common Issues

1. **"Stripe is not configured"**
   - Check your `STRIPE_SECRET_KEY` in `.env.local`
   - Make sure you're using the correct API keys

2. **"Payment failed"**
   - Use Stripe test cards for testing
   - Check Stripe dashboard for error details

3. **"Download link failed"**
   - Check the download URLs in the API
   - Ensure PDF files are accessible

4. **Cover images not showing**
   - Check the image paths in `src/config/ebooks.ts`
   - Ensure SVG files exist in `public/images/`

### Debug Mode

Add this to your `.env.local` for more detailed error messages:
```bash
NODE_ENV=development
DEBUG=stripe:*
```

## 📞 Support

If you need help with:
- Stripe integration
- Supabase setup
- Customizing the ebook system
- Adding new features

Check the main `README.md` file for more detailed setup instructions.

## 🎯 Next Steps

1. **Test the current system** at `http://localhost:3000/ebook`
2. **Configure Stripe** for payment processing
3. **Upload real eBooks** to Supabase Storage
4. **Customize the design** to match your brand
5. **Add analytics** to track sales and downloads

Happy coding! 🌟 