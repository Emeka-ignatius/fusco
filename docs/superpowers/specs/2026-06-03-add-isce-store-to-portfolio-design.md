# Design Spec: Add ISCE Store to Portfolio

## 1. Overview
The goal is to integrate the **ISCE Store** project (https://store.isce.tech) into the developer portfolio codebase (`c:\Users\TKT\codebase\personal\fusco`). This project showcases full-stack e-commerce, custom design previewing/upload systems, role-based controls, payment verification, and GIGL courier integrations.

## 2. Requirements & Constraints
- **Pattern Match**: Must follow the exact structure established in `/work` and `/work/[slug]` pages.
- **Data Store**: Implement as a static entry in the `projects` array in `lib/const.tsx` (Approach 1).
- **Featured**: Mark the project as `featured: true` so it is prominently showcased on the home page.
- **Image**: Use `/store.png` as the main cover image, which has already been added to the public folder.

## 3. Project Configuration Data
The project entry will contain the following key values:
- **ID**: `12`
- **Title**: `ISCE Store`
- **Slug**: `isce-store`
- **Year**: `2026`
- **Github URL**: `https://github.com/iscedcs/isce-tech-store-web`
- **Tags**: Includes `GIGL Integration`, `Next.js`, `TypeScript`, `React 19`, `Tailwind CSS`, `Prisma`, `PostgreSQL`, `NextAuth`, `Paystack`, `AWS S3`, `Resend`
- **Results**: 
  1. Value: `Paystack` / Label: `SECURE PAYMENTS`
  2. Value: `Real-time` / Label: `ORDER TRACKING`
  3. Value: `Dynamic` / Label: `PRODUCT CUSTOMIZATION`
- **Testimonial**:
  - Quote: `The customizer and order tracking pipeline completely removed our communication overhead. Customers know exactly what they are getting and where their order stands.`
  - Author: `Victor Itodo`
  - AuthorTitle: `Product Manager`

## 4. Proposed Changes
- **Target File**: `c:\Users\TKT\codebase\personal\fusco\lib\const.tsx`
- **Edits**: Add the complete `Project` object to the end of the `projects` array.

## 5. Verification Plan
- Verify that compiling the portfolio project does not throw any TypeScript or build errors.
- Ensure the project is displayed correctly on the homepage under "Featured Projects".
- Verify that navigating to `/work/isce-store` renders the project details page successfully with all sections.
