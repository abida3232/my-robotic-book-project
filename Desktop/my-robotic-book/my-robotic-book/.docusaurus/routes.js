import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-robotic-book-project/blog/',
    component: ComponentCreator('/my-robotic-book-project/blog/', 'd76'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/archive/',
    component: ComponentCreator('/my-robotic-book-project/blog/archive/', '17b'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/authors/',
    component: ComponentCreator('/my-robotic-book-project/blog/authors/', '63b'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/my-robotic-book-project/blog/authors/all-sebastien-lorber-articles/', '524'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/authors/yangshun/',
    component: ComponentCreator('/my-robotic-book-project/blog/authors/yangshun/', 'c93'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/first-blog-post/',
    component: ComponentCreator('/my-robotic-book-project/blog/first-blog-post/', 'd3b'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/long-blog-post/',
    component: ComponentCreator('/my-robotic-book-project/blog/long-blog-post/', '698'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/mdx-blog-post/',
    component: ComponentCreator('/my-robotic-book-project/blog/mdx-blog-post/', '272'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/tags/',
    component: ComponentCreator('/my-robotic-book-project/blog/tags/', '6cf'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/tags/docusaurus/',
    component: ComponentCreator('/my-robotic-book-project/blog/tags/docusaurus/', 'd50'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/tags/facebook/',
    component: ComponentCreator('/my-robotic-book-project/blog/tags/facebook/', 'fc1'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/tags/hello/',
    component: ComponentCreator('/my-robotic-book-project/blog/tags/hello/', '7fa'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/tags/hola/',
    component: ComponentCreator('/my-robotic-book-project/blog/tags/hola/', 'e83'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/blog/welcome/',
    component: ComponentCreator('/my-robotic-book-project/blog/welcome/', '9f9'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/markdown-page/',
    component: ComponentCreator('/my-robotic-book-project/markdown-page/', '0ba'),
    exact: true
  },
  {
    path: '/my-robotic-book-project/docs/',
    component: ComponentCreator('/my-robotic-book-project/docs/', '85b'),
    routes: [
      {
        path: '/my-robotic-book-project/docs/',
        component: ComponentCreator('/my-robotic-book-project/docs/', '70d'),
        routes: [
          {
            path: '/my-robotic-book-project/docs/',
            component: ComponentCreator('/my-robotic-book-project/docs/', 'aa6'),
            routes: [
              {
                path: '/my-robotic-book-project/docs/',
                component: ComponentCreator('/my-robotic-book-project/docs/', '5ea'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/appendix-hardware-guide/',
                component: ComponentCreator('/my-robotic-book-project/docs/appendix-hardware-guide/', '0c0'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/intro/',
                component: ComponentCreator('/my-robotic-book-project/docs/intro/', 'a9b'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/part1-foundations/chapter1-principles/',
                component: ComponentCreator('/my-robotic-book-project/docs/part1-foundations/chapter1-principles/', '1c8'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part1-foundations/chapter2-landscape/',
                component: ComponentCreator('/my-robotic-book-project/docs/part1-foundations/chapter2-landscape/', 'c1f'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part1-foundations/chapter3-sensors/',
                component: ComponentCreator('/my-robotic-book-project/docs/part1-foundations/chapter3-sensors/', '202'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part2-ros/chapter4-core-concepts/',
                component: ComponentCreator('/my-robotic-book-project/docs/part2-ros/chapter4-core-concepts/', '37b'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part2-ros/chapter5-packages/',
                component: ComponentCreator('/my-robotic-book-project/docs/part2-ros/chapter5-packages/', 'ab1'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part2-ros/chapter6-urdf/',
                component: ComponentCreator('/my-robotic-book-project/docs/part2-ros/chapter6-urdf/', 'f4c'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part3-simulation/chapter7-gazebo/',
                component: ComponentCreator('/my-robotic-book-project/docs/part3-simulation/chapter7-gazebo/', 'a2d'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part3-simulation/chapter8-isaac-sim/',
                component: ComponentCreator('/my-robotic-book-project/docs/part3-simulation/chapter8-isaac-sim/', 'f83'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/part3-simulation/chapter9-perception/',
                component: ComponentCreator('/my-robotic-book-project/docs/part3-simulation/chapter9-perception/', '509'),
                exact: true,
                sidebar: "bookSidebar"
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/congratulations/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/congratulations/', 'c17'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/create-a-blog-post/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/create-a-blog-post/', 'bb8'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/create-a-document/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/create-a-document/', '3b7'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/create-a-page/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/create-a-page/', 'c69'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/deploy-your-site/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/deploy-your-site/', '6b9'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-basics/markdown-features/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-basics/markdown-features/', 'faa'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-extras/manage-docs-versions/', '20d'),
                exact: true
              },
              {
                path: '/my-robotic-book-project/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/my-robotic-book-project/docs/tutorial-extras/translate-your-site/', '83f'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-robotic-book-project/',
    component: ComponentCreator('/my-robotic-book-project/', 'd41'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
