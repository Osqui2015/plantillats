// setup.cjs
const { execSync } = require("child_process");
const { existsSync, rmSync } = require("fs");

const projectName = process.argv[2];

if (!projectName) {
  console.error("Por favor, proporciona un nombre para el proyecto.");
  process.exit(1);
}

execSync(
  `git clone https://github.com/tu-usuario/nombre-del-repo.git ${projectName}`,
  { stdio: "inherit" }
);
process.chdir(projectName);
if (existsSync(".git")) {
  rmSync(".git", { recursive: true, force: true });
}
execSync("git init", { stdio: "inherit" });
execSync("npm install", { stdio: "inherit" });

console.log(`Proyecto ${projectName} creado con éxito!`);
