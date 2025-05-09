import BlogList from '@/components/blogs/BlogList';
// Removed Locale import
import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';

export { generateMetadata } from './page.metadata';

// Removed Props interface

// Updated function signature - no params needed
export default async function BlogsPage() {
  // Removed lang extraction logic
  return (
    <>
      <Hero />
      <BlogList />
      <Contact />
    </>
  );
}
