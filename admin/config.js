CMS.init({
    config: {
      backend: {
        name: "github",
        repo: "TU_USUARIO/TU_REPO",
        branch: "main",
      },
      media_folder: "assets/img",
      public_folder: "/assets/img",
      publish_mode: "editorial_workflow",
      collections: [
        {
          name: "posts",
          label: "Posts",
          folder: "evento",
          create: true,
          slug: "{{slug}}/index",
          extension: "html",
          format: "frontmatter",
          preview: false,
          fields: [
            { label: "Título", name: "title", widget: "string" },
            { label: "Descripción", name: "description", widget: "text" },
            { label: "Fecha", name: "date", widget: "datetime" },
            { label: "Categoría", name: "category", widget: "string", default: "evento" },
            { label: "Portada", name: "thumbnail", widget: "image" },
            { label: "Contenido", name: "body", widget: "markdown" }
          ]
        }
      ]
    }
  });  