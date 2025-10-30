# Taboo Card Game - Design Guidelines

## Design Approach

**Custom Game-Focused Design**
This is a specialized interactive game application requiring a unique card-based interface. The design prioritizes clarity, readability, and smooth interactions while maintaining the playful aesthetic of a card game. The visual style is bold and structured, with distinct color zones that create clear information hierarchy.

## Core Design Elements

### A. Typography

**Font Selection:**
- Primary Font: Inter or DM Sans (via Google Fonts CDN)
- Fallback: System sans-serif stack

**Type Scale:**
- Song Name (Header): 32px - 40px, bold (font-weight: 700), uppercase, letter-spacing: 0.05em
- Taboo Words (Center): 20px - 24px, semi-bold (font-weight: 600), uppercase
- Hint Text (Footer): 14px - 16px, regular (font-weight: 400), italic for emphasis
- Button Text/Icons: 24px - 32px for icon size

**Hierarchy Rules:**
- Song name is the most prominent element - use maximum contrast
- Taboo words should be easily scannable at a glance
- Hint text is supportive information, smaller and subtle

### B. Layout System

**Spacing Units (Tailwind):**
Primary spacing scale: 2, 4, 6, 8, 12, 16 (p-2, p-4, p-6, p-8, p-12, p-16)

**Card Structure:**
- Card container: max-width of 400px - 500px on desktop, full-width with 4-6 unit margin on mobile
- Card height: Auto-height based on content, minimum 500px to maintain presence
- Border radius: Rounded-2xl (16px) for card, rounded-full for buttons
- Card shadow: Large shadow (shadow-2xl) to create elevation and depth

**Layout Zones:**
- Header: Padding of 6-8 units vertical, centered text
- Center Box: Padding of 8-12 units, background treatment distinguishing it from header/footer
- Footer: Padding of 6-8 units vertical, centered text
- Button Container: Positioned below card with 8-12 units gap, flexbox centered with 16-24 units horizontal spacing between buttons

**Responsive Behavior:**
- Mobile (< 768px): Stack card vertically, buttons at 60-70px diameter
- Desktop (≥ 768px): Maintain card proportions, buttons at 80-90px diameter
- Card maintains consistent aspect ratio and readability across breakpoints

### C. Component Library

**Card Component:**
- Outer container with rounded corners and shadow elevation
- Three distinct sections (header, center, footer) with clear visual separation
- Smooth transitions between cards (transform + opacity, 300-400ms duration)
- Center box contains three taboo words in vertical stack with consistent spacing (4-6 units between words)

**Circular Action Buttons:**
- Perfect circles using aspect-ratio: 1/1
- Red Cross Button (Left): Background with red tone, white X icon or "×" symbol
- Green Tick Button (Right): Background with green tone, white checkmark icon "✓"
- Both buttons: Same size, consistent shadow (shadow-lg), subtle scale on hover (scale-105)
- Icon/symbol centered within circle, 40-50% of button diameter

**Button Container:**
- Horizontal flexbox with space-between or gap-based spacing
- Centered horizontally on page
- Fixed position at bottom or natural flow below card (recommend natural flow for better mobile UX)

**Card Data Display:**
- Taboo words displayed as individual div elements stacked vertically
- Equal spacing between all three words
- Each word in its own container for potential future interactions (highlighting, animations)

### D. Interaction & Transitions

**Card Transitions:**
- Fade + slide effect when changing cards
- Exit: Opacity 0 + translateX(-20px or +20px based on button), 250ms
- Enter: Opacity 0→1 + translateX(20px or -20px) → 0, 300ms with 100ms delay
- Use transform and opacity for performance (GPU-accelerated)

**Button Interactions:**
- Hover: Subtle scale (1.05), shadow increase
- Active/Click: Scale down (0.95), brief pulse animation
- Disabled state: Reduced opacity (0.5), cursor not-allowed (if implementing card limits)

**Micro-interactions:**
- Button click triggers immediate card transition
- No loading states needed (instant card swaps from array)
- Smooth, polished feel with ease-out timing functions

## Visual Structure

**Page Layout:**
- Full viewport height container with centered content
- Card positioned in vertical center
- Buttons positioned below card with adequate breathing room (8-12 units)
- Background: Subtle gradient or solid neutral color (not white - use off-white or very light gray)

**Card Zone Treatments:**
- Header: Distinct background (navy blue per user spec), high contrast text
- Center Box: Different background (light blue per user spec), clearly separated from header/footer
- Footer: Distinct background (red per user spec), ensure text remains readable

**Information Hierarchy:**
1. Song name (largest, boldest)
2. Taboo words (prominent, scannable)
3. Hint text (supportive, smaller)
4. Action buttons (clear, accessible)

## Accessibility Considerations

- Minimum touch target: 44×44px for buttons (exceeds this with 60-90px circles)
- Color contrast ratios: Ensure text meets WCAG AA standards against all backgrounds
- Keyboard navigation: Tab through buttons, Enter/Space to activate
- Screen reader support: Semantic HTML, proper aria-labels on buttons ("Skip this card", "Correct guess")
- Focus indicators: Clear outline on keyboard focus (ring-2 ring-offset-2)

## Technical Implementation Notes

**Icons:**
Use Font Awesome or Heroicons via CDN for button icons (fa-times, fa-check or x-mark, check icons)

**No Images Required:**
This is a text-based card game - no hero images or photography needed

**Performance:**
- Preload next card data structure
- Use CSS transforms for animations (not left/top positioning)
- Minimal DOM manipulation - swap content, not recreate elements