# Contributing to @seasonjs/tools

## How can I contribute？

### Imporve documentation

As a user of @seasonjs/tools you're the perfect candidate to help us improve our documentation. Typo corrections, error fixes, better explanations, more examples, etc. Open issues for things that could be improved. Anything. Even improvements to this document.

### Improve issues

Some issues are created with missing information, not reproducible, or plain invalid. Help make them easier to resolve. Handling issues takes a lot of time that we would rather spend on fixing bugs and adding features.

### Give feedback on issues

We're always looking for more opinions on discussions in the issue tracker. It's a good opportunity to influence the future direction of @seasonjs/tools.

### Submitting an issue

- The issue tracker is for issues.
- Search the issue tracker before opening an issue.
- Ensure you're using the latest version of @seasonjs/tools.
- Use a clear and descriptive title.
- Include as much information as possible: Steps to reproduce the issue, error message, client lib version, operating system, etc.
- The more time you put into an issue, the more we will.
- The best issue report is a failing test proving it.

### Submitting a pull request

- Non-trivial changes are often best discussed in an issue first, to prevent you from doing unnecessary work.
- For ambitious tasks, you should try to get your work in front of the community for feedback as soon as possible. Open a pull request as soon as you have done the minimum needed to demonstrate your idea. At this early stage, don't worry about making things perfect, or 100% complete. Add a [WIP] prefix to the title, and describe what you still need to do. This lets reviewers know not to nit-pick small details or point out improvements you already know you need to make.
- Don't include unrelated changes.
- Lint and test before submitting the pull request by running $ npm test.
- Make the pull request from a topic branch, not master.
- Use a clear and descriptive title for the pull request and commits.
- Write a convincing description of why we should land your pull request. It's your job to convince us. Answer "why" it's needed and provide use-cases.
- You might be asked to do changes to your pull request. There's never a need to open another pull request. Just update the existing one.

### Develop tips

- update npm packages

```bash
$ pnpm up
```

- install all

```bash
$ pnpm i
```

- start

```bash
$ pnpm run start
```

- build doc

```bash
$ pnpm run docs:build
```

- build packages

```bash
$ pnpm run build
```

- git setting

You must be `case-sensitive` because JS import is `case-sensitive`

```
git config core.ignorecase false
```

### File Structure

```
root
│
└───docks     dumi doc
│
└───src       code space
    │
    └───array
    │
    └───asyncQyeue
    │
    └───day
    │
    └───deepClone  not export to user yet,just an record.
    │
    └───dom
    │
    └───hoc        react hoc
    │
    └───hooks      react hooks
    │
    └───list
    │
    └───mixin      not export to user yet,just an record.
    │
    └───mobx
    │
    └───reg
    │
    └───store
    │
    └───thread
    │
    └───tree
    │
    └───typeCheck  not export to user yet,just an record.
    │
    └───ua
    │
    └───upload not export to user yet,just an record.
│
└───index.ts  Entry file
```
