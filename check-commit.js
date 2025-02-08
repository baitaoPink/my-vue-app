const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

// 获取 Git 提交的差异
const diff = execSync('git diff --cached --numstat').toString().trim();
const files = diff.split('\n').map(line => {
  const [added, removed, file] = line.split('\t');
  return { added: parseInt(added, 10), removed: parseInt(removed, 10), file };
});

// 计算总行数
const totalLines = files.reduce((sum, { added, removed }) => sum + added + removed, 0);
const totalFiles = files.length;

// 设置最大行数和最大文件数
const MAX_LINES = 500;
const MAX_FILES = 10;

// 检查是否符合条件
if (totalLines > MAX_LINES) {
  console.log(`Error: Your commit exceeds ${MAX_LINES} lines of changes!`);
  process.exit(1);
}

if (totalFiles > MAX_FILES) {
  console.log(`Error: Your commit changes more than ${MAX_FILES} files!`);
  process.exit(1);
}

console.log(`Commit accepted: ${totalLines} lines in ${totalFiles} files.`);
