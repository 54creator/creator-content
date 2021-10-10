const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--platform-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/Platform.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--doc-page-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/DocPage.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--starter-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/Starter.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--plugin-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/Plugin.vue")
const c6 = () => import(/* webpackChunkName: "page--src--templates--contributor-vue" */ "/Users/zhangxuewen/gridsome.org/src/templates/Contributor.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--starters-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/Starters.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--logo-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/Logo.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--ecosystem-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/Ecosystem.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/Blog.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/404.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/zhangxuewen/gridsome.org/src/pages/Index.vue")

export default [
  {
    path: "/blog/:year/:month/:day/:slug/",
    component: c1
  },
  {
    path: "/starters/platform/:id/",
    component: c2
  },
  {
    path: "/docs/use-cases/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--use-cases-md" */ "/Users/zhangxuewen/gridsome.org/docs/use-cases.md")
    }
  },
  {
    path: "/docs/transformer-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--transformer-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/transformer-api.md")
    }
  },
  {
    path: "/docs/schema-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--schema-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/schema-api.md")
    }
  },
  {
    path: "/docs/server-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--server-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/server-api.md")
    }
  },
  {
    path: "/docs/taxonomies/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--taxonomies-md" */ "/Users/zhangxuewen/gridsome.org/docs/taxonomies.md")
    }
  },
  {
    path: "/docs/templates/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--templates-md" */ "/Users/zhangxuewen/gridsome.org/docs/templates.md")
    }
  },
  {
    path: "/docs/troubleshooting/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--troubleshooting-md" */ "/Users/zhangxuewen/gridsome.org/docs/troubleshooting.md")
    }
  },
  {
    path: "/docs/starters/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--starters-md" */ "/Users/zhangxuewen/gridsome.org/docs/starters.md")
    }
  },
  {
    path: "/docs/querying-data/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--querying-data-md" */ "/Users/zhangxuewen/gridsome.org/docs/querying-data.md")
    }
  },
  {
    path: "/docs/page-transitions/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--page-transitions-md" */ "/Users/zhangxuewen/gridsome.org/docs/page-transitions.md")
    }
  },
  {
    path: "/docs/pages-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--pages-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/pages-api.md")
    }
  },
  {
    path: "/docs/overriding-app/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--overriding-app-md" */ "/Users/zhangxuewen/gridsome.org/docs/overriding-app.md")
    }
  },
  {
    path: "/docs/overriding-index/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--overriding-index-md" */ "/Users/zhangxuewen/gridsome.org/docs/overriding-index.md")
    }
  },
  {
    path: "/docs/pages/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--pages-md" */ "/Users/zhangxuewen/gridsome.org/docs/pages.md")
    }
  },
  {
    path: "/docs/pagination/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--pagination-md" */ "/Users/zhangxuewen/gridsome.org/docs/pagination.md")
    }
  },
  {
    path: "/docs/prerendering/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--prerendering-md" */ "/Users/zhangxuewen/gridsome.org/docs/prerendering.md")
    }
  },
  {
    path: "/docs/prerequisites/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--prerequisites-md" */ "/Users/zhangxuewen/gridsome.org/docs/prerequisites.md")
    }
  },
  {
    path: "/docs/metadata/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--metadata-md" */ "/Users/zhangxuewen/gridsome.org/docs/metadata.md")
    }
  },
  {
    path: "/docs/how-to-create-a-plugin/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--how-to-create-a-plugin-md" */ "/Users/zhangxuewen/gridsome.org/docs/how-to-create-a-plugin.md")
    }
  },
  {
    path: "/docs/layouts/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--layouts-md" */ "/Users/zhangxuewen/gridsome.org/docs/layouts.md")
    }
  },
  {
    path: "/docs/linking/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--linking-md" */ "/Users/zhangxuewen/gridsome.org/docs/linking.md")
    }
  },
  {
    path: "/docs/how-it-works/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--how-it-works-md" */ "/Users/zhangxuewen/gridsome.org/docs/how-it-works.md")
    }
  },
  {
    path: "/docs/how-to-contribute/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--how-to-contribute-md" */ "/Users/zhangxuewen/gridsome.org/docs/how-to-contribute.md")
    }
  },
  {
    path: "/docs/how-to-upgrade/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--how-to-upgrade-md" */ "/Users/zhangxuewen/gridsome.org/docs/how-to-upgrade.md")
    }
  },
  {
    path: "/docs/jamstack/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--jamstack-md" */ "/Users/zhangxuewen/gridsome.org/docs/jamstack.md")
    }
  },
  {
    path: "/docs/deploy-to-az-static-web-app/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-az-static-web-app-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-az-static-web-app.md")
    }
  },
  {
    path: "/docs/guide-netlify-cms/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--guide-netlify-cms-md" */ "/Users/zhangxuewen/gridsome.org/docs/guide-netlify-cms.md")
    }
  },
  {
    path: "/docs/images/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--images-md" */ "/Users/zhangxuewen/gridsome.org/docs/images.md")
    }
  },
  {
    path: "/docs/fast-by-default/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--fast-by-default-md" */ "/Users/zhangxuewen/gridsome.org/docs/fast-by-default.md")
    }
  },
  {
    path: "/docs/gridsome-cli/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--gridsome-cli-md" */ "/Users/zhangxuewen/gridsome.org/docs/gridsome-cli.md")
    }
  },
  {
    path: "/docs/guide-comments/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--guide-comments-md" */ "/Users/zhangxuewen/gridsome.org/docs/guide-comments.md")
    }
  },
  {
    path: "/docs/guide-forms/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--guide-forms-md" */ "/Users/zhangxuewen/gridsome.org/docs/guide-forms.md")
    }
  },
  {
    path: "/docs/guide-search/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--guide-search-md" */ "/Users/zhangxuewen/gridsome.org/docs/guide-search.md")
    }
  },
  {
    path: "/docs/head/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--head-md" */ "/Users/zhangxuewen/gridsome.org/docs/head.md")
    }
  },
  {
    path: "/docs/deploy-to-amazon-s3/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-amazon-s-3-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-amazon-s3.md")
    }
  },
  {
    path: "/docs/deploy-to-surge-sh/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-surge-sh-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-surge-sh.md")
    }
  },
  {
    path: "/docs/fetching-data/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--fetching-data-md" */ "/Users/zhangxuewen/gridsome.org/docs/fetching-data.md")
    }
  },
  {
    path: "/docs/filtering-data/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--filtering-data-md" */ "/Users/zhangxuewen/gridsome.org/docs/filtering-data.md")
    }
  },
  {
    path: "/docs/data-store-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--data-store-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/data-store-api.md")
    }
  },
  {
    path: "/docs/deploy-to-21yunbox/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-21-yunbox-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-21yunbox.md")
    }
  },
  {
    path: "/docs/deploy-to-amplify/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-amplify-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-amplify.md")
    }
  },
  {
    path: "/docs/deploy-to-firebase/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-firebase-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-firebase.md")
    }
  },
  {
    path: "/docs/deploy-to-github/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-github-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-github.md")
    }
  },
  {
    path: "/docs/deploy-to-gitlab/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-gitlab-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-gitlab.md")
    }
  },
  {
    path: "/docs/deploy-to-google/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-google-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-google.md")
    }
  },
  {
    path: "/docs/deploy-to-netlify/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-netlify-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-netlify.md")
    }
  },
  {
    path: "/docs/deploy-to-vercel/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deploy-to-vercel-md" */ "/Users/zhangxuewen/gridsome.org/docs/deploy-to-vercel.md")
    }
  },
  {
    path: "/docs/environment-variables/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--environment-variables-md" */ "/Users/zhangxuewen/gridsome.org/docs/environment-variables.md")
    }
  },
  {
    path: "/docs/faq/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--faq-md" */ "/Users/zhangxuewen/gridsome.org/docs/faq.md")
    }
  },
  {
    path: "/docs/client-side-data/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--client-side-data-md" */ "/Users/zhangxuewen/gridsome.org/docs/client-side-data.md")
    }
  },
  {
    path: "/docs/code-of-conduct/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--code-of-conduct-md" */ "/Users/zhangxuewen/gridsome.org/docs/code-of-conduct.md")
    }
  },
  {
    path: "/docs/data-layer/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--data-layer-md" */ "/Users/zhangxuewen/gridsome.org/docs/data-layer.md")
    }
  },
  {
    path: "/docs/dev-tools/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--dev-tools-md" */ "/Users/zhangxuewen/gridsome.org/docs/dev-tools.md")
    }
  },
  {
    path: "/docs/directory-structure/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--directory-structure-md" */ "/Users/zhangxuewen/gridsome.org/docs/directory-structure.md")
    }
  },
  {
    path: "/docs/dynamic-routing/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--dynamic-routing-md" */ "/Users/zhangxuewen/gridsome.org/docs/dynamic-routing.md")
    }
  },
  {
    path: "/docs/body-html-attributes/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--body-html-attributes-md" */ "/Users/zhangxuewen/gridsome.org/docs/body-html-attributes.md")
    }
  },
  {
    path: "/docs/client-api/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--client-api-md" */ "/Users/zhangxuewen/gridsome.org/docs/client-api.md")
    }
  },
  {
    path: "/docs/code-splitting/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--code-splitting-md" */ "/Users/zhangxuewen/gridsome.org/docs/code-splitting.md")
    }
  },
  {
    path: "/docs/core-concepts/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--core-concepts-md" */ "/Users/zhangxuewen/gridsome.org/docs/core-concepts.md")
    }
  },
  {
    path: "/docs/custom-css/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--custom-css-md" */ "/Users/zhangxuewen/gridsome.org/docs/custom-css.md")
    }
  },
  {
    path: "/docs/custom-fonts/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--custom-fonts-md" */ "/Users/zhangxuewen/gridsome.org/docs/custom-fonts.md")
    }
  },
  {
    path: "/docs/data/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--data-md" */ "/Users/zhangxuewen/gridsome.org/docs/data.md")
    }
  },
  {
    path: "/docs/deployment/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--deployment-md" */ "/Users/zhangxuewen/gridsome.org/docs/deployment.md")
    }
  },
  {
    path: "/docs/basic-config/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--basic-config-md" */ "/Users/zhangxuewen/gridsome.org/docs/basic-config.md")
    }
  },
  {
    path: "/docs/collections/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--collections-md" */ "/Users/zhangxuewen/gridsome.org/docs/collections.md")
    }
  },
  {
    path: "/docs/components/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--components-md" */ "/Users/zhangxuewen/gridsome.org/docs/components.md")
    }
  },
  {
    path: "/docs/config/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--config-md" */ "/Users/zhangxuewen/gridsome.org/docs/config.md")
    }
  },
  {
    path: "/docs/assets-css/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--assets-css-md" */ "/Users/zhangxuewen/gridsome.org/docs/assets-css.md")
    }
  },
  {
    path: "/docs/assets-fonts/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--assets-fonts-md" */ "/Users/zhangxuewen/gridsome.org/docs/assets-fonts.md")
    }
  },
  {
    path: "/docs/assets-scripts/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--assets-scripts-md" */ "/Users/zhangxuewen/gridsome.org/docs/assets-scripts.md")
    }
  },
  {
    path: "/docs/assets-svg/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--assets-svg-md" */ "/Users/zhangxuewen/gridsome.org/docs/assets-svg.md")
    }
  },
  {
    path: "/starters/:title/",
    component: c4
  },
  {
    name: "__plugins_id",
    path: "/plugins/:id*",
    component: c5,
    meta: {
      dataPath: "/plugins/_id_star.json",
      dynamic: true
    }
  },
  {
    path: "/contributor/:id/",
    component: c6
  },
  {
    path: "/starters/",
    component: c7
  },
  {
    path: "/logo/",
    component: c8
  },
  {
    path: "/ecosystem/",
    component: c9
  },
  {
    path: "/docs/",
    component: c3,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--readme-md" */ "/Users/zhangxuewen/gridsome.org/docs/README.md")
    }
  },
  {
    path: "/blog/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
