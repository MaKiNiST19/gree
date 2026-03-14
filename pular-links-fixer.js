const fs = require('fs');

function makeClickable(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (filePath.includes('aphro')) {
        content = content.replace(/<div className="group relative">\s*\{\/\* 3rd background card \*\/\}\s*<div className="absolute inset-0([^"]*)" \/>\s*\{\/\* 2nd background card \*\/\}\s*<div className="absolute inset-0([^"]*)" \/>\s*<Link href="([^"]+)" className="([^"]+)">/g,
            '<Link href="$3" className="group relative block">\n                            {/* 3rd background card */}\n                                <div className="absolute inset-0$1" />\n                                \n                                {/* 2nd background card */}\n                                <div className="absolute inset-0$2" />\n                            \n                            <div className="$4">'
        );
        content = content.replace(/<\/div>\n\s*<\/Link>\n\s*<\/div>/g, '</div>\n                            </div>\n                        </Link>');
    }
    
    if (filePath.includes('pular') || filePath.includes('ticari') || filePath.includes('salon') || filePath.includes('duvar')) {
        let parts = content.split(/<div className="group relative">/);
        for(let i=1; i<parts.length; i++) {
            const match = parts[i].match(/<Link\s*href="([^"]+)"/);
            if(match) {
                // Remove the wrapping link inside the card if there is one
                parts[i] = parts[i].replace(/<Link\s*href="([^"]+)"\s*className="([^"]+)"\s*>/, '<div className="$2">');
                parts[i] = parts[i].replace(/<\/Link>\n\s*<\/div>\n\s*<\/div>/, '</div>\n                            </div>\n                        </Link>');
                
                parts[i] = '<Link href="' + match[1] + '" className="group relative block">' + parts[i];
            } else {
                parts[i] = '<div className="group relative">' + parts[i];
            }
        }
        content = parts.join('');
    }
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
}

makeClickable('src/app/gree-aphro-serisi-klima/page.tsx');
makeClickable('src/app/gree-pular-serisi-klima/page.tsx');
