import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';       

export default defineConfig({
    publicDir: false,
    build: {
      outDir: 'public/build',
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: 'assets/app.js',
      },
    },
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'assets/css/*', dest: 'css' },
          { src: 'assets/js/*', dest: 'js' },
          { src: 'assets/scss/*', dest: 'scss' },
          { src: 'assets/img/*', dest: 'img' },
          { src: 'assets/plugins/*', dest: 'plugins' },
        ],
      }),
    ],
  });
  
