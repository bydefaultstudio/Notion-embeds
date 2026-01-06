# Project Brief  
**Notion Embeds Library**

---

## 1. Project Summary

**In one sentence:**  
Build a collection of lightweight, responsive embeds that add missing functionality to Notion pages.

---

## 2. Problem & Opportunity

### Problem
- Notion is flexible but limited.
- Many useful utilities are not native.
- Teams rely on workarounds, manual checks, or external tabs.

**Examples**
- No simple way to see team time zones at a glance.
- No live or interactive utilities.
- Limited custom UI or logic inside pages.

### Opportunity
- Small, focused embeds unlock real value.
- Embeds feel native when designed well.
- One embed can remove repeated friction across many pages.

---

## 3. Goals

### Primary goals
- Extend Notion with useful, non-native functionality.
- Make embeds easy to drop into any Notion page.
- Ensure embeds work across desktop, tablet, and mobile.

### Secondary goals
- Create a reusable system for future embeds.
- Keep setup simple and low-maintenance.
- Allow embeds to evolve without breaking existing pages.

---

## 4. Non-Goals (Out of Scope)

This project will not include:
- A full Notion alternative.
- Complex user accounts or authentication.
- Heavy dashboards or data-heavy tools.
- Native Notion API features that require deep permissions.

---

## 5. Audience

### Primary audience
- Designers  
- Founders  
- Remote teams  
- Notion power users  

### Secondary audience
- Agencies  
- Product teams  
- Operations and project managers  

---

## 6. Success Criteria

This project is successful if:
- Embeds load reliably inside Notion.
- Embeds feel visually clean and intentional.
- Setup takes minutes, not hours.
- Users reuse embeds across multiple pages.
- Feedback highlights reduced friction or time saved.

---

## 7. Constraints & Requirements

### Timeline
- Ongoing, iterative build.
- First usable embeds shipped early.

### Platforms
- Notion embeds only.
- Web-based.
- Fully responsive.

### Technical constraints
- Must work inside Notion’s iframe embed system.
- No reliance on unsupported Notion features.
- Minimal external dependencies where possible.

### Accessibility
- Clear contrast.
- Readable type.
- Keyboard-safe where relevant.

### Performance
- Fast load times.
- No unnecessary scripts.
- Safe to embed multiple times on a single page.

---

## 8. Design & Build Notes

### Design approach
- Minimal UI.
- Utility-first.
- Designed to sit quietly inside a Notion page.

### Initial embed ideas
- Timezone clocks for team members.
- Live date and time utilities.
- Status indicators.
- Simple interactive tools Notion lacks.

### Build approach
- Each embed works standalone.
- Shared base styles and logic where possible.
- Easy to update without user intervention.

### Known risks
- Notion iframe limitations.
- Overbuilding features too early.
- Balancing flexibility with simplicity.

---

## 9. Open Questions

- Which embeds should ship first?
- Should embeds support configuration options?
- Is public sharing required or private use only?
- Do embeds need theming to match Notion pages?
- Should usage be tracked for future prioritisation?