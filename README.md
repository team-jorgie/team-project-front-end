# Foxy File Front End

What does the app do, how does it work?

The app allows users to upload their own files. Once uploaded, other users can view and download their files as well as their own. Users can also edit and delete files they own from the app. The app make heavy use of the Amazon S3 service to handle upload and storage of files.

[Link to back end repo](https://github.com/team-jorgie/team-project-back-end)

[Link to deployed front end](https://team-jorgie.github.io/team-project-front-end/)

[Link to deployed back end](https://warm-tor-57872.herokuapp.com/)

Technologies used
- HTML
- CSS
- Javascript
- jQuery
- Handlebars

List of unsolved problems for future revision
- Single file detail view

Planning, Process and problem solving strategies

Early planning was more freeform, we knew we wanted to use Amazon’s S3 service to host the files and immediately set out to wireframe the design. We also had a relatively simple ERD to construct, so we also spent some time deciding how our workflow would work exactly and who would be responsible for different parts of the project

Our development process focused on people working either on their own or paired to try and maximize the usefulness of our time by tackling multiple objectives concurrently. We knew that the S3 component would take a long time to configure completely, and as such, Mike spent most of the first few days working on it, while Aubree and Dylan tackled the database configuration as well as building front end components for the website. Once the back end was finished, tasks were distributed so that people would be working on their own parts that would be integrated with others’ work later down the road. We also tried to identify strengths of each developer and lean into them.

We used pair programming fairly extensively when possible to ensure that developers would frequently have a second set of eyes. If the odd person out was needed, we worked close by or when remotely, with slack constantly open to ensure that people could always get the necessary assistance on particularly tricky coding challenges. Additionally at the end of development, Aubree stepped up to bug test the site to ensure all errors were well documented so they could be taken care of in a timely, orderly fashion.

Link to Wireframes
- [Homescreen](https://docs.google.com/drawings/d/1pw8pJ3O16qBPKFIDL2K8rrRc7pU_AO4ku68U0vQbRRs/edit?usp=sharing)
- [File List](https://docs.google.com/drawings/d/1MD3ItmYG7E2JdPRRsPbS0VVVcLuUtNav9jsR-qYKhek/edit?usp=sharing)
- [Single File View "My files"](https://docs.google.com/drawings/d/1ERzipcgSE8rG7Kp4G0ZLYj1-d6Lxn82VoBn8-qPqoXM/edit?usp=sharing)
- [Single File View “All files”](https://docs.google.com/drawings/d/13mtWhu2QeejQ1Yxc8s50007WKkIki2FbKhTAC__8NbA/edit?usp=sharing)

User Stories
- I want to be able to upload files from my computer.
- I want to be able to give my files a title
- I want to be able to add a description to files
- I want to be able to modify title and description
- I want to be able to add tags to my files
- I want to be able to delete files
- I want to be able to see a preview of my file with file type, title, description, dates, and tags
- I want to know the date/time the files were created or modified
- I want to be able to download my files for offline access.
- I want to be able to modify my file’s: title, description, and tags
- I want to be able to know the date/time the files were modified
- I want to be able to apply tags to my document

