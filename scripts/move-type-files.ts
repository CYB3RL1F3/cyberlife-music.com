// scripts/move-generated.ts
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');
const gqlDir = path.join(ROOT, 'app/gql');
const typesDir = path.join(ROOT, 'app/types/gql');

const moveGeneratedFiles = (dir: string) => {
  console.log(`Moving generated type files from ${dir} to ${typesDir}`);
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      moveGeneratedFiles(full);
    } else if (file.endsWith('.ts')) {
      const rel = path.relative(gqlDir, full);
      const target = path.join(typesDir, rel);
      console.log(`Moving ${file}`);
      fs.mkdirSync(path.dirname(target), { recursive: true });

      fs.renameSync(full, target);
    }
  }
  console.log(
    `Successfully moved generated type files from ${dir} to ${typesDir}`,
  );
};

moveGeneratedFiles(gqlDir);

console.log('Done');
