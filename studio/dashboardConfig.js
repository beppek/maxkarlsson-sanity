export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfd8fc44e46f0b31a664f55',
                  title: 'Sanity Studio',
                  name: 'maxkarlsson-sanity-studio',
                  apiId: '3c152c63-eb0c-4ee7-a2e4-7855f6cb6ef0'
                },
                {
                  buildHookId: '5dfd8fc464a22cb9719759c0',
                  title: 'Blog Website',
                  name: 'maxkarlsson-sanity',
                  apiId: '2b2bcb45-81ab-4088-93a7-f523408f7305'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beppek/maxkarlsson-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://maxkarlsson-sanity.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
