# hair-volume-blog

```bash
npm install

npm start
```

## Create new post:

Posts are located under the `src/posts` folder, and it must be a Markdown 
(`.md`) or a nunjucks (`.njk`). 

### Metadata

The post must start with a metadata section to capture the details of the
article. Metadata section starts and ends with 3 dashes: `---`, and it 
contains a following optional items:

- `title`: The title of the post
- `description`: The summary of the post for the home page and list views
- `thumbnail`: Small image which appears next to the post in list views
- `image`: High resolution image for the carousel in the home page 
- `date`: Last modification of the post in `YYYY-MM-DD` format.
- `tags`: A list of tags
- `layout`: At the moment it is always `post`
- `authorPick`: Position of the post in the "Author pick" list, remove it
  if the post is not selected. 

For example:
```markdown
---
title: This is my first post.
description: This is a post on My Blog about agile frameworks.
thumbnail: https://picsum.photos/301/301
image: https://picsum.photos/1920/1080
date: 2018-05-01
tags:
  - fist tag
  - second tag
layout: post 
authorPick: 4
---
```

### Content

The content of the post is coming after the metadata section. 
