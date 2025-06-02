window.addEventListener("load", () => {
  CMS.init({
    config: {
      backend: {
        name: "github",
        repo: "Noctrow/test", // ← remplaza esto por tu usuario y repo real
        branch: "main",
      },
      media_folder: "assets/img",       // Carpeta interna donde se guardan las imágenes
      public_folder: "/assets/img",     // Ruta accesible públicamente
      publish_mode: "editorial_workflow",

      collections: [
        {
          name: "posts",
          label: "Posts",
          folder: "evento",                // Carpeta donde se guardarán los posts
          create: true,
          slug: "{{slug}}/index",          // Para usar URLs tipo /evento/nombre-del-post/
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
});
