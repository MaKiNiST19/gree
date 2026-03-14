const fs = require('fs');

const btuConfigs = [
    {
        file: 'src/app/gree-aphro-9000-btu-duvar-tipi-klima/page.tsx',
        importName: 'Aphro9000SeoArticle',
        importPath: '@/components/seo/Aphro9000SeoArticle'
    },
    {
        file: 'src/app/gree-aphro-12000-btu-duvar-tipi-klima/page.tsx',
        importName: 'Aphro12000SeoArticle',
        importPath: '@/components/seo/Aphro12000SeoArticle'
    },
    {
        file: 'src/app/gree-aphro-18000-btu-duvar-tipi-klima/page.tsx',
        importName: 'Aphro18000SeoArticle',
        importPath: '@/components/seo/Aphro18000SeoArticle'
    },
    {
        file: 'src/app/gree-aphro-24000-btu-duvar-tipi-klima/page.tsx',
        importName: 'Aphro24000SeoArticle',
        importPath: '@/components/seo/Aphro24000SeoArticle'
    }
];

for (const config of btuConfigs) {
    if (!fs.existsSync(config.file)) {
        console.log(`Not found: ${config.file}`);
        continue;
    }
    let content = fs.readFileSync(config.file, 'utf8');

    // 1. Remove the old seoContent variable declaration completely
    // It spans from `const seoContent = (` to the matching `);`
    const seoContentRegex = /const seoContent = \([\s\S]*?\n\);\n/;
    content = content.replace(seoContentRegex, '');

    // 2. Add the import
    if (!content.includes(config.importName)) {
        content = content.replace(
            "import AphroProductLayout from '@/components/AphroProductLayout';",
            `import AphroProductLayout from '@/components/AphroProductLayout';\nimport ${config.importName} from '${config.importPath}';`
        );
    }
    
    // 3. Update the seoContent prop in the AphroProductLayout to render the component 
    content = content.replace(
        /seoContent=\{seoContent\}/g,
        `seoContent={<${config.importName} />}`
    );

    fs.writeFileSync(config.file, content);
    console.log(`Updated ${config.file}`);
}
