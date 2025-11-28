export async function GET() {
  
  // 1. Use 'import.meta.glob' to find the files
  // This is the correct way to do it in a .js file
  const modules = import.meta.glob('./blog/**/*.md');
  
  // 2. Load all the .md file modules
  const allPosts = await Promise.all(
    Object.values(modules).map(module => module())
  );

  // 3. Create the data, using 'post.readingTime'
  const searchableData = allPosts.map(post => ({
    slug: post.url,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    category: post.frontmatter.category,
    date: post.frontmatter.date,
    readTime: post.readingTime, // Use the auto-generated readingTime
    heroImage: post.frontmatter.heroImage,
  }));

  // 4. Return the JSON response
  return new Response(
    JSON.stringify(searchableData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}