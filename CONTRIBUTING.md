# CONTRIBUTING

We appreciate pull requests from anybody who wants to help! Check out our list of github issues [here](https://github.com/ashtonkbailey/BYOB/issues). Please use these issues as a helpful guidance for any contributions you would like to make. 

# Set Up

Please follow the steps in the [SETUP.md](BYOB/SETUP.md) file to get app running locally on your machine. 

This guide assumes that the git remote name of the main repo is ```upstream``` and that your fork is named ```origin```. 

Create a new branch on your local machine to make your changes against (based on upstream/master):
```
git checkout -b your-branch-name 
```

# Making a change

Make any changes you would like to add to the codebase. We use TDD (test driven development) to guide our code. To add a test, make changes to the ```routes.spec.js``` file in  BYOB/test and type these commands to see the test suite run: 
```
Start Running Tests

$ cmd C    // stop the execution of the server (if applicable)
$ npm test    // start running the testing suite 
```

Try to get any tests not passing to green! Once your tests are passing you can commit your changes. On your local machine type: 
```
$ git add .    // stages all your contributions to be commited
$ git commit -m "Add a concise commit message describing your change here"
$ git push origin your-branch-name
```

We prefer to use ```git rebase``` workflow before submitting PRs. If you are familiar, please rebase your work onto the current master branch with this command before submitting: 
```
$ git pull --rebase origin master
```

# Submitting a Pull Request

Use GitHub to submit a new pull request against upstream/master. To increase the chances that your pull request is accepted, please see our expectations for making a great commit below.

Our expectations for making great commits:
- Each commit should be incremental, achieving ONE small change at a time 
- Commits should have passing tests 
- Use a style consistent with the rest of the codebase
- Commit messages should be as short as possible, while providing sufficient detail about change being made and WHY the change is being made 
- Before submitting, rebase your work on the current master branch 

