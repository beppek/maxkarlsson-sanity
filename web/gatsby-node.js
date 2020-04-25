/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns');
const config = require('./config');

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityCourse(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  const courses = (result.data.allSanityCourse || {}).nodes || [];

  courses.forEach(course => {
    const { id, slug = {} } = course;
    const path = `/${config.routes.learn}/${slug.current}/`;

    reporter.info(`Creating coure page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/course-template.tsx'),
      context: { id },
    });
  });

  postEdges.forEach(edge => {
    const { id, slug = {}, publishedAt } = edge.node;
    const dateSegment = format(publishedAt, 'YYYY/MM');
    const path = `/${config.routes.blog}/${dateSegment}/${slug.current}/`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.tsx'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
};
