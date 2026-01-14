Understanding Project Management in NodeJS
a. Package Managers
What is a package manager?

A package manager is a tool that helps developers install, update, remove, and manage libraries (packages) used in a project.
In Node.js, packages contain reusable code such as frameworks, utilities, or tools.

Example:
Express is a package used to build web servers in Node.js.

        npm install express

Why do we need package managers in backend development?

Package managers help backend developers by:
    Automatically downloading required libraries
    Managing versions of libraries
    Avoiding conflicts between packages
    Saving time and effort
Without package managers, developers would have to manually download and configure every library.

Problems faced if package managers are not used:
If package managers are not used:
    It becomes difficult to manage dependencies
    Version mismatches can break the project
    Team members may run different versions of libraries
    Installing libraries manually is time-consuming

b. NPM (Node Package Manager):
What is NPM?
    NPM is the default package manager for Node.js.
    It is used to install, share, and manage Node.js packages.

Why is NPM important for Node.js applications?
NPM helps developers:
    Install thousands of ready-made packages
    Manage project dependencies
    Run scripts like start, test, and build

How NPM helps in managing dependencies
When a package is installed using NPM, it is added to package.json.
NPM automatically downloads required sub-packages and keeps track of versions.
Example:
        npm install mongoose

c. Backend Project Initialization
Command to initialize a Node.js project
        npm init

Difference between npm init and npm init -y
Command	                Purpose
npm init	            Asks the user questions before creating package.json
npm init -y	            Creates package.json with default values automatically


d. Files and Folders Created After Project Initialization
package.json
This file stores:
    Project name
    Version
    Installed dependencies
    Scripts to run the project

node_modules:
This folder contains all installed packages.
It is very large and is recreated using npm install.

package-lock.json:
This file locks the exact versions of all packages to ensure the project runs the same on every system.

Files/Folders that should NOT be pushed to GitHub:
    node_modules
Because it is very large and can be recreated using npm install.


Files that must be committed:
    package.json
    package-lock.json
These files tell others which packages are needed for the project.

Conclusion:
NPM and package managers make backend development easy, organized, and efficient by managing all required libraries automatically.