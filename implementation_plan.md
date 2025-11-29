# Implementation Plan - Modern Pest Control Website

## Goal Description
Create a premium, "Apple-like" pest control website with a black and white aesthetic. The site will be built with vanilla HTML/CSS/JS to ensure high performance and pixel-perfect control over the design. It will feature smooth animations, a minimalist layout, and a focus on typography and imagery.

## User Review Required
> [!IMPORTANT]
> **Conversion Focus**: The primary goal is driving phone calls to **416-438-9875**.
> - **Strategy**: 
>   - Sticky Header with prominent Phone CTA.
>   - Hero Section with large, clickable phone number.
>   - Mobile-first "Call Now" sticky bar or button.
>   - "Apple-like" aesthetic will be maintained, but the Phone CTA will be the primary "Action" color (likely a high-contrast white button on black, or vice-versa).

## Proposed Changes

### Project Structure
#### [NEW] [index.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/index.html)
- Main entry point.
- Semantic HTML5 structure.
- **Conversion Elements**:
    - Sticky Header with `tel:416-438-9875`.
    - Hero CTA: "Call for Immediate Service: 416-438-9875".
    - Floating Action Button (FAB) or Sticky Bottom Bar on mobile for calling.
- Sections: Header, Hero, Services, About/Why Us, Testimonials, Contact, Footer.

#### [NEW] [styles.css](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/styles.css)
- CSS Variables for colors, spacing, typography.
- Reset/Normalize.
- Utility classes for layout (Flexbox/Grid).
- Component styles.
- Animations (keyframes for fade-ins, slide-ups).

#### [NEW] [script.js](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/script.js)
- Smooth scrolling for navigation.
- Intersection Observer for scroll animations (elements fading in as they enter viewport).
- Mobile menu toggle.

#### [NEW] Service Pages
- Create individual pages for each service with consistent layout:
    - [residential.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/residential.html)
    - [commercial.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/commercial.html)
    - [wildlife.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/wildlife.html)
    - [bed-bugs.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/bed-bugs.html)
    - [rodents.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/rodents.html)
    - [insects.html](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/insects.html)
- **Content Structure**:
    - Hero Section (Service Name).
    - "What is it?" / Overview.
    - "Signs of Infestation".
    - "Our Solution" / Treatment.
    - CTA to Call.

### Design System
- **Colors**: 
  - Background: `#000000` (or very dark gray `#0a0a0a` for softer contrast), `#FFFFFF`.
  - Text: Inverse of background.
  - Accents: Greys (`#333`, `#888`, `#eee`).
- **Typography**: 
  - Primary Font: `Inter` or `SF Pro Display` (via system fonts stack).
  - Headings: Large, bold, tight tracking.
  - Body: Clean, readable, generous line height.
- **Imagery**:
  - High contrast, desaturated or B&W filtered images.
  - Minimalist icons.

### Design Refinements (Phase 2)
#### [MODIFY] [styles.css](file:///C:/Users/Dev/.gemini/antigravity/scratch/pest-control-site/styles.css)
- **Theme Update (Blue Accents)**:
    - Set `--accent` to `#2962ff` (Electric Blue).
    - Set `--accent-hover` to `#1e4bd1`.
    - Update CTA buttons to use this blue background with White text for high contrast.
    - Add subtle blue glows or borders to cards on hover to add "personality".
- **CTA Enhancements**:
    - Maintain the increased padding (`16px 32px` base, `20px 56px` large).
    - Maintain the increased font size.
- **Image Optimization**:
    - Reduce `.service-image` max-height to `300px` or `350px` (was 500px).
    - Ensure `object-fit: cover` is maintained.
- **Mobile Optimization**:
    - Increase padding in `.section` for mobile (better breathing room).
    - Ensure font sizes for `h1` and `h2` are appropriate on small screens.
    - Verify touch targets for buttons and links are at least 44px.

## Verification Plan

### Automated Tests
- None (Static site).

### Manual Verification
- **Visual Inspection**: Open `index.html` in the browser.
- **Responsiveness**: Resize window to check Mobile (375px), Tablet (768px), and Desktop (1440px) layouts.
- **Interactions**:
    - Hover over buttons (expect subtle scale/color shift).
    - Scroll down (expect elements to fade in smoothly).
    - Click navigation links (expect smooth scroll to section).
    - Open mobile menu (expect smooth transition).
