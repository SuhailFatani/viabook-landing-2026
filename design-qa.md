# Design QA — Scroll Showcase (Figma 249:1850)

## Source of truth

- Figma file: `MNdUi7WoBwyzjLjYmtwBla`
- Node: `249:1850`
- Official Figma screenshot: `output/figma-249-1850.png` (1440×1000)
- Direct comparison: `output/figma-vs-code-small.jpg`

## Result

Status: PASS

- Uses the exact Figma-exported 1672×941 dashboard image.
- Uses the exact Figma gradient, cursor, web/mobile controls, quick-booking icon, and calendars icon.
- Uses the existing local `Thmanyah` Regular and Medium font files; browser font loading was verified.
- Desktop geometry is based on the Figma values: 1170px content/card width, 542px card height, 12px radius, 48/56 heading, 20/28 description, and 6px feature tracks.
- Arabic column order, browser chrome, control order, feature order, and typography match the official screenshot.
- Entry and center phases use the exact mobile composition cropped from the user-provided reference, not an AI-generated mock.
- Final state uses the exact Figma assets with subtle placeholder motion until the real product video is supplied.
- Web/mobile controls work only in phase three; feature progress alternates every six seconds.
- Heading, description, and feature content are binary by phase: opacity 0 in phases one/two and opacity 1 in phase three, with a short threshold-triggered entrance/exit animation rather than scroll-scrubbed opacity.
- Selector and button geometry stays fixed at 84×44 and 36×36 across all three card scales; hover and selected states do not resize the controls.
- The exact same live selector is rendered in mobile and web states: 84x44 outer size, 36x36 buttons, identical #2b315b background, position, shadow, hover, and selected states. Its opaque surface covers the selector baked into the mobile reference, so the control neither duplicates nor changes shape during scroll or manual switching.
- 1440×1000 and 390×844 render with no horizontal overflow and no browser console/page errors.
- Arabic/RTL and English/LTR remain functional.
- Production build passes with Vite.
- All motion durations, stagger delays, feature timers, and continuous loops were increased by exactly 15%; the scroll showcase height was increased from 360svh to 414svh (mobile 330svh to 379.5svh) to slow scroll-linked scaling by the same proportion.
- The showcase scroll progression was made an additional 10% heavier: 455.4svh desktop and 417.45svh compact. Native browser scrolling and all non-showcase animation timings remain unchanged.

## Why ViaBook (Figma 271:7336)

Status: PASS

- Exact Figma assets, Thmanyah typography, Arabic copy, 1170px desktop content width, 281x192 cards, 16px gaps, 12px radii, and 24px card padding are verified.
- Header/card reveal changes from opacity 0 to 1 on viewport entry and follows the established 15%-slower motion system.
- Arabic/RTL and English/LTR switching works; all four icons load successfully.
- 1440px desktop and 390px mobile have zero horizontal overflow, no console/page errors, and the production build passes.
## All Tools (Figma 242:4808)

Status: PASS

- Exact desktop frame geometry is verified: 1440x1416 section, 1170px content, 184px header, 494px rows, 16px gaps, top cards 527/627px, and bottom cards 687/467px.
- Uses four exact Figma-rendered card assets with live Arabic/English captions, Thmanyah/Outfit typography, and one-time viewport reveal.
- Tested at 1440, 1439, 1200, 1112, 1100, 720, and 390px; cards stay inside the content area with zero horizontal overflow.
- All assets load, Arabic/RTL and English/LTR switching works, console/page errors are empty, and the Vite production build passes.
## Scale Business (Figma 271:6621)

Status: PASS

- Exact 1440x722 section geometry is verified: 1170x542 inner frame, 594x542 map card, 32px gap, and 544x542 copy column.
- Uses the exact Figma-exported 462x411 Saudi dot map and building, user-cog, and monitor-smartphone SVG icons.
- The Arabic title is fixed to the two 56px lines defined by Figma node `271:7315`; the description, feature positions, Thmanyah typography, and colors match the source.
- Arabic/RTL and English/LTR language states work, and viewport entry uses the established one-time 15%-slower motion.
- Tested at 1440, 1439, 1200, 1112, 1100, 720, and 390px with zero horizontal overflow and all content contained.
- Browser console/page errors are empty and the Vite production build passes.
## FAQ (Figma 242:4693)

Status: PASS

- Exact initial desktop geometry is verified: 1440x692 section, 900x512 inner frame, and 900x400 accordion.
- Uses the exact Figma chevron asset at its original 14x8 glyph size inside a 24x24 control canvas.
- All four questions have useful Arabic and English answers; only one item opens at a time and the first item is open initially.
- `aria-expanded`, `aria-controls`, `aria-hidden`, and the visible answer update correctly after interaction.
- Tested at 1440, 1439, 1200, 1112, 1100, 720, and 390px with zero horizontal overflow and all content contained.
- Arabic/RTL and English/LTR work, console/page errors are empty, and the Vite production build passes.
- Browser runtime invocation was blocked by the Windows ACL helper; the previously approved local Playwright/Edge fallback completed all visual and interaction checks.
## Final CTA (Figma 242:4715)

Status: PASS

- Exact desktop geometry is verified: 1440x506 section, 1170x326 card at x=135, 90px vertical padding, and 12px radius.
- Uses the exact Figma-exported 1672x941 dashboard image and gradient SVG with the source crop, glass frame, and window controls.
- Arabic copy, Thmanyah typography, CTA sizing, colors, and RTL alignment match the source; English/LTR content and the language switch work.
- CTA links to the live product preview, viewport reveal uses the established 15%-slower motion, and reduced motion remains supported.
- Tested at 1440, 1439, 1200, 1112, 1101, 1100, 720, 620, 390, and 320px with zero horizontal overflow and all text/buttons contained.
- Browser console/page errors are empty, all assets load, and the Vite production build passes.
- Browser runtime invocation was blocked by the Windows ACL helper; the previously approved local Playwright/Edge fallback completed visual, language, interaction, and responsive checks.
## Footer (Figma 242:4731)

Source visual truth: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/footer-figma.png
Implementation screenshot: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/footer-desktop.png
Full-view comparison: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/footer-comparison.jpg
Focused comparison: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/footer-focus-comparison.png
Viewport and density: 1440x900 CSS viewport, footer element 1440x481 CSS pixels, deviceScaleFactor 1; source and implementation are both 1440x481 pixels, so no density normalization was required.
State: Arabic/RTL, footer reveal complete.

Findings:
- No actionable P0/P1/P2 mismatch remains.
- Fonts and typography: local Thmanyah Regular/Medium and Cal Sans wordmark match the 18/26 and 21.353px source hierarchy; English switches to Outfit.
- Spacing and layout rhythm: exact 90/135 section padding, 1170x301 inner frame, 148px row gap, 361x127 link group, divider x=315, bottom y=365, and 12/24px icon canvases are verified.
- Colors and tokens: background #f9f9fb, heading #18181b, labels/icons #71717a/#a1a1aa, divider #e4e4e7, and brand colors match Figma.
- Image quality and asset fidelity: exact Figma-exported logo, X, mail, and arrow SVGs load at natural size with no substitutions.
- Copy and content: placeholder strings were intentionally replaced with real Explore/Support navigation, copyright, privacy, and terms while preserving the source information architecture.
- Full-view and focused combined comparisons confirm the same frame, spacing, alignment, typography scale, logo, divider, icons, and bottom-row geometry. The content labels are the only intentional visual difference.
- Responsive checks passed at 1439, 1200, 1112, 1101, 1100, 720, 620, 390, and 320px with zero horizontal overflow and all groups contained.
- Arabic/RTL and English/LTR work; the in-page feature link reaches its target after smooth scrolling; email/social/legal hrefs are present; console and page errors are empty.
- Browser runtime was blocked by the Windows ACL helper, so the previously approved Playwright/Edge fallback produced the browser-rendered evidence.

Comparison history:
- Initial P2: the two-column group was 300px wide and divider x=284 instead of the source 361px and x=315. Fixed by preserving the Figma 60px gaps around the divider and re-captured; post-fix metrics and focused comparison now match.
- Initial P2: legal arrow used the 12px glyph as its full element instead of the source 24px control canvas. Fixed with a 24px object-fit canvas and re-captured; post-fix focused comparison matches.

Primary interactions tested: internal feature navigation, language switch, logo/home link href, email href, X href, privacy/terms hrefs, hover/focus CSS presence.
Console errors checked: none.
Build: Vite production build passed.

final result: passed

## Responsive Navigation — Framer-inspired mobile/tablet menu

Source visual truth:
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-75470fae-13c6-4b02-94f0-9b2449859db4.png (Framer closed state)
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-9a787f24-06d7-47ca-8b53-b0fd615fc95a.png (Framer open state)

Implementation screenshots:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/viabook-menu-closed-final.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/viabook-menu-open-final.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/viabook-menu-open-320.png

Full-view comparison evidence:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/menu-qa-closed-final.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/menu-qa-open-final.png

Viewport and density:
- Final user-facing evidence: 390x844 CSS pixels at deviceScaleFactor 1; implementation pixels are 390x844.
- Like-for-like design comparisons: closed 654x733 and open 654x655 CSS pixels at deviceScaleFactor 1; source and implementation were normalized into equal 654px panels with no density mismatch.
State: Arabic/RTL closed and open; English/LTR switch verified.

Findings:
- No actionable P0/P1/P2 mismatch remains.
- Fonts and typography: the existing ViaBook Arabic typography and bilingual Outfit fallback remain unchanged; open-menu hierarchy is large, left/right-direction aware, and does not wrap or clip at 320–1100px.
- Spacing and layout rhythm: the circular control and dropdown card were removed. The fixed 40/44px hit target has no visible background, border, or radius; the 24x2px strokes retain one position while transforming into a centered X. The menu fills the viewport and preserves logo/control alignment.
- Colors and visual tokens: Framer's full-screen dark treatment is adapted to ViaBook navy #11142f with white content and restrained translucent CTA treatment.
- Image quality and asset fidelity: the existing exact ViaBook logo asset remains unchanged. No product imagery was replaced.
- Copy and content: existing Arabic/English navigation, login, start, and language actions are preserved.
- Interaction states: the three lines morph to X and back over 345ms; the full-screen reveal uses 460ms easing, links/actions enter once with light stagger, hover and focus states are present, and reduced motion is effectively instant.
- Responsive checks passed at 1101, 1100, 654, 390, and 320px with zero horizontal overflow. The compact menu appears through 1100px and closes automatically at 1101px.
- Open state locks page scrolling; Escape, menu links, and language switch all close the menu. AR/RTL switches to EN/LTR correctly.
- Console and page errors are empty. Vite production build passed.
- Browser runtime invocation was blocked by the Windows ACL helper; the previously approved Playwright/Edge fallback produced the rendered evidence and interaction checks.

Focused-region evidence:
- A separate crop was not needed because the 1308px-wide combined comparisons keep both header controls readable. DOM verification additionally confirms three 24x2px strokes, final ±45° transforms, middle-stroke opacity 0, transparent background, zero border/radius, and stable 40/44px button geometry.

Comparison history:
- Initial P1 from the prior implementation: circular icon button plus swapped List/X glyphs caused an obvious shape and size jump. Fixed with one persistent three-stroke control and matched open/closed geometry.
- Initial P1 from the prior implementation: small rounded dropdown card did not match the supplied full-screen Framer menu. Fixed with a viewport-filling dark layer and vertically stacked navigation.
- Initial capture mismatch: the first closed-state QA image was taken before the hero entrance completed. Re-captured after 1300ms and rebuilt the combined comparison; final evidence shows full-opacity, stable alignment.

Primary interactions tested: open, close by button, close by Escape, close by navigation link, close and locale change through language action, automatic close above breakpoint.
Console errors checked: none.
Build: Vite production build passed.

final result: passed


## Single-tone dark navbar — supplied reference adaptation

Source visual truth:
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-ade904a0-7981-411b-8114-21cd4f223bd5.png

Implementation screenshots:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-desktop-top.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-desktop-scroll.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-mobile-scroll.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-mobile-menu.png

Comparison evidence:
- Full view: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-comparison.jpg
- Focused navbar region: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-dark-focus-comparison.jpg

Viewport and density:
- Desktop: 1440x900 CSS pixels, deviceScaleFactor 1; screenshots are 1440x900 pixels.
- Mobile: 390x844 CSS pixels, deviceScaleFactor 1; screenshots are 390x844 pixels.
- No density normalization was needed for implementation evidence. The supplied reference is a concept reference with a different page crop, so the comparison focuses on navbar treatment and behavior rather than page content.

State:
- Arabic/RTL at page top, after scrolling 2382px, compact mobile state, and full-screen mobile menu open/closed.

Findings:
- No actionable P0/P1/P2 mismatch remains.
- Fonts and typography: the existing local Thmanyah/Outfit hierarchy is preserved; link and CTA sizes remain unchanged from the approved ViaBook navbar.
- Spacing and layout rhythm: desktop top state remains 1170x44 at y=40 and visually integrates with the hero. Scrolled state becomes a centered 1170x64 box at y=16 with 14px horizontal padding and a 14px radius. Mobile scrolled state is 362x56 at y=16 with no horizontal overflow.
- Colors and tokens: the reference's one-tone dark treatment is intentionally adapted to ViaBook navy rgba(17,20,47,.97), with white links/logo, subtle white border, and the existing white primary CTA. It never switches to a light theme.
- Image quality and asset fidelity: the exact existing ViaBook logo asset remains unchanged; no visible asset was replaced or approximated.
- Copy and content: all approved Arabic/English navigation and actions remain intact.
- Interaction: the navbar stays visible in both scroll directions. The compact menu fills exactly 390x844, the two lines morph to X, and closing returns aria-expanded=false with two lines.
- Responsiveness: desktop and mobile have zero horizontal overflow. The navbar is the top hit-tested element both before and after scroll, including over the scroll-showcase stacking context.
- Console/runtime errors checked: none.
- Production build: passed with Vite.

Comparison history:
- Initial P1: adaptive light/dark sampling and hide-on-scroll behavior conflicted with the supplied single-tone reference. Removed both; the navbar now uses one dark treatment and remains visible.
- Initial P1: the fixed header was trapped inside the hero stacking context and could be covered by the sticky showcase. Moved the header to the page root while preserving the hero spacer; post-fix hit testing confirms the header remains on top.
- Initial P2: the compact full-screen menu inherited the floating header's side margins. Corrected the menu viewport geometry to 0,0,390,844 and removed its card border/radius.

final result: passed


## Full-width adaptive glass navbar — revised direction

This section supersedes the earlier floating dark-box navbar direction.

Source visual truth:
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-ade904a0-7981-411b-8114-21cd4f223bd5.png (2048x701 pixels)

Implementation screenshots:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-top-dark.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-scroll-light.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-scroll-dark.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-mobile-light.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-mobile-menu.png

Comparison evidence:
- Full view: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-comparison.jpg
- Focused navbar region: C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-glass-focus-comparison.jpg

Viewport and density:
- Desktop: 1440x900 CSS pixels at deviceScaleFactor 1; implementation screenshots are 1440x900 pixels.
- Mobile: 390x844 CSS pixels at deviceScaleFactor 1; implementation screenshots are 390x844 pixels.
- The reference is a different page crop, so comparison is normalized around the full-width navbar anatomy and visual treatment rather than underlying page content.

State:
- Arabic/RTL at the dark hero top, light page content after scroll, dark final CTA after scroll, mobile light state, and full-screen mobile menu open/closed.

Findings:
- No actionable P0/P1/P2 mismatch remains.
- Fonts and typography: approved Thmanyah/Outfit navigation typography and existing sizes remain unchanged; text transitions smoothly between white and ViaBook navy.
- Spacing and layout rhythm: the glass surface spans the full 1416px layout viewport with 0px radius and no floating side gap. The centered desktop content remains 1170x64 after scroll; mobile content remains 362x56 while the glass spans all 390px.
- Colors and tokens: dark surfaces use a translucent white 13%→5.5% product-style gradient; light surfaces use a translucent white 72%→50% gradient. Both use 22px blur, 145% saturation, a subtle bottom edge, and restrained shadow. Foreground switches to white over dark and #161935 over light.
- Image quality and asset fidelity: the exact existing ViaBook logo remains in use. The source's full-width treatment is preserved; the translucent gradient/blur is an intentional user-requested adaptation.
- Copy and content: all approved Arabic/English navigation, language, login, and start actions remain unchanged.
- Interaction and accessibility: the navbar stays visible during scrolling, foreground changes in 288ms, focus outlines inherit the active foreground, and the mobile two-line control opens a 390x844 menu then closes back to two lines.
- Responsiveness: no horizontal overflow at 1440x900 or 390x844. The glass pseudo-layer reports 0px radius and matches the full viewport width in both states.
- Console/runtime errors checked: none.
- Production build: passed with Vite.

Comparison history:
- Initial P1: the previous implementation was a rounded floating dark box. Removed the box radius, side margins, opaque navy surface, and floating shadow; replaced it with a viewport-wide glass layer.
- Initial P1: the first adaptive pass kept white foreground in the light state because earlier CSS had higher specificity. Added explicit final theme selectors; post-fix computed foreground/link color is rgb(22,25,53) on light and rgb(255,255,255) on dark.
- Initial P2: the scrolled mobile menu began at y=-17 after the header moved to y=0. Added a scrolled-menu alignment override; post-fix menu geometry is exactly 0,0,390,844.
- Dark-surface validation: the final CTA card is hit-tested as data-nav-theme=dark and the navbar switches back to white content with the translucent dark-surface glass treatment.

Primary interactions tested:
- Scroll from hero to a light section, continue to the dark CTA, open the mobile menu, close it, and verify the two-stroke control returns.

final result: passed

## Navbar blur and vertical-padding polish

Source visual truth:
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-bbd4462c-54a4-467f-8a83-375e1c57c7c6.png (2495x146 pixels)

Implementation screenshots:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-polish-desktop-light-scrolled.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-polish-desktop-dark-final.png
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-polish-mobile-light-scrolled.png

Comparison evidence:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-polish-comparison.jpg

Findings:
- Desktop scrolled navbar is 72px tall with 14px top and bottom padding; mobile is 64px tall with 10px top and bottom padding.
- The full-width glass layer remains 1440px/390px wide and uses blur(22px) saturate(145%).
- Computed bottom border is 0px/none and computed box shadow is none in light and dark states.
- Adaptive foreground remains navy rgb(22,25,53) over light content and white rgb(255,255,255) over the dark CTA.
- Horizontal overflow is 0 at 1440x900 and 390x844.
- No typography, navigation content, menu behavior, colors, or component geometry outside vertical navbar padding changed.

final result: passed

## Navbar blur visibility correction

Source visual truth:
- C:/Users/suhai/AppData/Local/Temp/codex-clipboard-7e40c133-7e01-4589-8019-9173042bb48a.png (1251x136 pixels)

Implementation screenshots:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-blur-layer-desktop.png (1440x900 pixels)
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-blur-layer-mobile.png (390x844 pixels)

Comparison evidence:
- C:/Users/suhai/.codex/visualizations/2026/08/09/019fe837-d309-7670-a6e0-b2c5cae8aaa2/navbar-blur-before-after.jpg

State and viewport:
- Arabic/RTL, scrolled light section with the booking-control heading intentionally positioned behind the navbar.
- Desktop 1440x900 and mobile 390x844 at deviceScaleFactor 1.

Findings and comparison history:
- Initial P1: the 22px backdrop-filter was computed but the glass pseudo-element remained inside the header's isolated stacking context, so the visible result looked like a white tint and the heading stayed readable.
- Fix: moved the frosted surface to an independent full-viewport sibling layer below the header content, removed the pseudo-layer, and raised blur to 42px with 150% saturation.
- Post-fix evidence: the heading region behind the 72px desktop / 64px mobile glass strip is visibly diffused while navbar controls remain sharp.
- Border remains 0px, shadow remains none, horizontal overflow remains 0, and the mobile menu opens to aria-expanded=true then closes to false.
- Page identity, meaningful content, console health, desktop/mobile rendering, and interaction proof passed. No relevant console errors or warnings were captured.

final result: passed