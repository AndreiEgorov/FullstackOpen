useful command to reuse node_modules in several projects

Folder structure 

-- Parent
    - node_modules
    - project1
    - project2
    - random_folder
        - project3

if you want to reuse top node modules folder in all 3 projects, 

cd into a project (say project1) and do command:
     ``` ln -s target_path link_path ```
It creates a "reference node_modules" folder in your project that looks to your main node_modules folder

Example: 

``` ln -s /Users/andreiegorov/Desktop/FSOpen/FullstackOpen/node_modules node_modules ``` 