# Specification

## Summary
**Goal:** Build a responsive marketing website for StrideCraft Shoes with a browsable product catalog, product detail views, and a working contact form backed by stable storage.

**Planned changes:**
- Create responsive pages/routes with shared navigation: Home, Shop (product listing), Product Details, About, Contact.
- Apply a consistent modern premium footwear theme using warm neutrals, charcoal/black, and a single accent color (avoid blue/purple as primary UI colors).
- Implement Shop page product grid with backend-driven data, including search (by name), category + price range filters, and price sorting (low-to-high, high-to-low).
- Implement Product Details page with images, name, price, description, selectable sizes, and a clearly styled CTA with a non-persistent UI action.
- Add Motoko backend queries for listing products and fetching a product by ID; seed at least 6 sample products in stable state.
- Build Contact page form (name, email, message) with validation; submit to backend and store timestamped submissions in stable state; show success/error states.
- Create About page with at least three brand story sections and a simple timeline/values list.
- Use React Query for product catalog queries and contact submission mutation, including loading, empty, and not-found states.
- Add a site-wide footer with key internal links, basic company info, and social placeholders.
- Add generated static images under `frontend/public/assets/generated` and reference them in Home (hero/logo) and Shop/Product Details (product images).

**User-visible outcome:** Users can navigate the StrideCraft Shoes site, browse and filter/sort shoes, view detailed product pages with sizes and a CTA, read the brand story, and submit messages via a contact form with clear success/error feedback.
